import { PaginationModule } from './../pagination/pagination.module';
import { LoadingModule } from './../loading/loading.module';
import { ErrorMessageModule } from './../error-message/error-message.module';
import { RouterModule } from '@angular/router';
import { FeedService } from './services/feed.service';
import { StoreModule } from '@ngrx/store';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { EffectsModule } from '@ngrx/effects';
import { FeedComponent } from './components/feed/feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducer } from './store/reducers';



@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule
  ],
  exports: [
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
