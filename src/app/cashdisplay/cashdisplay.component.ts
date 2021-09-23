import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cashdisplay',
  templateUrl: './cashdisplay.component.html',
  styleUrls: ['./cashdisplay.component.css'],
})
export class CashdisplayComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  rupee = 0;
  result = {};
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramsId) => {
      this.rupee = paramsId.amount;
      console.log(this.rupee);
    });
    let c = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];

    for (let i = c.length - 1; i >= 0; i--) {
      this.check(c[i]);
    }
  }
  public check(a: number) {
    let temp = 0;
    if (a <= this.rupee) {
      temp = Math.floor(this.rupee / a);
      // this.result[a] = temp;
      //this.result.a=temp
      this.result = Object.assign(this.result, { [a]: temp });
      this.rupee = this.rupee % a;
      console.log(this.result);
    }
  }
}
