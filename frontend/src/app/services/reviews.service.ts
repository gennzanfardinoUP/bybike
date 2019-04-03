import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Review } from '../models/Review.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) {}

  private reviews: Review[] = [
    {
      _id: '001018201',
      userId: 'ASB112162768',
      locId: '120981371823',
      locName: 'McDonalds',
      locAddress: 'Commercial Road',
      locImageUrl: 'https://www.publicdomainpictures.net/pictures/10000/velka/1536-1249273362hbHb.jpg',
      coordinates: '123, 123',
      overallRating: 5,
      userRating: 4,
      reviewDescription: 'This place was amazing.'},
    {
      _id: '0010101',
      userId: 'ASB112162768',
      locId: '120981371823',
      locName: 'McDonalds',
      locAddress: 'Commercial Road',
      locImageUrl: 'https://www.publicdomainpictures.net/pictures/10000/velka/1536-1249273362hbHb.jpg',
      coordinates: '123, 123',
      overallRating: 5,
      userRating: 4,
      reviewDescription: 'This place was amazing.'},
  ];
  public reviews$ = new Subject<Review[]>();

  getReviews() {
    this.http.get('http://localhost:3000/api/reviews').subscribe(
      (reviews: Review[]) => {
        if (reviews) {
          this.reviews = reviews;
          this.emitReviews();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitReviews() {
    this.reviews$.next(this.reviews);
  }

  getReviewById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/reviews/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewReview(review: Review) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/reviews', review).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewReviewWithFile(review: Review, image: File) {
    return new Promise((resolve, reject) => {
      const reviewData = new FormData();
      reviewData.append('review', JSON.stringify(review));
      //reviewData.append('image', image, review.title);
      this.http.post('http://localhost:3000/api/reviews', reviewData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyReview(id: string, review: Review) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/api/reviews/' + id, review).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyReviewWithFile(id: string, review: Review, image: File | string) {
    return new Promise((resolve, reject) => {
      let reviewData: Review | FormData;
      if (typeof image === 'string') {
        //review.imageUrl = image;
        reviewData = review;
      } else {
        reviewData = new FormData();
        reviewData.append('review', JSON.stringify(review));
        //reviewData.append('image', image, review.title);
      }
      this.http.put('http://localhost:3000/api/reviews/' + id, reviewData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteReview(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/reviews/' + id).subscribe(
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
