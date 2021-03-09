import { Component, OnInit } from '@angular/core';

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

  public desc1 = "Začali sme randiť"
  public desc2 = "Naše prvé spoločné bývanie"
  public desc3 = "Nasťahoval sa k nám Loki"
  public desc4 = "Zasnúbili sme sa"
  public desc5 = "Povieme si ÁNO"

  constructor() { }

  ngOnInit(): void {
  }

}
