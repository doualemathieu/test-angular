import { NgStyle } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { changePositionCharacter } from '../store/character/character.actions';

export const positionCharacter = signal({top : 100, left : 100});

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  private store = inject(Store)
  top = 100;  // Position initiale en haut
  left = 100; // Position initiale à gauche
  stepSize = 10; // Pas de déplacement
  deplacement = "null";


  // Écouteur des touches du clavier
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.deplacement = event.key;
    console.log('event.key', event.key === ' ')
    switch (event.key) {
      case 'ArrowUp':
        this.top -= this.stepSize;
        break;
      case 'ArrowDown':
        this.top += this.stepSize;
        break;
      case 'ArrowLeft':
        this.left -= this.stepSize;
        break;
      case 'ArrowRight':
        this.left += this.stepSize;
        break;
      case ' ':
        this.top -= 20;
    }

    this.store.dispatch(changePositionCharacter({character : { position : {top : this.top, left : this.left} }}));
    
  }
  
}
