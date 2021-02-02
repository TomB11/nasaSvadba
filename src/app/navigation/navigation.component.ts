import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public innerWidth : any;
  public isOpen = false;
  public isMobile = false;

  constructor() { }

  ngOnInit(): void {
    innerWidth = window.innerWidth;
    if (this.innerWidth > 768) {
      this.isMobile = false
    } else {
      this.isMobile = true
    }
  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}
