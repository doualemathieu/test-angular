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
    { position : { top : 350, left : 600}},
    { position : { top : 10, left : 400}},
    { position : { top : 320, left : 100}}
  ]

}
