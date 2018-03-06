import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import * as models from "../../releases/models";

@Injectable()
export class DiscogsService {
  private API_PATH = "https://api.discogs.com/";
  private token = "NrdbzBDFRADMleQMMXQSulkaAAEOROdYNRMHAYsG";

  constructor(private http: HttpClient) {}

  search(searchInput: models.SearchInput): Observable<models.Search> {
    return this.http
      .get<models.Search>(
        this.API_PATH +
          "/database/search?release_title=" +
          searchInput.query +
          "&page=" +
          searchInput.page +
          "&type=release&token=" +
          this.token
      )
      .pipe(result => result);
  }

  releaseDetail(id): Observable<models.Release> {
    return this.http.get<models.Release>(this.API_PATH + "/releases/" + id);
  }
}
