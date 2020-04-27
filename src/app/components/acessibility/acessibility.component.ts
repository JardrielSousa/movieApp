import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibility',
  templateUrl: './acessibility.component.html',
  styleUrls: ['./acessibility.component.css']
})
export class AcessibilityComponent implements OnInit {

  myFont = "20px";
  tipoAcessibilidade=false;
  size=false;

  constructor() { }

  ngOnInit() {
  }

  enableAcessibilidade(){
    if(this.tipoAcessibilidade){
      this.tipoAcessibilidade=false;
    }else{
      this.tipoAcessibilidade=true;
    }
 }
 enableSize(){
    this.size = true;
 }
 fechar(){
  this.tipoAcessibilidade=false;
  this.size = false;
 }
}
