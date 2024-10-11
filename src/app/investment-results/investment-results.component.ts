import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input()
  private investmentService = inject(InvestmentService);

  //expose data to the template
  get results() {
    return this.investmentService.resultsData;
  }
}
