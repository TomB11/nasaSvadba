import { Component, OnInit } from '@angular/core';

import {Slovak} from '../../../assets/lang/slovak';
import {English} from '../../../assets/lang/english';

@Component({
  selector: 'app-time-location',
  templateUrl: './time-location.component.html',
  styleUrls: ['./time-location.component.css']
})
export class TimeLocationComponent implements OnInit {

  constructor() { }

  title1 : string = ""
  title2 : string = ""
  description1 : string = ""
  description2 : string = ""
  time1 : string = ""
  time2 : string = ""

  ngOnInit(): void {
    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage === 'eng') {
      this.title1 = English.timeLocationTitle1
      this.title2 = English.timeLocationTitle2
      this.description1 = English.timeLocationDescription1
      this.description2 = English.timeLocationDescription2
      this.time1 = English.timeLocationTime1
      this.time2 = English.timeLocationTime2
    } else {
      this.title1 = Slovak.timeLocationTitle1
      this.title2 = Slovak.timeLocationTitle2
      this.description1 = Slovak.timeLocationDescription1
      this.description2 = Slovak.timeLocationDescription2
      this.time1 = Slovak.timeLocationTime1
      this.time2 = Slovak.timeLocationTime2
    }
  }

}
