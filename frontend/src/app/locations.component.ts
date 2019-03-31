import { LocationsService } from './locations.service';//importa manuale

import { Component } from '@angular/core';
//DeclaretorFunction        Easy to unit Twst for locations
@Component({
  selector: 'locations',
  // <courses> "courses" definisco un custom element   <div  class="courses"> ".courses"   <div  id="courses"> "#courses"

  template: `
              <h2>Locations</h2>
              <ul>
                <li *ngFor="let location of locations">
                  {{ location }}
                </li>
              </ul>
            `
})
export class LocationsComponent {
  locations;
  constructor(service: LocationsService){
    this.locations=service.getLocations();
  }
}
