import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  urlImage = "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/full/angular2.png";

  constructor() { }

  ngOnInit(): void {
  }

}
