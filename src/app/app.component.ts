import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterComponent } from "./character/character.component";
import { BlockExperienceComponent } from "./block-experience/block-experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterComponent, BlockExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-angular';
}
