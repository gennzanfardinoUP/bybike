import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Review } from '../../models/Review.model';
import { ReviewsService } from '../../services/reviews.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.scss']
})
export class SingleReviewComponent implements OnInit, OnDestroy {

  public review: Review;
  public loading: boolean;
  public userId: string;
  public part: number;

  private partSub: Subscription;

  constructor(private state: StateService,
              private router: Router,
              private route: ActivatedRoute,
              private reviewsService: ReviewsService,
              private auth: AuthService) { }

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('single-review');
    this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
    this.route.params.subscribe(
      (params: Params) => {
        this.reviewsService.getReviewById(params.id).then(
          (review: Review) => {
            this.loading = false;
            this.review = review;
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
      this.router.navigate(['/crud/all-reviews']);
    } else if (this.part === 3) {
      this.router.navigate(['/all-reviews']);
    }
  }

  onModify() {
    switch (this.part) {
      case 1:
      case 2:
        this.router.navigate(['/crud/modify-review/' + this.review._id]);
        break;
      case 3:
        this.router.navigate(['/modify-review/' + this.review._id]);
        break;
    }
  }

  onDelete() {
    this.loading = true;
    this.reviewsService.deleteReview(this.review._id).then(
      () => {
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
    );
  }

  ngOnDestroy() {
    this.partSub.unsubscribe();
  }
}
