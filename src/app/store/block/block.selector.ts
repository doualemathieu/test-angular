import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlockState } from "./block.reducer";

export const selectBlockState = createFeatureSelector<BlockState>('block');

export const selectBlock = createSelector(
    selectBlockState,
    (state: BlockState) => state.block 
  );
