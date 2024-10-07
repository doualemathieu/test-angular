import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CharacterState } from './character.reducer';

export const selectCharacterState = createFeatureSelector<CharacterState>('character');

export const selectCharacter = createSelector(
    selectCharacterState,
    (state: CharacterState) => state.character 
  );
