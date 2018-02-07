import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import * as models from '../../releases/models';

@Injectable()
export class DiscogsService {
  private API_PATH = 'https://api.discogs.com/';
  private token = 'NrdbzBDFRADMleQMMXQSulkaAAEOROdYNRMHAYsG';

  constructor(private http: HttpClient) {}

  search(q: string): Observable<models.Search> {
    return this.http
      .get<models.Search>(this.API_PATH + '/database/search?q=' + q + '&token=' + this.token)
      .pipe(result => result);
  }
}
