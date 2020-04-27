import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-home',
  templateUrl: './back-to-home.component.html',
  styleUrls: ['./back-to-home.component.css']
})
export class BackToHomeComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
  }
  voltar(){
    this.route.navigate([''])
  }

}
