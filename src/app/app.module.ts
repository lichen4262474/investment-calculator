import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
  ],
  imports: [CurrencyPipe, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
