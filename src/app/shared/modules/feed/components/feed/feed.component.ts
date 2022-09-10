import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';
import { getFeedAction } from './../../store/actions/action';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetFeedInterface } from '../../types/getFeed.interface';
import {
  isLoadingSelector,
  errorSelector,
  feedSelector,
} from '../../store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string;

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  feed$!: Observable<GetFeedInterface | null>;
  limit = environment.limit;
  baseUrl!: string;
  queryParamsSubscription!: Subscription;
  currentPage!: number;
  total: any

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initValue();
    this.initListeners();
  }

  initValue() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initListeners() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        console.log('currentPage', this.currentPage);
        this.initData();

      }
    );
  }

  initData() {
    const offset = 
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
