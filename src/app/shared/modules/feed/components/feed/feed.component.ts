import { Observable } from 'rxjs';
import { getFeedAction } from './../../store/actions/action';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetFeedInterface } from '../../types/getFeed.interface';
import { isLoadingSelector, errorSelector, feedSelector } from '../../store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps!: string;

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  feed$!: Observable<GetFeedInterface | null>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
    this.initData()
    this.initValue()
  }

  initValue() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
  }
  initData() {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
