import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from '../../models/Review.model';
import { ReviewsService } from '../../services/reviews.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit, OnDestroy {

  public reviewForm: FormGroup;
  public loading = false;
  public part: number;
  public userId: string;
  public errorMessage: string;

  private partSub: Subscription;

  constructor(private state: StateService,
              private formBuilder: FormBuilder,
              private reviewsService: ReviewsService,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.state.mode$.next('form');
    this.reviewForm = this.formBuilder.group({
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
    this.userId = this.part >= 3 ? this.auth.userId : 'userID40282382';
  }

  onSubmit() {
    this.loading = true;
    const review = new Review();
    /*
    review.title = this.reviewForm.get('title').value;
    review.description = this.reviewForm.get('description').value;
    review.price = this.reviewForm.get('price').value * 100;
    review.imageUrl = this.reviewForm.get('imageUrl').value;
    review._id = new Date().getTime().toString();
    review.userId = this.userId;*/
    this.reviewsService.createNewReview(review).then(
      () => {
        this.reviewForm.reset();
        this.loading = false;
        switch (this.part) {
          case 1:
          case 2:
            this.router.navigate(['/crud/all-reviews']);
            break;
          case 3:
            this.router.navigate(['/all-reviews']);
            break;
        }
      }
    ).catch(
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }

  ngOnDestroy() {
    this.partSub.unsubscribe();
  }

}
