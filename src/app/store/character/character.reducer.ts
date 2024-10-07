import { createReducer, on } from '@ngrx/store';
import { Character } from '../../character';
import { changePositionCharacter } from './character.actions';

export interface CharacterState {
    character: Character;
}

const characterInitialState: CharacterState = {
    character: {
        position: {
            top: 0,
            left: 0
        }
    }
};

export const charactersReducer = createReducer(
    characterInitialState, 
    on(changePositionCharacter,  (state, { character }) => ({
        ...state, 
        character: character
      }))
  );