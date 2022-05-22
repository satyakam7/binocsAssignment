/* eslint-disable no-trailing-spaces */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Options } from '@angular-slider/ngx-slider';
import { Chart, registerables } from 'chart.js';
import { CalendarComponentOptions } from 'ion2-calendar';

Chart.register(...registerables);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  dat = [];
  f;
  t;
  dateRange: { from: string; to: string };
  type: 'js-date'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    from: new Date(2000, 0, 1),
    to: new Date(2050, 0, 1),
  };

  public data = [
    {
      Time: '9 Apr 2020',
      Crypto_Amt: 75,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '19 May 2020',
      Crypto_Amt: 500,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '2 Aug 2021',
      Crypto_Amt: 1999.14,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '2 Aug 2021',
      Crypto_Amt: 2002.32,
      Desc: 'USDT Withdrawn',
      Coin: 'USDT',
    },
    {
      Time: '6 Aug 2021',
      Crypto_Amt: 10,
      Desc: 'USDT Withdrawn',
      Coin: 'USDT',
    },
    {
      Time: '6 Aug 2021',
      Crypto_Amt: 0.048,
      Desc: 'BTC Withdrawn',
      Coin: 'BTC',
    },
    {
      Time: '9 Aug 2021',
      Crypto_Amt: 1000,
      Desc: 'FOHO Deposited',
      Coin: 'FOHO',
    },
    {
      Time: '9 Aug 2021',
      Crypto_Amt: 7500,
      Desc: 'FOHO Deposited',
      Coin: 'FOHO',
    },
    {
      Time: '9 Aug 2021',
      Crypto_Amt: 208.3333,
      Desc: 'FOHO Deposited',
      Coin: 'FOHO',
    },
    {
      Time: '9 Aug 2021',
      Crypto_Amt: 100,
      Desc: 'FOHO Deposited',
      Coin: 'FOHO',
    },
    {
      Time: '11 Aug 2021',
      Crypto_Amt: 1000,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '15 Aug 2021',
      Crypto_Amt: 4050,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '22 Aug 2021',
      Crypto_Amt: 0.62712493,
      Desc: 'BTC Deposited',
      Coin: 'BTC',
    },
    {
      Time: '23 Aug 2021',
      Crypto_Amt: 1.27020001,
      Desc: 'ETH Withdrawn',
      Coin: 'ETH',
    },
    {
      Time: '24 Aug 2021',
      Crypto_Amt: 1090.8,
      Desc: 'USDT Withdrawn',
      Coin: 'USDT',
    },
    {
      Time: '25 Aug 2021',
      Crypto_Amt: 1090.8,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '25 Aug 2021',
      Crypto_Amt: 1090.8,
      Desc: 'USDT Withdrawn',
      Coin: 'USDT',
    },
    {
      Time: '27 Aug 2021',
      Crypto_Amt: 0.627,
      Desc: 'BTC Withdrawn',
      Coin: 'BTC',
    },
    {
      Time: '5 Sep 2021',
      Crypto_Amt: 0.04839423,
      Desc: 'BTC Deposited',
      Coin: 'BTC',
    },
    {
      Time: '8 Sep 2021',
      Crypto_Amt: 1998,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '10 Sep 2021',
      Crypto_Amt: 0.83,
      Desc: 'ETH Withdrawn',
      Coin: 'ETH',
    },
    {
      Time: '13 Sep 2021',
      Crypto_Amt: 5.12,
      Desc: 'SPRINK Deposited',
      Coin: 'SPRINK',
    },
    {
      Time: '13 Sep 2021',
      Crypto_Amt: 6.86,
      Desc: 'SPRINK Deposited',
      Coin: 'SPRINK',
    },
    {
      Time: '20 Sep 2021',
      Crypto_Amt: 8600,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '20 Sep 2021',
      Crypto_Amt: 1.55,
      Desc: 'ETH Deposited',
      Coin: 'ETH',
    },
    {
      Time: '27 Sep 2021',
      Crypto_Amt: 0.63215342,
      Desc: 'BTC Deposited',
      Coin: 'BTC',
    },
    {
      Time: '1 Oct 2021',
      Crypto_Amt: 0.632,
      Desc: 'BTC Withdrawn',
      Coin: 'BTC',
    },
    {
      Time: '11 Oct 2021',
      Crypto_Amt: 0.84023258,
      Desc: 'ETH Deposited',
      Coin: 'ETH',
    },
    {
      Time: '21 Oct 2021',
      Crypto_Amt: 0.84023258,
      Desc: 'ETH Withdrawn',
      Coin: 'ETH',
    },
    {
      Time: '21 Oct 2021',
      Crypto_Amt: 500,
      Desc: 'FOHO Withdrawn',
      Coin: 'FOHO',
    },
    {
      Time: '2 Nov 2021',
      Crypto_Amt: 0.63719452,
      Desc: 'BTC Deposited',
      Coin: 'BTC',
    },
    {
      Time: '2 Nov 2021',
      Crypto_Amt: 0.84023258,
      Desc: 'ETH Deposited',
      Coin: 'ETH',
    },
    {
      Time: '3 Nov 2021',
      Crypto_Amt: 12.59,
      Desc: 'USDT Withdrawn',
      Coin: 'USDT',
    },
    {
      Time: '4 Nov 2021',
      Crypto_Amt: 12.59,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '4 Nov 2021',
      Crypto_Amt: 6.065e-5,
      Desc: 'BTC Deposited',
      Coin: 'BTC',
    },
    {
      Time: '12 Nov 2021',
      Crypto_Amt: 0.84,
      Desc: 'ETH Withdrawn',
      Coin: 'ETH',
    },
    {
      Time: '16 Nov 2021',
      Crypto_Amt: 10000,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '16 Nov 2021',
      Crypto_Amt: 10000,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '27 Nov 2021',
      Crypto_Amt: 11000,
      Desc: 'FOHO Withdrawn',
      Coin: 'FOHO',
    },
    {
      Time: '1 Dec 2021',
      Crypto_Amt: 500,
      Desc: 'BECOIN Deposited',
      Coin: 'BECOIN',
    },
    {
      Time: '3 Dec 2021',
      Crypto_Amt: 0.59,
      Desc: 'BTC Withdrawn',
      Coin: 'BTC',
    },
    {
      Time: '4 Dec 2021',
      Crypto_Amt: 10,
      Desc: 'USDT Withdrawn',
      Coin: 'USDT',
    },
    {
      Time: '4 Dec 2021',
      Crypto_Amt: 19676.73,
      Desc: 'USDT Deposited',
      Coin: 'USDT',
    },
    {
      Time: '9 Dec 2021',
      Crypto_Amt: 20.7456,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '9 Dec 2021',
      Crypto_Amt: 17.0938,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '9 Dec 2021',
      Crypto_Amt: 0.0257,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '9 Dec 2021',
      Crypto_Amt: 19.0701,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '10 Dec 2021',
      Crypto_Amt: 0.047,
      Desc: 'BTC Withdrawn',
      Coin: 'BTC',
    },
    {
      Time: '10 Dec 2021',
      Crypto_Amt: 800,
      Desc: 'BNS Withdrawn',
      Coin: 'BNS',
    },
    {
      Time: '11 Dec 2021',
      Crypto_Amt: 300,
      Desc: 'BECOIN Withdrawn',
      Coin: 'BECOIN',
    },
    {
      Time: '12 Dec 2021',
      Crypto_Amt: 0.5796,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '12 Dec 2021',
      Crypto_Amt: 23600,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '12 Dec 2021',
      Crypto_Amt: 387.9451,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '12 Dec 2021',
      Crypto_Amt: 0.85035587,
      Desc: 'ETH Deposited',
      Coin: 'ETH',
    },
    {
      Time: '13 Dec 2021',
      Crypto_Amt: 120,
      Desc: 'FOHO Deposited',
      Coin: 'FOHO',
    },
    {
      Time: '13 Dec 2021',
      Crypto_Amt: 200,
      Desc: 'BECOIN Deposited',
      Coin: 'BECOIN',
    },
    {
      Time: '13 Dec 2021',
      Crypto_Amt: 150,
      Desc: 'FOHO Withdrawn',
      Coin: 'FOHO',
    },
    {
      Time: '13 Dec 2021',
      Crypto_Amt: 0.85,
      Desc: 'ETH Withdrawn',
      Coin: 'ETH',
    },
    {
      Time: '13 Dec 2021',
      Crypto_Amt: 2125,
      Desc: 'BNS Withdrawn',
      Coin: 'BNS',
    },
    {
      Time: '19 Dec 2021',
      Crypto_Amt: 495.9816,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '7 Jan 2022',
      Crypto_Amt: 11900,
      Desc: 'BNS Withdrawn',
      Coin: 'BNS',
    },
    {
      Time: '12 Jan 2022',
      Crypto_Amt: 800,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '12 Jan 2022',
      Crypto_Amt: 13.1506,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '15 Jan 2022',
      Crypto_Amt: 910,
      Desc: 'BNS Withdrawn',
      Coin: 'BNS',
    },
    {
      Time: '15 Jan 2022',
      Crypto_Amt: 2125,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '19 Jan 2022',
      Crypto_Amt: 34.5969,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '19 Jan 2022',
      Crypto_Amt: 54.714,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '19 Jan 2022',
      Crypto_Amt: 0.0153,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '19 Jan 2022',
      Crypto_Amt: 1.6874,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '19 Jan 2022',
      Crypto_Amt: 114.9503,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '19 Jan 2022',
      Crypto_Amt: 0.0284,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '19 Jan 2022',
      Crypto_Amt: 12700,
      Desc: 'BNS Withdrawn',
      Coin: 'BNS',
    },
    {
      Time: '22 Jan 2022',
      Crypto_Amt: 20,
      Desc: 'BNS Withdrawn',
      Coin: 'BNS',
    },
    {
      Time: '11 Feb 2022',
      Crypto_Amt: 11900,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '13 Feb 2022',
      Crypto_Amt: 100,
      Desc: 'BNS Withdrawn',
      Coin: 'BNS',
    },
    {
      Time: '14 Feb 2022',
      Crypto_Amt: 910,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '18 Feb 2022',
      Crypto_Amt: 12700,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '18 Feb 2022',
      Crypto_Amt: 208.767,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '28 Feb 2022',
      Crypto_Amt: 662.2504,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '1 Mar 2022',
      Crypto_Amt: 23.0743,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '1 Mar 2022',
      Crypto_Amt: 0.0392,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '1 Mar 2022',
      Crypto_Amt: 43.0519,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '1 Mar 2022',
      Crypto_Amt: 138.4829,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '1 Mar 2022',
      Crypto_Amt: 0.0098,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '2 Mar 2022',
      Crypto_Amt: 0.302,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '3 Mar 2022',
      Crypto_Amt: 10400,
      Desc: 'BNS Withdrawn',
      Coin: 'BNS',
    },
    {
      Time: '3 Mar 2022',
      Crypto_Amt: 1000,
      Desc: 'BNS Withdrawn',
      Coin: 'BNS',
    },
    {
      Time: '4 Mar 2022',
      Crypto_Amt: 0.4636,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '6 Mar 2022',
      Crypto_Amt: 0.5796,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '8 Mar 2022',
      Crypto_Amt: 0.7186,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '9 Mar 2022',
      Crypto_Amt: 1.0702,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '10 Mar 2022',
      Crypto_Amt: 0.6968,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '12 Mar 2022',
      Crypto_Amt: 1.4532,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '15 Mar 2022',
      Crypto_Amt: 0.0097,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '16 Mar 2022',
      Crypto_Amt: 0.0195,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '23 Mar 2022',
      Crypto_Amt: 0.0194,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '26 Mar 2022',
      Crypto_Amt: 0.3637,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '30 Mar 2022',
      Crypto_Amt: 0.0198,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '2 Apr 2022',
      Crypto_Amt: 1000,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '2 Apr 2022',
      Crypto_Amt: 10400,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
    {
      Time: '4 Apr 2022',
      Crypto_Amt: 0.0159,
      Desc: 'BNS Deposited',
      Coin: 'BNS',
    },
  ];
  @ViewChild('doughnutSurvey', { static: true })
  public doughnutSurvey: ElementRef;
  @ViewChild('sumSurvey', { static: true }) public sumSurvey: ElementRef;

  doughnutChart: any;
  sumChart: any;
  bns: any[] = [];
  btc: any[] = [];
  eth: any[] = [];
  becoin: any[] = [];
  foho: any[] = [];
  usdt: any[] = [];
  timeArr = [];
  newArr: any = [];
  newData: any = [];
  constructor() {
    for (let j = 0; j < this.data.length; j++) {
      const key = this.data[j].Time.replace(/ /g, '-');
      this.data[j].Time = key;
    }

    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      if (element.Coin === 'BNS') {
        this.bns.push(element);
      }
      if (element.Coin === 'BTC') {
        this.btc.push(element);
      }
      if (element.Coin === 'ETH') {
        this.eth.push(element);
      }
      if (element.Coin === 'BECOIN') {
        this.becoin.push(element);
      }
      if (element.Coin === 'FOHO') {
        this.foho.push(element);
      }
      if (element.Coin === 'USDT') {
        this.usdt.push(element);
      }
    }

    console.log(this.data);
  }

  ngOnInit() {
    this.doughnutChart = new Chart(this.doughnutSurvey.nativeElement, {
      type: 'pie',

      options: {
        plugins: {
          title: {
            text: 'Number Of Coins',
            display: true,
          },
          legend: {
            display: true,
            onClick: null,
            labels: {
              color: 'black',

              usePointStyle: true,
              pointStyle: 'circle',
            },
          },
        },
      },
      data: {
        labels: [
          `BNS - ${this.bns.length}`,
          `BECOIN - ${this.becoin.length}`,
          `BTC - ${this.btc.length}`,
          `ETH - ${this.eth.length}`,
          `FOHO - ${this.foho.length}`,
          `USDT - ${this.usdt.length}`,
        ],

        datasets: [
          {
            label: 'Coins Data',
            data: [
              this.bns.length,
              this.becoin.length,
              this.btc.length,
              this.eth.length,
              this.foho.length,
              this.usdt.length,
            ],
            backgroundColor: [
              '#DFFF00',
              '#FFBF00',
              '#FF7F50',
              '#DE3163',
              '#6495ED',
              '#FF1493',
            ],
            borderColor: ['#000'],
            borderWidth: 1,
            hoverBackgroundColor: ['#000'],
          },
        ],
      },
    });

    this.sumChart = new Chart(this.sumSurvey.nativeElement, {
      type: 'pie',

      options: {
        plugins: {
          title: {
            text: 'Sum Of Coins',
            display: true,
          },
          legend: {
            display: true,
            onClick: null,
            labels: {
              color: 'black',

              usePointStyle: true,
              pointStyle: 'circle',
            },
          },
        },
      },
      data: {
        labels: [
          `BNS - ${this.arraySum(this.bns)}`,
          `BECOIN - ${this.arraySum(this.becoin)}`,
          `BTC - ${this.arraySum(this.btc)}`,
          `ETH - ${this.arraySum(this.eth)}`,
          `FOHO - ${this.arraySum(this.foho)}`,
          `USDT - ${this.arraySum(this.usdt)}`,
        ],

        datasets: [
          {
            label: 'Coins Data',
            data: [
              this.arraySum(this.bns),

              this.arraySum(this.becoin),

              this.arraySum(this.btc),

              this.arraySum(this.eth),

              this.arraySum(this.foho),
              this.arraySum(this.usdt),
            ],
            backgroundColor: [
              '#DFFF00',
              '#FFBF00',
              '#FF7F50',
              '#DE3163',
              '#6495ED',
              '#FF1493',
            ],
            borderColor: ['#000'],
            borderWidth: 1,
            hoverBackgroundColor: ['#000'],
          },
        ],
      },
    });
  }
  onChange(e) {
    const from = e.from._d;
    const to = e.to._d;
    console.log(from, to);
    console.log(this.data[-1]);
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      if (from > new Date(this.data[this.data.length - 1].Time)) {
        console.log('1');
        this.f = this.data.length;
        break;
      } else if (from < new Date(this.data[0].Time)) {
        this.f = 0;
        console.log('2');
        break;
      } else if (from < new Date(this.data[i].Time)) {
        this.f = this.data.indexOf(element);
        console.log('3');
        break;
      }
    }

    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      if (to > new Date(this.data[this.data.length - 1].Time)) {
        this.t = this.data.length;
        break;
      } else if (to < new Date(this.data[0].Time)) {
        this.t = 0;
        break;
      } else if (to < new Date(this.data[i].Time)) {
        this.t = this.data.indexOf(element);
        break;
      }
    }

    this.dat = this.data.slice(this.f, this.t);
    console.log(this.f, this.t);
    this.bns = [];
    this.btc = [];
    this.eth = [];
    this.becoin = [];
    this.foho = [];
    this.usdt = [];

    for (let i = 0; i < this.dat.length; i++) {
      const element = this.dat[i];
      if (element.Coin === 'BNS') {
        this.bns.push(element);
      }
      if (element.Coin === 'BTC') {
        this.btc.push(element);
      }
      if (element.Coin === 'ETH') {
        this.eth.push(element);
      }
      if (element.Coin === 'BECOIN') {
        this.becoin.push(element);
      }
      if (element.Coin === 'FOHO') {
        this.foho.push(element);
      }
      if (element.Coin === 'USDT') {
        this.usdt.push(element);
      }
    }
    console.log(this.dat);

    this.doughnutChart.destroy();
    this.sumChart.destroy();
    this.doughnutChart = new Chart(this.doughnutSurvey.nativeElement, {
      type: 'pie',

      options: {
        plugins: {
          legend: {
            display: true,
            onClick: null,
            labels: {
              color: 'black',
              padding: 6,
              boxWidth: 10,

              usePointStyle: true,
              pointStyle: 'circle',
            },
          },
        },
      },
      data: {
        labels: [`BNS`, `BECOIN`, `BTC`, `ETH`, `FOHO`, `USDT`],

        datasets: [
          {
            label: '# of Survey',
            data: [
              this.bns.length,
              this.becoin.length,
              this.btc.length,
              this.eth.length,
              this.foho.length,
              this.usdt.length,
            ],
            backgroundColor: [
              '#DFFF00',
              '#FFBF00',
              '#FF7F50',
              '#DE3163',
              '#6495ED',
              '#FF1493',
            ],
            hoverBackgroundColor: ['#FFCE56', '#F88379'],
          },
        ],
      },
    });
    this.sumChart = new Chart(this.sumSurvey.nativeElement, {
      type: 'pie',

      options: {
        plugins: {
          legend: {
            display: true,
            onClick: null,
            labels: {
              color: 'black',
              padding: 6,
              boxWidth: 10,

              usePointStyle: true,
              pointStyle: 'circle',
            },
          },
        },
      },
      data: {
        labels: [`BNS`, `BECOIN`, `BTC`, `ETH`, `FOHO`, `USDT`],

        datasets: [
          {
            label: 'Coins Data',
            data: [
              this.arraySum(this.bns),

              this.arraySum(this.becoin),

              this.arraySum(this.btc),

              this.arraySum(this.eth),

              this.arraySum(this.usdt),

              this.arraySum(this.foho),
            ],
            backgroundColor: [
              '#DFFF00',
              '#FFBF00',
              '#FF7F50',
              '#DE3163',
              '#6495ED',
              '#FF1493',
            ],
            hoverBackgroundColor: ['#FFCE56', '#F88379'],
          },
        ],
      },
    });
  }
  arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      sum += Math.abs(element.Crypto_Amt);
    }
    return sum;
  }
}
