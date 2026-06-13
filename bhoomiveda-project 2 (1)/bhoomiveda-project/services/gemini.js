export async function generateCropRecommendations(data) {
  const apiKey = window.BV_CONFIG.GEMINI_API_KEY;

  // Detect active app language (set by shared/language.js -> window.BV_I18N).
  // Priority: explicit data.language -> BV_I18N.lang -> localStorage -> "en".
  const lang =
    (data && data.language) ||
    (typeof window !== "undefined" && window.BV_I18N && window.BV_I18N.lang) ||
    (typeof localStorage !== "undefined" && localStorage.getItem("bv-language")) ||
    "en";

  const isHindi = lang === "hi";

  const languageInstruction = isHindi
    ? `IMPORTANT LANGUAGE REQUIREMENT:
- Respond ENTIRELY in Hindi using proper Devanagari script (देवनागरी).
- Every JSON string value (crop names, reasons, fertilizer plan, irrigation strategy, risks, profit explanation, confidence) MUST be written in Hindi.
- Do NOT mix English words inside the Hindi text. Use standard Hindi agricultural terms.
- Keep ONLY the JSON keys in English exactly as specified. Do not translate the keys.`
    : `IMPORTANT LANGUAGE REQUIREMENT:
- Respond ENTIRELY in clear, simple English.
- Do NOT use Hindi or any other language. Do not mix languages.
- Keep the JSON keys exactly as specified.`;

  const prompt = `
You are an agricultural expert.

${languageInstruction}

Farmer Location:
State: ${data.state}
District: ${data.district}
Village: ${data.village}

Weather:
Temperature: ${data.temp}°C
Humidity: ${data.humidity}%
Annual Rainfall: ${data.rainfall} mm

Soil:
Type: ${data.soilType}
pH: ${data.ph}
Nitrogen: ${data.nitrogen}
Phosphorus: ${data.phosphorus}
Potassium: ${data.potassium}

Season: ${data.season}
Budget: ${data.budget}
Land Size: ${data.land} acres

Provide:
1. Top 3 recommended crops
2. Why each crop is suitable
3. Fertilizer recommendations
4. Irrigation advice
5. Risk factors




Return ONLY valid JSON in this format:

{
  "crop1": "",
  "crop2": "",
  "crop3": "",
  "crop1Reason": "",
  "crop2Reason": "",
  "crop3Reason": "",
  "fertilizer": "",
  "irrigation": "",
  "risks": "",
  "profit": "",
  "confidence": ""
}

Do not return markdown.
Do not return HTML.
Do not add explanations outside JSON.
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      })
    }
  );

  const result = await response.json();

  console.log("Gemini Response:", result);

if (!response.ok) {
  throw new Error(
    result.error?.message || "Gemini API request failed"
  );
}

//   return (
//     result.candidates?.[0]?.content?.parts?.[0]?.text ||
//     "No recommendation generated."
//   );

// const text =
//   result.candidates?.[0]?.content?.parts?.[0]?.text;

// return JSON.parse(text);
// }

const text =
  result.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

const cleanText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleanText);
}