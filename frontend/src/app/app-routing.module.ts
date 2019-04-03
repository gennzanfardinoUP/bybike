import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartOneComponent } from './part-one/part-one.component';
import { DefaultComponent } from './default/default.component';
import { ReportfaultComponent } from './reportfault/reportfault.component';

import { StuffListComponent } from './part-one/stuff-list/stuff-list.component';
import { NewThingComponent } from './part-one/new-thing/new-thing.component';
import { SingleThingComponent } from './part-one/single-thing/single-thing.component';
import { ModifyThingComponent } from './part-one/modify-thing/modify-thing.component';

import { LocationsListComponent } from './crud/locations-list/locations-list.component';
import { NewLocationComponent } from './crud/new-location/new-location.component';
import { SingleLocationComponent } from './crud/single-location/single-location.component';
import { ModifyLocationComponent } from './crud/modify-location/modify-location.component';

import { ReviewsListComponent } from './crud/reviews-list/reviews-list.component';
import { NewReviewComponent } from './crud/new-review/new-review.component';
import { SingleReviewComponent } from './crud/single-review/single-review.component';
//import { ModifyReviewComponent } from './crud/modify-review/modify-review.component';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  /*
  { path: '', component: DefaultComponent,
    children: [
      { path: 'new-thing', component: NewThingComponent, canActivate: [AuthGuard] },
      { path: 'all-stuff', component: StuffListComponent, canActivate: [AuthGuard] },
      { path: 'thing/:id', component: SingleThingComponent, canActivate: [AuthGuard] },
      { path: 'modify-thing/:id', component: ModifyThingComponent, canActivate: [AuthGuard] },
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth/signup', component: SignupComponent },
      { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
      { path: '**', redirectTo: 'all-stuff' }
    ]
  },
  */
  { path: '', component: DefaultComponent,
    children: [
      { path: 'new-location', component: NewLocationComponent, canActivate: [AuthGuard] },
      { path: 'report', component: ReportfaultComponent, canActivate: [AuthGuard] },
      { path: 'all-locations', component: LocationsListComponent, canActivate: [AuthGuard] },
      { path: 'location/:id', component: SingleLocationComponent, canActivate: [AuthGuard] },
      { path: 'location/:id/new-review', component: NewReviewComponent, canActivate: [AuthGuard] },
      { path: 'modify-location/:id', component: ModifyLocationComponent, canActivate: [AuthGuard] },
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth/signup', component: SignupComponent },
      { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
      { path: '**', redirectTo: 'all-locations' }
    ]
  },
  { path: 'part-one', component: PartOneComponent,
    children: [
      { path: 'new-thing', component: NewThingComponent },
      { path: 'all-stuff', component: StuffListComponent },
      { path: 'thing/:id', component: SingleThingComponent },
      { path: 'modify-thing/:id', component: ModifyThingComponent },
      { path: '', pathMatch: 'full', redirectTo: 'all-stuff' },
      { path: '**', redirectTo: 'all-stuff' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {}
