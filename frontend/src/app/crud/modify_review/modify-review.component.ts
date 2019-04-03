import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { ReviewsService } from '../../services/reviews.service';
import { Review } from '../../models/Review.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modify-review',
  templateUrl: './modify-review.component.html',
  styleUrls: ['./modify-review.component.scss']
})
export class ModifyReviewComponent implements OnInit {

  review: Review;
  reviewForm: FormGroup;
  loading = false;
  errorMessage: string;
  part: number;

  private partSub: Subscription;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private state: StateService,
              private reviewsService: ReviewsService) { }

  ngOnInit() {
    this.loading = true;
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
    this.state.mode$.next('form');
    this.route.params.subscribe(
      (params) => {
        this.reviewsService.getReviewById(params.id).then(
          (review: Review) => {
            /*this.review = review;
            this.reviewForm.get('title').setValue(this.review.title);
            this.reviewForm.get('description').setValue(this.review.description);
            this.reviewForm.get('price').setValue(this.review.price / 100);
            this.reviewForm.get('imageUrl').setValue(this.review.imageUrl);
            this.loading = false;*/
          }
        );
      }
    );
  }

  onSubmit() {
    this.loading = true;
    const review = new Review();
    /*review.title = this.reviewForm.get('title').value;
    review.description = this.reviewForm.get('description').value;
    review.price = this.reviewForm.get('price').value * 100;
    review.imageUrl = this.reviewForm.get('imageUrl').value;
    review._id = new Date().getTime().toString();
    review.userId = this.review.userId;*/
    this.reviewsService.modifyReview(this.review._id, review).then(
      () => {
        this.reviewForm.reset();
        this.loading = false;
        switch (this.part) {
          case 1:
          case 2:
            this.router.navigate(['/crud/all-reviews']);
            break;
          case 3:
            this.router.navigate(['/crud/all-reviews']);
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
