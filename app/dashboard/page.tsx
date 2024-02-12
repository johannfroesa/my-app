"use client"
import Chart from 'chart.js/auto';

window.onload = function() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx === null) {
        throw new Error('Kann den Canvas-Rendering-Kontext nicht abrufen');
    }

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni'],
            datasets: [{
                label: 'Beispieldaten',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};




export default function DashboardPage(){
    return(
        <div className="grid items-start gap-8">
            <h1>Dashboard</h1>
            <canvas id="myChart" className="w-full"></canvas>
        </div>
    )
}


