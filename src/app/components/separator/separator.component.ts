import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {
  @Input() public parentData : any
  constructor() { }

  ngOnInit(): void {
  }

}
