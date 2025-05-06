import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexLegend,
  ApexNonAxisChartSeries,
  ChartComponent
} from "ng-apexcharts";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @ViewChild("chart") chart?: ChartComponent;

  @Input() chartTitle: string = "";
  @Input() series: ApexNonAxisChartSeries = [];
  @Input() labels: string[] = [];
  @Input() type: "pie" | "donut" = "donut";
  @Input() radius: number = 380;
  @Input() donutHoleSize: string = "50%";
  @Input() colors: string[] = [];
  @Input() legend: ApexLegend = {
    position: 'bottom',
    horizontalAlign: 'center'
  };
  @Input() centerText: string = '';

  public chartOptions: any;

  ngOnInit(): void {
    this.chartOptions = {
      series: this.series,
      chart: {
        type: this.type,
        width: this.radius
      },
      labels: this.labels,
      colors: this.colors,
      legend: this.legend,
      plotOptions: {
        pie: {
          donut: {
            size: this.donutHoleSize,
            labels: {
              show: true,
              total: {
                show: true,
                label: this.centerText,
                fontSize: '18px',
                color: '#373d3f'
              }
            }
          }
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
