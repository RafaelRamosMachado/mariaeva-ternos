import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.component.responsive.css']
})
export class CardComponent implements OnInit {
  @Input()
  cardPhoto:string=""
  @Input()
  cardDescription:string=""
  @Input()
  cardValue:string=""
  @Input()
  Id:string="0";


  constructor() { }

  ngOnInit(): void {
  }

}
