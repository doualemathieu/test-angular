import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../character';
import { selectCharacter } from '../store/character/character.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-block-experience',
  standalone: true,
  imports: [AsyncPipe],
  template: ` 
  @let character = character$ | async ;

<p id="block-message">
     {{character?.position?.top}}
</p>`
,
  styleUrl: './block-experience.component.scss'
})
export class BlockExperienceComponent {
  private store = inject(Store)
  character$: Observable<Character> = this.store.select(selectCharacter);
}
