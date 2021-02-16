import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {


  @Input() url: string = ''
  @Input() text : string = ''
  @Input() textBold : string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
