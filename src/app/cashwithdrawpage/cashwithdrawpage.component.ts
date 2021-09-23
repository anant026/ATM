import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashwithdrawpage',
  templateUrl: './cashwithdrawpage.component.html',
  styleUrls: ['./cashwithdrawpage.component.css'],
})
export class CashwithdrawpageComponent implements OnInit {
  constructor(private router: Router) {}
  myForm = new FormGroup({
    cash: new FormControl('', [
      Validators.required,
      Validators.max(9999999999999999),
      Validators.min(1),
    ]),
  });
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.myForm.controls.cash.value);
    this.router.navigate(['/display', this.myForm.controls.cash.value]);
  }
}
