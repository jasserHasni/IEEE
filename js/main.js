document.addEventListener("DOMContentLoaded", function () {
  // Random Data Generators
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateProtocolData() {
    return {
      labels: ["TCP", "UDP", "ICMP", "HTTP", "DNS"],
      datasets: [
        {
          label: "Protocol Distribution",
          data: [
            getRandomInt(50, 100),
            getRandomInt(30, 80),
            getRandomInt(10, 40),
            getRandomInt(40, 90),
            getRandomInt(20, 70),
          ],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
          ],
        },
      ],
    };
  }

  function generatePacketSizeData() {
    return {
      labels: [
        "0-500 bytes",
        "500-1000 bytes",
        "1000-1500 bytes",
        "1500+ bytes",
      ],
      datasets: [
        {
          label: "Packet Size Distribution",
          data: [
            getRandomInt(100, 200),
            getRandomInt(80, 160),
            getRandomInt(50, 130),
            getRandomInt(30, 90),
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    };
  }

  function generateCloudIPData() {
    const cloudIPs = [
      "34.201.32.173 (AWS)",
      "35.190.85.182 (Google Cloud)",
      "13.234.176.102 (AWS)",
      "104.196.204.221 (Google Cloud)",
      "40.112.72.205 (Azure)",
    ];
    return {
      labels: cloudIPs,
      datasets: [
        {
          label: "Top IPs",
          data: cloudIPs.map(() => getRandomInt(50, 150)),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
          ],
        },
      ],
    };
  }

  // Chart Initializations
  const protocolChart = new Chart(document.getElementById("protocol-chart"), {
    type: "pie",
    data: generateProtocolData(),
    options: { responsive: true },
  });

  const packetSizeChart = new Chart(
    document.getElementById("packet-size-chart"),
    {
      type: "bar",
      data: generatePacketSizeData(),
      options: { responsive: true, scales: { y: { beginAtZero: true } } },
    }
  );

  const srcIpChart = new Chart(document.getElementById("src-ip-chart"), {
    type: "doughnut",
    data: generateCloudIPData(),
    options: { responsive: true },
  });

  const destIpChart = new Chart(document.getElementById("dest-ip-chart"), {
    type: "doughnut",
    data: generateCloudIPData(),
    options: { responsive: true },
  });
});
