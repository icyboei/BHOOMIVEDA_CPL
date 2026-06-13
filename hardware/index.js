const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// ESP32 COM Port
const port = new SerialPort({
  path: 'COM8', // Change if needed
  baudRate: 115200,
});

// Read Serial Data Line by Line
const parser = port.pipe(
  new ReadlineParser({ delimiter: '\r\n' })
);

// Frontend Socket Connection
io.on('connection', (socket) => {
  console.log('Frontend Connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Frontend Disconnected:', socket.id);
  });
});

// ESP32 Data Receive
parser.on('data', (data) => {

  console.log('Raw:', data);

  const parts = data.split(',');

  let sensorData = {};

  parts.forEach((part) => {

    const [key, value] = part.split(':');

    if (!key || !value) return;

    sensorData[key.trim()] = value.trim();
  });

  console.log('Parsed Data:', sensorData);

  // Send Data to Frontend
  io.emit('sensorData', sensorData);

  console.log('Sent to Frontend:', sensorData);
});

// Serial Port Errors
port.on('error', (err) => {
  console.log('Serial Port Error:', err.message);
});

// Start Server
server.listen(3000, () => {
  console.log('Server Running on Port 3000');
});