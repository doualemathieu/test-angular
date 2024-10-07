import { createAction, props } from '@ngrx/store';
import { Character } from '../../character';

export const changePositionCharacter = createAction('Character change position', props<{ character: Character }>());
