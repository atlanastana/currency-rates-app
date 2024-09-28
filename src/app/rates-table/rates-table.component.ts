import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Rate} from 'src/app/models/rate.model';
import {AsyncPipe, DatePipe, DecimalPipe} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-rates-table',
  templateUrl: './rates-table.component.html',
  styleUrls: ['./rates-table.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    DecimalPipe,
    MatTableModule,
    MatCardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesTableComponent {
  rates$: Observable<Rate[]>;

  constructor(private store: Store<{ rates: { rates: Rate[] } }>) {
    this.rates$ = this.store.select(state => state.rates.rates);
  }
}
