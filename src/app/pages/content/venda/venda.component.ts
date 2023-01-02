import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/assets/data/dataFake';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css', './venda.component.responsive.css']
})
export class VendaComponent implements OnInit {
  photoCover:string = "";
  contentTitle:string = "";
  contentValue:string = "";
  contentDescription:string = "";
  private id:string | null= "0";

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0]

    this.photoCover = result.photo
    this.contentTitle = result.title
    this.contentValue = result.value
    this.contentDescription = result.description
  }

}
