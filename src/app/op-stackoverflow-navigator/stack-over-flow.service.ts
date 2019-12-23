import { Injectable } from '@angular/core';
import {TagRespones} from './entities/tagRespones';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class StackOverFlowService {

  constructor(private http: HttpClient) { }


  getTag(tag: string): Observable<TagRespones> {
    return this.http.get<TagRespones>(`https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow`);

  }
}
