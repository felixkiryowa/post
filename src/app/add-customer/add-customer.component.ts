import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../services/customer.service';

import { Location } from '@angular/common';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent {

  customer = new Customer();
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private location: Location,
    private Notify: SnotifyService
  ) { }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

 addCustomer() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.customerService.addCustomer(this.customer).subscribe(
      data => this.handleResponse(data)
    );
  }

   // Define a method to handle users response
   handleResponse(res) {
    this.Notify.success(res.response, {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
}
