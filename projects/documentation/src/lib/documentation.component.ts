import { Component,OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
    selector: 'lib-docs',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class DocumentationComponent implements OnInit {

    chart:Chart;

    ngOnInit(): void {
        const ctx = document.getElementById('pie');
        const data = {
            datasets: [{
                data: [18, 20, 30],
                backgroundColor: ['#545454', '#373534', '#000'],
                fill: true
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Scripts',
                'Assets',
                'Styles'
            ]
        };
        // And for a doughnut chart
        this.chart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {}
        });
        const data1 = {
            datasets: [{
                label:'Javascripts (750KB)',
                data: [18, 20, 30],
                backgroundColor: ['#545454', '#373534', '#000'],
                fill: true
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'main',
                'vendor',
                'polyphills'
            ]
 
        };

        const barCtx = document.getElementById('bar');
        let myBarChart = new Chart(barCtx, {
            type: 'horizontalBar',
            data: data1,
            options: {}
        });
    }
}
