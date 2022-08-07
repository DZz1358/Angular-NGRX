import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../environments/environment.prod';
import { GetFeedInterface } from './../types/getFeed.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient
  ) { }

  getFeed(url: string): Observable<GetFeedInterface>{
    const fullUrl = environment.apiUrl + url

    return this.http.get<GetFeedInterface>(fullUrl)
  }
}
