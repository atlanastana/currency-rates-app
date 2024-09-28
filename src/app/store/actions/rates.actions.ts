import {createAction, props} from '@ngrx/store';
import {Rate} from '../../models/rate.model';

export const loadRatesSuccess = createAction(
  '[Rates API] Load Rates Success',
  props<{ rates: Rate[] }>(),
);
