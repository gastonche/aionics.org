
// Partners JS
$(document).ready(function () {
    $(".partners-carousel").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3
            },
            320: {
                items: 3
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
let ep_driver = document.getElementById('ep-driver-chart').getContext('2d');

// Chart.defaults.global.elements.point.pointStyle = "cross";

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
             fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            lineHeight: '2'
        },
        display: false,
        title: {
            display: true,
            text: 'Only 40 data points = 3x improvement!'
        }
    }
};

// Graph 1
var scatterChart = new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: 'scatter',
    data: {
        datasets: [{
            backgroundColor: 'teal',
            data: [{
                x: 0.22,
                y: -1.778,
                label: 'Ph.D Students',
                lineHeight: 2
            }, {
                x: 0.5,
                y: 3,
                label: 'Logistic regression trained on 40 examples',
            }],
            pointRadius: 5,
            pointBorderWidth: 2,
        }],
    },
    options: myoptions
});

// Graph 2
var scatterChart2 = new Chart(ctx_02, {
    plugins: [ChartDataLabels],
    type: 'scatter',
    padding: 23,
    data: {
        datasets: [{
            backgroundColor: 'teal',
            lineHeight: 2,
            fill: false,
            data: [{
                x: 0.22,
                y: -1.778,
                label: 'Ph.D Students',
                indexLabelPlacement: "inside",
            }, {
                x: 0.5,
                y: 3,
                label: 'Logistic regression trained on 40 examples',
                
            }],
            pointRadius: 5,
            pointBorderWidth: 2,
        }],
    },
    options: myoptions
});

// Electrolyte Performance Drivers chart
var barChart = new Chart(ep_driver, {
    type: 'bar',
    data: {
        labels: [
            'Electrolyte: Model Sixe',
            'Electrolyte: Polarity',
            'Cathode Particle Size', 
            'Cathode Sintering temperature',
            'Separator thickness', 
        ],
        datasets: [{
            borderWidth: 1,
            data: [
                [0, -0.4],
                [0, 1.5],
                [0, 0.25],
                [0, 0.03],
                [0, -0.5],
            ]
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
            display: false
        },
        title: {
            display: true,
            text: 'Electrolyte Performance Drivers'
        }
    }
});