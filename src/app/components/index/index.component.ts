import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  block1 = false;
  block2 = false;
  block3 = false;
  block4 = false;

  LineChart = [];
  BarChart = [];
  PieChart = [];
  barchartRealisticSales = [];
  RadarChart = [];


  constructor() { }

  ngOnInit() {
    // Line chart:
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Number of Items Sold in Months',
          data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth: 1
        }]
      },
      options: {
        title:{
          text:"Line Chart",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });

// Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'horizontalBar',
      data: {
        labels: ['Heizofen Nabertherm', 'Arbeitsplatz Rüstvorbereitung', 'Druckmaschine Fermac', 'Lager Werkzeug für Druckmaschine Fermac',
          'Farbvorbereitung konsolidiert', 'Siebvorbereitung konsolidiert', 'Arbeitsplatz Abziehbild-Dekoration', 'Qualitätsprüfung konsolidiert',
         'Druckmaschine CNC', 'Ofen MT FORNI INDUSTRIALI', 'Steuerung Ofen alt konsolidiert', 'Ofen Neu', 'Steuerung Ofen neu', 'Arbeitsplatz Auspacken (1/2)',
          'Arbeitsplatz Auspacken (2/2)', 'Druckmaschine K10G', 'Druckmaschine K10 (Nr. 1)', 'Druckmaschine K10 (Nr. 2)', 'Druckmaschine K10 (Nr. 3)',
          'Palettenwickler', 'Lager Rückstellmuster konsolidiert', 'Arbeitsplatz Verpackung', 'Lager Verpackungsmaterial', 'Warenein-/ Warenausgangslager (intern)',
          'Bereitstellungslager Tagesprod./ Aufwärmen', 'Bereitstellungslager vor ‚Fermac‘', 'Bereitstellungslager vor ‚CNC‘', 'Bereitstellungslager vor ‚K10‘',
          'Zwischenlager vor/ nach Palettenwickler ', 'Hauptverfahrweg'],
        datasets: [{
          label: 'Old',
          data: [0.98, 0.78, 28.25, 1.24, 0.00, 0.00, 1.00, 0.00, 15.14, 66.83, 0.00, 0.00, 0.00, 1.28, 0.96, 3.60, 1.54, 1.54, 1.54, 7.50,
            0.00, 0.84, 0.65, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        },
        {label: 'New',
      data: [6.00, 4.50, 144.00, 5.40, 15.00 , 20.00, 7.50, 9.00, 42.75, 140.00, 3.15, 210.00, 6.00, 2.88, 2.88, 14.00, 12.00, 12.00, 12.00,
        20.00, 56.00, 3.60, 5.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
      backgroundColor: [
      'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
    ],
      borderColor: [
      'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
    ],
      borderWidth: 1
  }]
      },
      options: {
        title: {
          text: 'Evaluation Edited Chart',
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        },
        xAxes: [{
          barPercentage: 1,
          barThickness: 10,
          maxBarThickness: 10,
          minBarLength: 2,
          gridLines: {
            offsetGridLines: true
          }
        }]
      }
    });

// pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Delivery-1', 'Warehouse-2', 'Production-3', 'Adjoining rooms-4', 'Free space'],
        datasets: [{
          label: '# of Votes',
          data: [203.58, 968.49, 944.16, 272.35, 195],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
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
        title: {
          text: 'Factory Area Data(m^2)',
          display: true
        },
      }
    });

    // Bar chart:
    this.barchartRealisticSales = new Chart('barchart-realistic-sales', {
      type: 'bar',
      data: {
        labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        datasets: [{
          // label: 'Old',
          data: [538000, 572800, 796000, 831000, 1055200, 1000000, 1037000, 1074000, 1111000, 1148000, 1185000],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
            'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)', 'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Total Sales Realistic',
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        },
        xAxes: [{
          barPercentage: 1,
          barThickness: 10,
          maxBarThickness: 10,
          minBarLength: 2,
          gridLines: {
            offsetGridLines: true
          }
        }]
      }
    });

    // Rada chart:
    this.RadarChart = new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: ['Lager & Logistik (674 €/m²)', 'Produktion (979 €/m²)', 'Nebenräume (1717 €/m²)', 'Anlieferung (674 €/m²)'],
        datasets: [{
          label: '# of Votes',
          data: [ 678044.00, 984874.00, 688517.00, 145584.00],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
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
        title: {
          text: 'Construction Cost',
          display: true
        },
      }
    });


  }

  fireEvent(e) {
    if ((e.x > 585 && e.x < 920) && (e.y > 275 && e.y < 430)) {
      console.log('block 1');
      // this.block2 = this.block3 = this.block4 = false;
      // this.block1 = true;
    } else if ((e.x > 590 && e.x < 922) && (e.y > 433 && e.y < 475))  {
        console.log('block 2');
        // this.block1 = this.block3 = this.block4 = false;
        // this.block2 = true;
    } else if ((e.x > 970 && e.x < 1255) && (e.y > 275 && e.y < 430)) {
        console.log('block 3');
        this.block2 = this.block1 = this.block4 = false;
        this.block3 = true;
    } else if ((e.x > 976 && e.x < 1255) && (e.y > 435 && e.y < 475)) {
      console.log('block 4');
      // this.block2 = this.block3 = this.block1 = false;
      // this.block4 = true;
    }
  }
}
