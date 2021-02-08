import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public photo1 = "assets/img/20142.jpg"
  public photo2 = "assets/img/2017.jpg"
  public photo3 = "assets/img/loki.jpg"
  public photo4 = "assets/img/2020.jpg"
  public photo5 = "assets/img/2021.jpg"

  public desc1 = "Fotka 2014"
  public desc2 = "Fotka 2017"
  public desc3 = "Fotka Loki"
  public desc4 = "Fotka 2020"
  public desc5 = "Fotka 2021"

  constructor() { }

  ngOnInit(): void {
  }

}
