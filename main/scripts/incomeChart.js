
var myChart = null;

// data is injected from python code
var incomeData = INCOMEDATA;
var dates = DATES;


function daysInMonth(iMonth, iYear){
    return 32 - new Date(iYear, iMonth, 32).getDate();
}


function showAnnualIncome(year){

    if(myChart){
        myChart.destroy();
    }

    let chartData = [];
    for(let i=0; i<12; i++){
        chartData[i] = 0;
    }

    for(let i=0; i<incomeData.length; i++){
        if(dates[i].substring(0, 4) == year){
            let idx = parseInt(dates[i].substring(5, 7));
            chartData[idx-1] += incomeData[i];
        }
    }

    let ctx = document.getElementById('income-chart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
            datasets: [{
                label: 'przychód w zł',
                data: chartData,
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
}

function showMonthlyIncome(year, month){

    if(myChart){
        myChart.destroy();
    }

    let ctx = document.getElementById('income-chart').getContext('2d');

    let daysArray = [];
    for(let i=1; i<=daysInMonth(month, year); i++){
        daysArray.push(i);
    }

    let chartData = [];
    for(let i=0; i<daysArray.length; i++){
        chartData[i] = 0;
    }

    for(let i=0; i<incomeData.length; i++){
        if(dates[i].substring(0, 4) == year){
            let mon = parseInt(dates[i].substring(5, 7));
            if(mon-1 == month){
                chartData[parseInt(dates[i].substring(8, 10))-1] += incomeData[i];
            }
        }
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: daysArray,
            datasets: [{
                label: 'przychód w zł',
                data: chartData,
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
                    'rgba(255, 159, 64, 0.2)',
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
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
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
                    'rgba(255, 159, 64, 0.2)',
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
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
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
}

var option = "annual"; // annual / monthly

function updateGraph(){
    if(option == "annual"){
        showAnnualIncome( document.getElementById('yearField').value );
    }
    else{

        var monthPicker = document.getElementById("monthPicker");
        var month = monthPicker.options[monthPicker.selectedIndex].value - 1;

        showMonthlyIncome( document.getElementById('yearField').value, month );
    }
}

function yearButtonPressed(){
    option = "annual";
    document.getElementById("monthPicker").hidden=true;
    document.getElementById('yearButton').className = "btn btn-primary";
    document.getElementById('monthButton').className = "btn btn-light";
    updateGraph()
}
function monthButtonPressed(){
    option = "monthly";
    document.getElementById("monthPicker").hidden=false;
    document.getElementById('yearButton').className = "btn btn-light";
    document.getElementById('monthButton').className = "btn btn-primary";
    updateGraph()
}

document.getElementById("yearButton").addEventListener("click", yearButtonPressed);
document.getElementById("monthButton").addEventListener("click", monthButtonPressed);

document.getElementById("yearField").addEventListener("change", updateGraph)
document.getElementById("monthPicker").addEventListener("change", updateGraph)

showAnnualIncome( document.getElementById("yearField").value );