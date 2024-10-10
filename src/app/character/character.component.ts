import { NgStyle } from '@angular/common';
import { Component, HostListener, inject, Input, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { changePositionCharacter } from '../store/character/character.actions';
import { Position } from '../position';
import { Block } from '../block';
import { selectBlock } from '../store/block/block.actions';

export const positionCharacter = signal({top : 100, left : 100});

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  @Input() blocks: Block[] = [{position : { top : 0, left : 0}, selected : false, index: 0}];
  private store = inject(Store)
  top = 320;
  left = 440;
  stepSize = 10;
  deplacement = "null";

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.deplacement = event.key;
    this.isPossibleToMove(event) ? this.toMove(event) : null;
  }

  isPossibleToMove = (event: any) => {
    const padding = 0;
    const widthCaharacter = 40;
    const heightCaharacter = 67;
    const heightBlock = 222;
    const widthBlock = 222;
    let isPossible = true;
    this.blocks.forEach(block => {
      if ( event.key === 'ArrowRight' && 
        (this.left + this.stepSize + padding + widthCaharacter) > block.position.left 
        && (this.left + this.stepSize + padding + widthCaharacter) < block.position.left + widthBlock
        && this.top + heightCaharacter > block.position.top && this.top < (block.position.top + heightBlock)
      ) {
        isPossible = false
        this.store.dispatch(selectBlock({block : {...block, selected : true}}));
      }

      if ( event.key === 'ArrowLeft' && (this.left - this.stepSize ) > block.position.left + padding
      && (this.left - this.stepSize ) < block.position.left + widthBlock + padding
      && this.top + heightCaharacter > block.position.top && this.top < (block.position.top + heightBlock)
      ) {
        isPossible = false
        this.store.dispatch(selectBlock({block : {...block, selected : true}}));
      }

      if ( event.key === 'ArrowDown' && 
      this.top + this.stepSize + padding + heightCaharacter > block.position.top 
      && (this.top + this.stepSize + padding + heightCaharacter) < block.position.top + heightBlock
        && this.left + widthCaharacter > block.position.left && this.left < (block.position.left + widthBlock)
      ) {
        isPossible = false
        this.store.dispatch(selectBlock({block : {...block, selected : true}}));
      }

      if ( event.key === 'ArrowUp' && (this.top - this.stepSize ) > block.position.top + padding
      && (this.top - this.stepSize ) < block.position.top + heightBlock
      && this.left + widthCaharacter > block.position.left && this.left < (block.position.left + widthBlock)
      ) {
        isPossible = false
        this.store.dispatch(selectBlock({block : {...block, selected : true}}));
      }
    })
    return isPossible
  } 

  toMove = (event : any) => {
    this.store.dispatch(selectBlock({block : {...this.blocks[0], index:0, selected : false}}));
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
    }


    this.store.dispatch(changePositionCharacter({character : { position : {top : this.top, left : this.left} }}));
  }
  
}
