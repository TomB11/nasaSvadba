import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-line-moment',
  templateUrl: './time-line-moment.component.html',
  styleUrls: ['./time-line-moment.component.css']
})
export class TimeLineMomentComponent implements OnInit {
  @Input() public photoImg : any
  @Input() public yearData : any
  @Input() public description : any

  constructor() { }

  ngOnInit(): void {
  }

}
