import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Location } from '../models/Location.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  locId: string;
  constructor(private http: HttpClient) {}

  private locations: Location[] = [
    {
      _id: '324sdfmoih3',
      title: 'My location',
      description: 'All about my location',
      imageUrl: 'https://c.pxhere.com/photos/30/d6/photographer_camera_lens_slr_photography_hands-1079029.jpg!d',
      userId: 'will'
    },
    {
      _id: '324sdfmoih4',
      title: 'Another location',
      description: 'All about my location',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/10000/velka/1536-1249273362hbHb.jpg',
      userId: 'will'
    },
  ];
  public locations$ = new Subject<Location[]>();

  getLocations() {
    this.http.get('http://localhost:3000/api/locations').subscribe(
      (locations: Location[]) => {
        if (locations) {
          this.locations = locations;
          this.emitLocations();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitLocations() {
    this.locations$.next(this.locations);
  }

  getLocationById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/locations/' + id).subscribe(
        (response) => {
          this.locId=id;
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewLocation(location: Location) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/locations', location).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewLocationWithFile(location: Location, image: File) {
    return new Promise((resolve, reject) => {
      const locationData = new FormData();
      locationData.append('location', JSON.stringify(location));
      locationData.append('image', image, location.title);
      this.http.post('http://localhost:3000/api/locations', locationData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyLocation(id: string, location: Location) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/api/locations/' + id, location).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyLocationWithFile(id: string, location: Location, image: File | string) {
    return new Promise((resolve, reject) => {
      let locationData: Location | FormData;
      if (typeof image === 'string') {
        location.imageUrl = image;
        locationData = location;
      } else {
        locationData = new FormData();
        locationData.append('location', JSON.stringify(location));
        locationData.append('image', image, location.title);
      }
      this.http.put('http://localhost:3000/api/locations/' + id, locationData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteLocation(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/locations/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
