import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  myForm = new FormGroup({
    cardNo: new FormControl('', [
      Validators.required,
      Validators.max(9999999999999999),
      Validators.min(1000000000000000),
    ]),
    pin: new FormControl('', [
      Validators.required,
      Validators.min(1000),
      Validators.max(9999),
    ]),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.myForm);
    this.router.navigate(['/amount']);
  }
}
