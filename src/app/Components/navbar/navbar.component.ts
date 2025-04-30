import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  public ativo:boolean = false;

  constructor() {
    window.addEventListener('scroll', (event) => {
      this.onScroll();
    });
  }
  onScroll() {
    let position = window.pageYOffset;

    if (position < 50) {
      this.ativo = false;
    } else {
      this.ativo = true;
    }
  }
}
