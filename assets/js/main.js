// Header JS
(function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
      $('#nav-toggle').click(function() {
    $('nav ul').toggle();
  });
    });
  })(jQuery);
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("header");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

// Partners JS
$(document).ready(function () {
    $(".partners-carousel").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            320: {
                items: 2
            },
            480: {
                items: 3
            },
            767: {
                items: 5
            },
            991: {
                items: 6
            },
            1000: {
                items: 6
            }
        }
    });
    $('.quote-owl-carousel').owlCarousel({
        autoplay: true,
        navigation: true,
        transitionStyle: "fade",
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            480: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

});

let ctx = document.getElementById('myChart').getContext('2d');
let ctx_02 = document.getElementById('myChart_02').getContext('2d');
let ctx_2 = document.getElementById('myChart_2').getContext('2d');
Chart.defaults.global.elements.point.backgroundColor = '#159393';
Chart.defaults.global.elements.point.radius = '8';

const myoptions = {
    scales: {
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Predictions per second (log scale)'
            },
            ticks: {
                beginAtZero: true,
                stepValue: 2,
                max: 4,
                min: -8
            }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'F1 Score'
            },
            ticks: {
                beginAtZero: true,
                steps: 7,
                stepValue: 0.2,
                max: 1
            }
        }]
    },
    legend: {
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'black',
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            lineHeight: '2'
        },
        display: false,
        label: {
            paddingTop: '40px',
        }
    }
};

var scatterChart = new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: 'scatter',
    data: {
        datasets: [{
            label: 'DefaultLabel',
            backgroundColor: 'teal',
            borderColor: '#000',
            fill: false,
            data: [{
                x: 0.22,
                y: -1.778,
                label: 'Ph.D Students',
                title: "test",
            }, {
                x: 0.5,
                y: 3,
                label: 'Logistic regression trained on 40 examples',
                title: "test",
            }],
            pointRadius: 5,
            pointBorderWidth: 2,
        }],
    },
    options: myoptions
});
var scatterChart = new Chart(ctx_2, {
    plugins: [ChartDataLabels],
    type: 'scatter',
    data: {
        datasets: [{
            label: 'DefaultLabel',
            backgroundColor: 'teal',
            borderColor: '#000',
            fill: false,
            data: [{
                x: 0.22,
                y: -1.778,
                label: 'Ph.D Students',
                title: "test",
            }, {
                x: 0.5,
                y: 3,
                label: 'Logistic regression trained on 40 examples',
                title: "test",
            }],
            pointRadius: 5,
            pointBorderWidth: 2,
        }],
    },
    options: myoptions
});
var scatterChart = new Chart(ctx_02, {
    plugins: [ChartDataLabels],
    type: 'scatter',
    data: {
        datasets: [{
            label: 'DefaultLabel',
            backgroundColor: 'teal',
            borderColor: '#000',
            fill: false,
            data: [{
                x: 0.22,
                y: -1.778,
                label: 'Ph.D Students',
                title: "test",
            }, {
                x: 0.5,
                y: 3,
                label: 'Logistic regression trained on 40 examples',
                title: "test",
            }],
            pointRadius: 5,
            pointBorderWidth: 2,
        }],
    },
    options: myoptions
});


