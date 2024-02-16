const apiUrl = "https://mindicador.cl/api";
let myChart = ""

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    try {
        const response = await fetch(`${apiUrl}/${currency}`);
        const data = await response.json();

        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<p>Resultado: ${(amount / data.serie[0].valor).toFixed(2)} </p>`;

        const chartData = data.serie.slice(0, 10).reverse();
        renderChart(chartData);
    } catch (error) {
        alert(error.message);
    }
}

function renderChart(data) {
    const chartLabels = data.map(entry => entry.fecha.substring(0,10));
    const chartValues = data.map(entry => entry.valor);

    if (myChart) {
    
        myChart.destroy();
    }

    const ctx = document.getElementById('chart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Valor de la Moneda' ,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: chartValues,
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}