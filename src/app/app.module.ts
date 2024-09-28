import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ratesReducer } from './store/reducers/rates.reducer';
import { RatesEffects } from './store/effects/rates.effects';
import { HttpClientModule } from '@angular/common/http';
import { RatesTableComponent } from './rates-table/rates-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({rates: ratesReducer}),
    EffectsModule.forRoot([RatesEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    BrowserAnimationsModule,
    RatesTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
