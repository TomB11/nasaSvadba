import { Component, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { interval } from 'rxjs';
import {Slovak} from '../assets/lang/slovak';
import {English} from '../assets/lang/english';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budeme sa brať';
  weddingTime = ""

  public separator1 = ""
  public separator2 = ""
  public separator3 = ""
  public separator4 = ""

  public motoText = ""

  countDownDate = new Date("July 17, 2021 00:00:00").getTime();
  now = new Date().getTime();
  distance = 0
  days = 0
  hours = 0
  minutes = 0
  seconds = 0

  ngOnInit(): void {
    interval(1000).subscribe(x => {
      this.counter();
    });

    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage === 'eng') {
      this.title = English.bigMainTitle
      this.motoText = English.motoText
      this.separator1 = English.navItem1
      this.separator2 = English.navItem2
      this.separator3 = English.navItem3
      this.separator4 = English.navItem4
    } else {
      this.title = Slovak.bigMainTitle
      this.motoText = Slovak.motoText
      this.separator1 = Slovak.navItem1
      this.separator2 = Slovak.navItem2
      this.separator3 = Slovak.navItem3
      this.separator4 = Slovak.navItem4
    }
  }

  counter() {
    this.now = new Date().getTime();

    this.distance = this.countDownDate - this.now;

    this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

    this.weddingTime = this.days + "d " + this.hours + "h " + this.minutes + "m " + this.seconds + "s";
  }

}
