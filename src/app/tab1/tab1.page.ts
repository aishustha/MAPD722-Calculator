import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  noOfHours;
  hourlyRate;
  
  regularPay = 0;
  overtimePay = 0;
  totalPay = 0;
  tax = 0;
  netIncome = 0;

  constructor() {}

  payCalculate() {
    //if no of hours is less or equal than 40
    //then total pay=no_of_hours*hourly_rate
    //else, total pay=(no_of_hours-40)*hourly_rate*1.5 + 40*hourly_rate
    
    if (this.noOfHours <= 40) {
      //no overtime
      this.regularPay = this.noOfHours * this.hourlyRate
      this.overtimePay = 0;
    }

    else {
      //overtime
      this.regularPay = 40 * this.noOfHours;
      this.overtimePay = (this.noOfHours - 40) * this.hourlyRate * 1.5;
    }


    //tax = pay*0.18
    //totalPay
    this.totalPay = this.regularPay + this.overtimePay;

    //tax formulae
    this.tax = this.totalPay * 0.18;

    //netIncome
    this.netIncome = this.totalPay - this.tax;

  }
}
