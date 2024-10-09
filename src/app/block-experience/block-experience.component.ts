import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../character';
import { selectCharacter } from '../store/character/character.selector';
import { AsyncPipe, NgStyle } from '@angular/common';
import { Position } from '../position';

@Component({
  selector: 'app-block-experience',
  standalone: true,
  imports: [AsyncPipe, NgStyle],
  template: ` 
  @let character = character$ | async ;

<p id="block-message" [ngStyle]="{'top.px': position.top, 'left.px': position.left}">
     {{character?.position?.top}}
    r {{position.top}}r
</p>`
,
  styleUrl: './block-experience.component.scss'
})
export class BlockExperienceComponent {
  @Input() position: Position = { top : 0, left : 0};
  private store = inject(Store)
  character$: Observable<Character> = this.store.select(selectCharacter);
}
