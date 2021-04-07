import { Component, OnInit } from '@angular/core';

import {Slovak} from '../../../assets/lang/slovak';
import {English} from '../../../assets/lang/english';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public photo1 = "assets/img/2014.jpg"
  public photo2 = "assets/img/2017.jpg"
  public photo3 = "assets/img/loki.jpg"
  public photo4 = "assets/img/2020.jpg"
  public photo5 = "assets/img/2021.jpg"

  public desc1 = ""
  public desc2 = ""
  public desc3 = ""
  public desc4 = ""
  public desc5 = ""

  constructor() { }

  ngOnInit(): void {
    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage === 'eng') {
      this.desc1 = English.desc1
      this.desc2 = English.desc2
      this.desc3 = English.desc3
      this.desc4 = English.desc4
      this.desc5 = English.desc5
    } else {
      this.desc1 = Slovak.desc1
      this.desc2 = Slovak.desc2
      this.desc3 = Slovak.desc3
      this.desc4 = Slovak.desc4
      this.desc5 = Slovak.desc5
    }
  }

}
