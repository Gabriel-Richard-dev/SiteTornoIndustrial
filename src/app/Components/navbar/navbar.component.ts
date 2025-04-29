import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor() {
    window.addEventListener('scroll', (event) => {
      this.onScroll();
    });
  }
  onScroll() {
    let position = window.pageYOffset;
    if (position < 50) {
      document.getElementById('navbar-content')!.classList.remove('ativo');
    } else {
      document.getElementById('navbar-content')!.classList.add('ativo');
    }
  }
}
