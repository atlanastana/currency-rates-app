import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {Rate} from '../models/rate.model';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  private ratesSubject = new BehaviorSubject<Rate[]>([]);
  rates$ = this.ratesSubject.asObservable();

  constructor() {
    this.simulateRateUpdates();
  }

  getRates(): Observable<Rate[]> {
    return this.rates$;
  }

  private simulateRateUpdates() {
    setInterval(() => {
      const newRates = this.generateRandomRates();
      this.ratesSubject.next(newRates);
    }, 500);
  }

  private generateRandomRates(): Rate[] {
    return [
      {time: new Date(), symbol: 'EURUSD', bid: Math.random(), ask: Math.random() + 0.01},
      {time: new Date(), symbol: 'GBPUSD', bid: Math.random(), ask: Math.random() + 0.01},
      {time: new Date(), symbol: 'USDJPY', bid: Math.random(), ask: Math.random() + 0.01},
    ];
  }
}
