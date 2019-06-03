
var ctx = document.getElementById('income-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        datasets: [{
            label: 'przychód',
            data: [CHARTDATA],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value, index, values) {
                        return value + 'zł';
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: ''
                }
            }]
        }
    }
});

function yearButtonPressed(){
    document.getElementById("monthPicker").hidden=true;
    document.getElementById('yearButton').className = "btn btn-primary";
    document.getElementById('monthButton').className = "btn btn-light";
}
function monthButtonPressed(){
    document.getElementById("monthPicker").hidden=false;
    document.getElementById('yearButton').className = "btn btn-light";
    document.getElementById('monthButton').className = "btn btn-primary";
}

document.getElementById("yearButton").addEventListener("click", yearButtonPressed);
document.getElementById("monthButton").addEventListener("click", monthButtonPressed);