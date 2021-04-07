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
  opion1 : string = ""
  option2 : string = ""
  contact : string = ""
  placeholderContact : string = ""
  classicMenu : string = ""
  childrenMenu : string = ""
  vegieMenu : string = ""
  placeholderMenu: string = ""
  music: string = ""
  placeholderMusic: string = ""

  constructor() { }

  ngOnInit(): void {

  }

}
