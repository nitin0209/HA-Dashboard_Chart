$(function () {
  // =====================================
  // Profit
  // =====================================
  var chart = {
    // series: [{ name: "Saving this year:", data: [9520, 12400, 18000, 21000] }],
    series: [{ name: "Saving this year:", data: [809, 2000, 3268, 6255] }],

    chart: {
      type: "bar",
      height: 115,
      offsetX: -15,
      toolbar: { show: false },
      // foreColor: "#f6f9fc",
      foreColor: "lightgrey",
      fontFamily: "inherit",
      sparkline: { enabled: false },
    },

    // colors: ["#f6f9fc"],
    colors: ["#fa896b"],

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    /* grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    }, */

    grid: {
      show: false,
    },

    xaxis: {
      show: false,
      type: "categories",
      // categories: ["2020", "2021", "2022", "2023"],
      categories: ["2023", "2024", "2025", "2026"],
      labels: {
        style: { cssClass: "red--text lighten-1--text fill-color" },
      },
    },

    yaxis: {
      show: false,
      min: 0,
      // max: 24000,
      max: 7000,
      tickAmount: 4,
      labels: {
        style: {
          // cssClass: "red--text lighten-1--text fill-color",
        },
        style: {
          // color: "#ffffff",
          // color: "#ffffff",
        },
      },
    },
    stroke: {
      show: false,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },

    // tooltip: { theme: "dark" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            },
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart);
  chart.render();

  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    // series: [55421, 70799],
    series: [4500, 5500],
    labels: ["Retrofit work", "Good condition"],
    chart: {
      width: 185,
      type: "pie",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "65%",
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    // colors: ["#fa896b", "#F9F9FD"],
    colors: ["#fa896b", "lightgrey"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      // theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();

  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 120,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#fa896b",
    },
    series: [
      {
        name: "Savings",
        // color: "#F9F9FD",
        color: "#fa896b",
        // data: [2120000, 3104500, 5300000, 12100000],
        data: [83000, 423000, 723000, 4023000],
      },
    ],

    xaxis: {
      // categories: ["2020", "2021", "2022", "2023"],
      categories: ["2023", "2024", "2025", "2026"],
      labels: {
        show: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 3,
      colors: ["#fa896b"],
      strokeColors: "#fa892a",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
    },
    tooltip: {
      // theme: "dark",
      // theme: "light",
      fixed: {
        enabled: true,
        position: "right",
      },
      y: {
        formatter: (value) => {
          return `${(value / 1000000).toFixed(1)}M`;
        },
      },
      x: {
        show: true,
      },
    },
  };
  new ApexCharts(document.querySelector("#saving"), earning).render();
});
