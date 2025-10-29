import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuOpen = false;
  isScrolled = false;

  private lastScroll = 0;
  
toggleMenu() {
  const mobiles = document.getElementsByClassName('lnkmobile') as HTMLCollectionOf<HTMLElement>;
  this.menuOpen = !this.menuOpen;
  document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  for (let mobile of mobiles) {
    mobile.style.display = this.menuOpen ? 'flex' : 'none';
  }
}

closeMenu() {
  const mobiles = document.getElementsByClassName('lnkmobile') as HTMLCollectionOf<HTMLElement>;
  this.menuOpen = false;
  document.body.style.overflow = '';

  for (let mobile of mobiles) {
    mobile.style.display = 'none';
  }
}


  @HostListener('window:scroll')
  onScroll() {
    const current = window.scrollY;

    this.isScrolled = current > 40;

    const goingDownFast = current > this.lastScroll + 12;
    const goingUpFast = current < this.lastScroll - 12;

    this.lastScroll = current;
  }
}
