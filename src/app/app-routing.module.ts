import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashdisplayComponent } from './cashdisplay/cashdisplay.component';
import { CashwithdrawpageComponent } from './cashwithdrawpage/cashwithdrawpage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'display/:amount', component: CashdisplayComponent },
  { path: 'amount', component: CashwithdrawpageComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
