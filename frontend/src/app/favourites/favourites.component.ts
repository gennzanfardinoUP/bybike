import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { LocationsService } from '../services/locations.service';
import { Subscription } from 'rxjs';
import { Location } from '../models/Location.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit, OnDestroy {

  public locations: Location[] = [];
  public part: number;
  public loading: boolean;

  private locationsSub: Subscription;
  private partSub: Subscription;

  constructor(private state: StateService,
              private locationsService: LocationsService,
              private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('list');
    this.locationsSub = this.locationsService.locations$.subscribe(
      (locations) => {
        this.locations = locations;
        this.loading = false;
      }
    );
    this.partSub = this.state.part$.subscribe(
      (part) => {
        this.part = part;
      }
    );
    this.locationsService.getLocations();
  }

  onProductClicked(id: string) {
    if (this.part === 1) {
    } else if (this.part === 3) {
      this.router.navigate(['/location/' + id]);
    }
  }

  ngOnDestroy() {
    this.locationsSub.unsubscribe();
    this.partSub.unsubscribe();
  }

}
