// Language switching is fully handled by shared/language.js
// (auto-wires every <select class="bv-lang-switcher"> and applies
//  data-i18n attributes across the page).

window.addEventListener("bv-shell-ready", () => {
  
  

  const currentLang =
    localStorage.getItem("bv-language") || "en";
  

  const D = window.BV_DATA;

  const T = (k) => (window.BV_I18N ? window.BV_I18N.t(k) : k);
  const stats = [
    {
      icon: "leaf",
      label: T("activeCrops"),
      value: currentLang === "hi" ? "3 फसलें" : "3 Crops",
      sub: T("totalAcres"),
      trend: 0,
      color: "#81C784"
    },
    {
      icon: "activity",
      label: T("soilScore"),
      value: "78/100",
      sub: T("field"),
      trend: 5,
      color: "#FBC02D"
    },
  ];

  document.getElementById("bv-stat-row").innerHTML =
    stats.map(s => `
      <div class="bv-stat-card bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 shadow-sm cursor-default">
        <div class="flex items-start justify-between mb-3">
          <div class="p-2.5 rounded-xl" style="background:${s.color}20">
            <i data-lucide="${s.icon}" style="color:${s.color};width:18px;height:18px"></i>
          </div>

          <div class="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            s.trend >= 0
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-600"
          }">
            <i data-lucide="${
              s.trend >= 0
                ? "arrow-up"
                : "arrow-down"
            }" style="width:11px;height:11px"></i>

            ${Math.abs(s.trend)}%
          </div>
        </div>

        <div class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          ${s.value}
        </div>

        <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
          ${s.label}
        </div>

        <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
          ${s.sub}
        </div>
      </div>
    `).join("");

  document.getElementById("bv-soil-bars").innerHTML =
    D.soilData.map(item => `
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span class="text-gray-500 dark:text-gray-400">
            ${item.name}
          </span>

          <span class="font-semibold text-gray-900 dark:text-white">
            ${item.value}%
          </span>
        </div>

        <div class="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full bv-bar-fill"
            style="width:${item.value}%;background:${item.color}">
          </div>
        </div>
      </div>
    `).join("");

  const riskColor = {
    Low: "text-green-600 bg-green-50",
    Medium: "text-yellow-700 bg-yellow-50",
    High: "text-red-600 bg-red-50"
  };

  document.getElementById("bv-crop-picks").innerHTML =
    D.cropRecommendations.map(crop => `
      <div class="bv-pick-card bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-4 shadow-sm">

        <div class="flex items-center gap-3 mb-3">

          <span class="text-3xl">
            ${crop.icon}
          </span>

          <div>
            <div class="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-1.5">

              ${crop.crop}

              ${
                crop.hybrid
                  ? `
                    <span class="text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-full font-semibold">
                      ${T("hybrid")}
                    </span>
                  `
                  : ""
              }

            </div>

            <div class="text-xs text-green-600 font-semibold">
              ₹${crop.profit.toLocaleString()}/acre
            </div>
          </div>

          <div class="ml-auto text-center">

            <div class="text-lg font-black"
              style="color:${crop.color}">
              ${crop.confidence}%
            </div>

            <div class="text-xs text-gray-500 dark:text-gray-400">
              ${T("match")}
            </div>

          </div>
        </div>

        <div class="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-3">
          <div
            class="h-full rounded-full"
            style="width:${crop.confidence}%;background:${crop.color}">
          </div>
        </div>

        <div class="flex gap-2">

          <span class="text-xs px-2 py-0.5 rounded-full font-medium ${riskColor[crop.risk]}">
            ${T("risk")}: ${T((crop.risk || "").toLowerCase()) || crop.risk}
          </span>

          <span class="text-xs px-2 py-0.5 rounded-full font-medium text-blue-700 bg-blue-50">
            💧 ${crop.water}
          </span>

        </div>
      </div>
    `).join("");

  document.getElementById("bv-activity").innerHTML =
    D.recentActivity.map(a => `
      <div class="flex gap-3 items-start">

        <span class="text-lg leading-none mt-0.5">
          ${a.icon}
        </span>

        <div class="flex-1">

          <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            ${a.text}
          </p>

          <p class="text-xs text-gray-400 mt-0.5">
            ${a.time}
          </p>

        </div>
      </div>
    `).join("");

  const colorBorder = {
    warning: "border-l-yellow-400 bg-yellow-50",
    success: "border-l-green-500 bg-green-50",
    info: "border-l-blue-400 bg-blue-50",
    ai: "border-l-purple-400 bg-purple-50"
  };

  document.getElementById("bv-notif-cards").innerHTML =
    D.notifications.map(n => `
      <div class="border-l-4 rounded-r-xl px-3 py-2 ${colorBorder[n.type]} dark:bg-opacity-20">

        <div class="text-xs font-semibold text-gray-900 dark:text-white">
          ${n.title}
        </div>

        <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          ${n.desc}
        </div>

        <div class="text-xs text-gray-400 mt-1">
          ${n.time} ago
        </div>

      </div>
    `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }

  const months = D.marketData.map(m => m.month);

  new Chart(document.getElementById("bv-market-chart"), {
    type: "line",

    data: {
      labels: months,

      datasets: [
        {
          label: "Wheat",
          data: D.marketData.map(m => m.wheat),
          borderColor: "#2E7D32",
          backgroundColor: "rgba(46,125,50,.2)",
          fill: true,
          tension: .35,
          pointRadius: 0,
          borderWidth: 2
        },

        {
          label: "Rice",
          data: D.marketData.map(m => m.rice),
          borderColor: "#1565C0",
          backgroundColor: "rgba(21,101,192,.2)",
          fill: true,
          tension: .35,
          pointRadius: 0,
          borderWidth: 2
        },

        {
          label: "Soybean",
          data: D.marketData.map(m => m.soybean),
          borderColor: "#FBC02D",
          backgroundColor: "rgba(251,192,45,.2)",
          fill: true,
          tension: .35,
          pointRadius: 0,
          borderWidth: 2
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false
        }
      },

      scales: {
        x: {
          grid: {
            display: false
          }
        },

        y: {
          grid: {
            color: "rgba(0,0,0,.06)"
          }
        }
      }
    },
  });

  new Chart(document.getElementById("bv-profit-chart"), {
    type: "bar",

    data: {
      labels: D.profitData.map(p => p.crop),

      datasets: [
        {
          label: "Revenue",
          data: D.profitData.map(p => p.profit),
          backgroundColor: "#2E7D32",
          borderRadius: 4
        },

        {
          label: "Cost",
          data: D.profitData.map(p => p.cost),
          backgroundColor: "#81C784",
          borderRadius: 4
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false
        }
      },

      scales: {
        x: {
          grid: {
            display: false
          }
        },

        y: {
          grid: {
            color: "rgba(0,0,0,.06)"
          }
        }
      }
    },
  });

});
