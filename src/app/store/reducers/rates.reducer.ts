import {createReducer, on} from '@ngrx/store';
import {loadRatesSuccess} from '../actions/rates.actions';
import {Rate} from '../../models/rate.model';

export interface RatesState {
  rates: Rate[];
}

export const initialState: RatesState = {
  rates: [],
};

export const ratesReducer = createReducer(
  initialState,
  on(loadRatesSuccess, (state, {rates}) => ({...state, rates})),
);
