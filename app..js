var options = {
    series: [{
    name: 'Expense',
    data: [1000,2000, 3000, 1500,2000, 1750,1000, 2000, 1500]
  }, {
    name: 'Balance',
    data: [2000, 2000, 1500, 1750, 1000, 2000, 1000, 1750, 1500]
  },  ],
    chart: {
    type: 'bar',
    toolbar: {
      show: false
    },
    height: 300,
    width:600
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '70%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width:2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: ``  ,
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  },
  legend: {
    position: 'top'
  }
};
  ;
  

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

//pie chart
// var options = {
//   series: [44, 55, 41, 17, 15],
//   chart: {
//     width:400,
//     height:200,
//   type: 'donut',
// },
// responsive: [{
//   breakpoint: 480,
//   options: {
//     chart: {
//       width:100,
//       height:100,
//     },
    
//     legend: {
//       position: 'bottom'
//     },
    
//   }
// }]
// };



// var chart = new ApexCharts(document.querySelector("#mydiv"), options);
// chart.render();

var chart = document.querySelector('#mydiv')
var options = {
    series: [44, 55, 67, 83],
    chart: {
        height: 280,
        width:400,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function(w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 6850
                    }
                }
            }
        }
    },
    labels: ['food', 'transport', 'shopping', 'gift'],
};
var chart = new ApexCharts(chart, options);
chart.render();


 