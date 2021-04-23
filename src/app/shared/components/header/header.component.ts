import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuOpen: boolean = false; 
  logo: string = '../../../../assets/logo.png';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.menuOpen = !this.menuOpen;
  }

}
