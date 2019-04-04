import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ReviewsService } from '../../services/reviews.service';
import { LocationsService } from '../../services/locations.service';
import { Subscription } from 'rxjs';
import { Review } from '../../models/Review.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit, OnDestroy {

  public reviews: Review[] = [];
  public part: number;
  public loading: boolean;

  private reviewsSub: Subscription;
  private partSub: Subscription;

  private locId: string;

  constructor(private state: StateService,
              private reviewsService: ReviewsService,
              private router: Router
              private loc: LocationsService) { }

  ngOnInit() {
    this.loading = true;
    this.state.mode$.next('list');
    this.reviewsSub = this.reviewsService.reviews$.subscribe(
      (reviews) => {
        this.reviews = reviews;
        this.loading = false;
      }
    );
    this.partSub = this.state.part$.subscribe(
      (part) => {
        this.part = part;
      }
    );
    this.reviewsService.getReviews(this.loc.locId);
  }

  onProductClicked(id: string) {
    if (this.part === 1) {
    } else if (this.part === 3) {
      this.router.navigate(['/review/' + id]);
    }
  }

  ngOnDestroy() {
    this.reviewsSub.unsubscribe();
    this.partSub.unsubscribe();
  }

}
