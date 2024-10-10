import { createAction, props } from '@ngrx/store';
import { Block } from '../../block';

export const selectBlock = createAction('Select Block', props<{ block: Block }>());
