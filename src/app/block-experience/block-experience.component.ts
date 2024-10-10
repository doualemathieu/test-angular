import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../character';
import { selectCharacter } from '../store/character/character.selector';
import { AsyncPipe, NgClass, NgStyle } from '@angular/common';
import { Position } from '../position';
import { Block } from '../block';
import { selectBlock } from '../store/block/block.selector';

@Component({
  selector: 'app-block-experience',
  standalone: true,
  imports: [AsyncPipe, NgStyle, NgClass],
  template: ` 
  <!-- @let character = character$ | async ; -->
  @let selectedBlock = block$ | async;

<div id="block-message" [ngStyle]="{'top.px': position.top, 'left.px': position.left } ">
    <div class="component">
        <ul class="align">
          <li>
            <div class='book' [ngClass]="block.index === selectedBlock?.index ? 'hover' : ''" >

              <!-- Front -->

              <ul class='hardcover_front'>
                <li>
                  <div class="coverDesign blue">
                    <h1></h1>
                    <p></p>
                  </div>
                </li>
                <li></li>
              </ul>

              <!-- Pages -->

              <ul class='page'>
                <li></li>
                <li>
                  
                </li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <!-- Back -->

              <ul class='hardcover_back'>
                <li></li>
                <li></li>
              </ul>
              <ul class='book_spine'>
                <li></li>
                <li></li>
              </ul>
            
</div>
          </li>
        </ul>
      </div>
</div>`
  ,
  styleUrl: './block-experience.component.scss'
})
export class BlockExperienceComponent {
  @Input() position: Position = { top: 0, left: 0 };
  @Input() block: Block = { position: { top: 450, left: 600 }, selected: false, index: 0 };
  private store = inject(Store)
  character$: Observable<Character> = this.store.select(selectCharacter);
  block$: Observable<Block> = this.store.select(selectBlock);
}
