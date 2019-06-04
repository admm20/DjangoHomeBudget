
var myChart = null;

// data is injected from python code
var expensesData = EXPENSESDATA;
/*

var myChart = null;

// data is injected from python code
var expensesData = {"products": [{"price": "50.0", "categoryId": "Zwierzęta", "date": "2019-06-03", "nameOfProduct": "Karma dla psa"}, 
{"price": "150.0", "categoryId": "Zwierzęta", "date": "2019-06-12", "nameOfProduct": "Karma dla kota"}, 
{"price": "300.0", "categoryId": "Dom", "date": "2019-06-20", "nameOfProduct": "Prąd"}]};
*/

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}


function showAnnualExpenses(year) {

    if (myChart) {
        myChart.destroy();
    }

    let annualData = {};

    for (let i = 0; i < expensesData.products.length; i++) {

        let category = expensesData.products[i].categoryId;
        let price = expensesData.products[i].price;

        if (expensesData.products[i].date.substring(0, 4) == year) {

            if(!annualData[category]){
                annualData[category] = {"sum": 0.0};
            }

            annualData[category].sum += parseInt(price);
        }
    }
    
    let chartLabels = Object.keys(annualData);
    
    let chartData = [];
    for(let i = 0; i<chartLabels.length; i++){
        chartData.push(annualData[chartLabels[i]].sum);
    }
    
    let chartColor = [];
    let chartBorderColor = [];
    for(let i = 0; i<chartLabels.length; i++){

    }

    let ctx = document.getElementById('income-chart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Wydatki',
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
        options: {/*
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
            }*/
        }
    });
}

function showMonthlyExpenses(year, month) {

    if (myChart) {
        myChart.destroy();
    }

    let ctx = document.getElementById('income-chart').getContext('2d');

    let daysArray = [];
    for (let i = 1; i <= daysInMonth(month, year); i++) {
        daysArray.push(i);
    }

    let chartData = [];
    for (let i = 0; i < daysArray.length; i++) {
        chartData[i] = 0;
    }

    for (let i = 0; i < expensesData.length; i++) {
        if (dates[i].substring(0, 4) == year) {
            let mon = parseInt(dates[i].substring(5, 7));
            if (mon - 1 == month) {
                chartData[parseInt(dates[i].substring(8, 10)) - 1] += expensesData[i];
            }
        }
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: daysArray,
            datasets: [{
                label: 'przychód',
                data: chartData,
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

function updateGraph() {
    if (option == "annual") {
        showAnnualExpenses(document.getElementById('yearField').value);
    }
    else {

        var monthPicker = document.getElementById("monthPicker");
        var month = monthPicker.options[monthPicker.selectedIndex].value - 1;

        showMonthlyExpenses(document.getElementById('yearField').value, month);
    }
}

function yearButtonPressed() {
    option = "annual";
    document.getElementById("monthPicker").hidden = true;
    document.getElementById('yearButton').className = "btn btn-primary";
    document.getElementById('monthButton').className = "btn btn-light";
    updateGraph()
}
function monthButtonPressed() {
    option = "monthly";
    document.getElementById("monthPicker").hidden = false;
    document.getElementById('yearButton').className = "btn btn-light";
    document.getElementById('monthButton').className = "btn btn-primary";
    updateGraph()
}

document.getElementById("yearButton").addEventListener("click", yearButtonPressed);
document.getElementById("monthButton").addEventListener("click", monthButtonPressed);

document.getElementById("yearField").addEventListener("change", updateGraph)
document.getElementById("monthPicker").addEventListener("change", updateGraph)

showAnnualExpenses( document.getElementById("yearField").value );