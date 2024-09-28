import {Injectable} from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {loadRatesSuccess} from '../actions/rates.actions';
import {RatesService} from "../../services/rates.service";

@Injectable()
export class RatesEffects {
  constructor(private actions$: Actions, private ratesService: RatesService) {
  }

  loadRates$ = createEffect(() =>
    this.ratesService.getRates().pipe(
      map(rates => loadRatesSuccess({rates})),
    ),
  );
}
