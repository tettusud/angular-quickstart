import { Component,OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    ngOnInit(): void {
        const ctx = document.getElementById('canvas');
        const data = {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: ['red', 'yellow', 'blue'],
                fill: true
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        };
        // And for a doughnut chart
        this.chart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {}
        });
    }
}
