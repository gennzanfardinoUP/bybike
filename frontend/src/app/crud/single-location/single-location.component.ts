import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '../../models/Location.model';
import { LocationsService } from '../../services/locations.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-single-location',
  templateUrl: './single-location.component.html',
  styleUrls: ['./single-location.component.scss']
})
export class SingleLocationComponent implements OnInit, OnDestroy {

  public location: Location;
  public loading: boolean;
  public userId: string;
  public part: number;

  private partSub: Subscription;

  constructor(private state: StateService,
              private router: Router,
              private route: ActivatedRoute,
              private locationsService: LocationsService,
              private auth: AuthService) { }

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('single-location');
    this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
    this.route.params.subscribe(
      (params: Params) => {
        this.locationsService.getLocationById(params.id).then(
          (location: Location) => {
            this.loading = false;
            this.location = location;
          }
        );
      }
    );
    this.partSub = this.state.part$.subscribe(
      (part) => {
        this.part = part;
        if (part >= 3) {
          this.userId = this.auth.userId;
        }
      }
    );
  }

  onGoBack() {
    if (this.part === 1) {
      this.router.navigate(['/crud/all-locations']);
    } else if (this.part === 3) {
      this.router.navigate(['/all-locations']);
    }
  }

  onModify() {
    switch (this.part) {
      case 1:
      case 2:
        this.router.navigate(['/crud/modify-location/' + this.location._id]);
        break;
      case 3:
        this.router.navigate(['/modify-location/' + this.location._id]);
        break;
    }
  }

  onDelete() {
    this.loading = true;
    this.locationsService.deleteLocation(this.location._id).then(
      () => {
        this.loading = false;
        switch (this.part) {
          case 1:
          case 2:
            this.router.navigate(['/crud/all-locations']);
            break;
          case 3:
            this.router.navigate(['/all-locations']);
            break;
        }
      }
    );
  }

  ngOnDestroy() {
    this.partSub.unsubscribe();
  }
}
