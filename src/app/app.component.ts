import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterComponent } from "./character/character.component";
import { BlockExperienceComponent } from "./block-experience/block-experience.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterComponent, BlockExperienceComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-angular';
  blocks = [
    { index : 4, position : { top : 450, left : 600}, selected : false},
    { index : 1, position : { top : 10, left : 100}, selected : false},
    { index : 2, position : { top : 10, left : 600}, selected : false},
    { index : 3, position : { top : 450, left : 100}, selected : false}
  ]

}
