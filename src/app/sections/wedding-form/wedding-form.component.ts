import { Component, OnInit } from '@angular/core';

import {Slovak} from '../../../assets/lang/slovak';
import {English} from '../../../assets/lang/english';

@Component({
  selector: 'app-wedding-form',
  templateUrl: './wedding-form.component.html',
  styleUrls: ['./wedding-form.component.css']
})
export class WeddingFormComponent implements OnInit {

  name : string = ""
  placeholderName : string = ""
  come : string = ""
  option1 : string = ""
  option2 : string = ""
  contact : string = ""
  placeholderContact : string = ""
  classicMenu : string = ""
  childrenMenu : string = ""
  vegieMenu : string = ""
  placeholderMenu: string = ""
  music: string = ""
  placeholderMusic: string = ""
  buttonText: string = ""

  constructor() { }

  ngOnInit(): void {
    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage === 'eng') {
      this.name = English.questName
      this.placeholderName = English.placeholderName
      this.come = English.come
      this.option1 = English.option1
      this.option2 = English.option2
      this.contact = English.contact
      this.placeholderContact = English.placeholderContact
      this.classicMenu = English.classicMenu
      this.childrenMenu = English.childrenMenu
      this.vegieMenu = English.vegieMenu
      this.placeholderMenu = English.placeholderMenu
      this.music = English.music
      this.placeholderMusic = English.placeholderMusic
      this.buttonText = English.buttonText
    } else {
      this.name = Slovak.questName
      this.placeholderName = Slovak.placeholderName
      this.come = Slovak.come
      this.option1 = Slovak.option1
      this.option2 = Slovak.option2
      this.contact = Slovak.contact
      this.placeholderContact = Slovak.placeholderContact
      this.classicMenu = Slovak.classicMenu
      this.childrenMenu = Slovak.childrenMenu
      this.vegieMenu = Slovak.vegieMenu
      this.placeholderMenu = Slovak.placeholderMenu
      this.music = Slovak.music
      this.placeholderMusic = Slovak.placeholderMusic
      this.buttonText = Slovak.buttonText
    }
  }

}
