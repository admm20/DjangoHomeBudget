
var myChart = null;

// data is injected from python code
var incomeData = INCOMEDATA;
var dates = DATES;


function daysInMonth(iMonth, iYear){
    return 32 - new Date(iYear, iMonth, 32).getDate();
}


function showAnnualIncome(data){

    if(myChart){
        myChart.destroy();
    }

    let ctx = document.getElementById('income-chart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
            datasets: [{
                label: 'przychód',
                data: [CHARTDATA],/*
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
                ],*/
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
}

function showMonthlyIncome(data, daysInMonth){

    if(myChart){
        myChart.destroy();
    }

    let ctx = document.getElementById('income-chart').getContext('2d');

    let daysArray = [];
    for(let i=1; i<=daysInMonth; i++){
        daysArray.push(i);
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: daysArray,
            datasets: [{
                label: 'przychód',
                data: [CHARTDATA],/*
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
                ],*/
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
}


function yearButtonPressed(){
    document.getElementById("monthPicker").hidden=true;
    document.getElementById('yearButton').className = "btn btn-primary";
    document.getElementById('monthButton').className = "btn btn-light";
    showAnnualIncome(null);
}
function monthButtonPressed(){
    document.getElementById("monthPicker").hidden=false;
    document.getElementById('yearButton').className = "btn btn-light";
    document.getElementById('monthButton').className = "btn btn-primary";
    showMonthlyIncome(null, 31);
}

document.getElementById("yearButton").addEventListener("click", yearButtonPressed);
document.getElementById("monthButton").addEventListener("click", monthButtonPressed);

showAnnualIncome(null);