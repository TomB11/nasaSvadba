import { Component, OnInit } from '@angular/core';

import {Slovak} from '../../assets/lang/slovak';
import {English} from '../../assets/lang/english';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public innerWidth : any;
  public isOpen = false;
  public isMobile = false;

  nav1 : string = ""
  nav2 : string = ""
  nav3 : string = ""
  nav4 : string = ""

  constructor() { }

  ngOnInit(): void {
    innerWidth = window.innerWidth;
    if (this.innerWidth > 768) {
      this.isMobile = false
    } else {
      this.isMobile = true
    }

    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage === 'eng') {
      this.nav1 = English.navItem1
      this.nav2 = English.navItem2
      this.nav3 = English.navItem3
      this.nav4 = English.navItem4
    } else {
      this.nav1 = Slovak.navItem1
      this.nav2 = Slovak.navItem2
      this.nav3 = Slovak.navItem3
      this.nav4 = Slovak.navItem4
    }
  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  changeLang(choosedLang: string) {
    localStorage.setItem('language', choosedLang);
    location.reload();
  }
}
