import { createReducer, on, select } from '@ngrx/store';
import { Block } from '../../block';
import { selectBlock } from './block.actions';

export interface BlockState {
    block: Block;
}

const blockInitialState: BlockState = {
    block: {
        position: {
            top: 0,
            left: 0
        },
        selected : false,
        index: 0
    }
};

export const blockReducer = createReducer(
    blockInitialState, 
    on(selectBlock,  (state, { block }) => ({
        ...state, 
        block: block
      }))
  );