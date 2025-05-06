import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexLegend,
  ChartComponent
} from "ng-apexcharts";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {

  @ViewChild("chart") chart?: ChartComponent;

  @Input() chartTitle: string;

  @Input() series: ApexAxisChartSeries = [];
  @Input() type: "bar" | "column" = "bar";
  @Input() stacked: boolean = false;
  @Input() categories: string[] = [];
  @Input() height: number = 450;
  @Input() colors: string[] = [];
  @Input() legend: ApexLegend = { position: "right", offsetY: 40 };
  @Input() fillOpacity: number = 1;

  public chartOptions: any;

  ngOnInit(): void {
    this.chartOptions = {
      series: this.series,
      chart: {
        type: "bar",
        height: this.height,
        stacked: this.stacked,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      colors: this.colors,
      plotOptions: {
        bar: {
          horizontal: this.type === "bar"
        }
      },
      xaxis: {
        type: "category",
        categories: this.categories
      },
      legend: this.legend,
      fill: {
        opacity: this.fillOpacity
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ]
    };
  }
}
