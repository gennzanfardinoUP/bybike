import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { LocationsService } from '../../services/locations.service';
import { Location } from '../../models/Location.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modify-location',
  templateUrl: './modify-location.component.html',
  styleUrls: ['./modify-location.component.scss']
})
export class ModifyLocationComponent implements OnInit {

  location: Location;
  locationForm: FormGroup;
  loading = false;
  errorMessage: string;
  part: number;

  private partSub: Subscription;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private state: StateService,
              private locationsService: LocationsService) { }

  ngOnInit() {
    this.loading = true;
    this.locationForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      price: [0, Validators.required],
      imageUrl: [null, Validators.required]
    });
    this.partSub = this.state.part$.subscribe(
      (part) => {
        this.part = part;
      }
    );
    this.state.mode$.next('form');
    this.route.params.subscribe(
      (params) => {
        this.locationsService.getLocationById(params.id).then(
          (location: Location) => {
            this.location = location;
            this.locationForm.get('title').setValue(this.location.title);
            this.locationForm.get('description').setValue(this.location.description);
            this.locationForm.get('price').setValue(this.location.price / 100);
            this.locationForm.get('imageUrl').setValue(this.location.imageUrl);
            this.loading = false;
          }
        );
      }
    );
  }

  onSubmit() {
    this.loading = true;
    const location = new Location();
    location.title = this.locationForm.get('title').value;
    location.description = this.locationForm.get('description').value;
    location.price = this.locationForm.get('price').value * 100;
    location.imageUrl = this.locationForm.get('imageUrl').value;
    location._id = new Date().getTime().toString();
    location.userId = this.location.userId;
    this.locationsService.modifyLocation(this.location._id, location).then(
      () => {
        this.locationForm.reset();
        this.loading = false;
        switch (this.part) {
          case 1:
          case 2:
            this.router.navigate(['/crud/all-locations']);
            break;
          case 3:
            this.router.navigate(['/crud/all-locations']);
            break;
        }
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }

}
