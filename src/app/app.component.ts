import { Component, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budeme sa brat';
  weddingTime = ""

  public separator1 = "O nas"
  public separator2 = "Miesto a cas"
  public separator3 = "Svadobny formular"
  public separator4 = "Kontakt"

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
