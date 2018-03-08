import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import * as models from "../../releases/models";

@Injectable()
export class DiscogsService {
  private API_PATH = "https://api.discogs.com/";
  private token = "NrdbzBDFRADMleQMMXQSulkaAAEOROdYNRMHAYsG";

  constructor(private http: HttpClient) {}

  search(searchInput: models.SearchInput): Observable<models.Search> {
    return this._getRequest<models.Search>(
      this.API_PATH +
        "database/search?release_title=" +
        searchInput.query +
        "&page=" +
        searchInput.page +
        "&type=release"
    ).pipe(result => result);
  }

  releaseDetail(id): Observable<models.Release> {
    return this._getRequest<models.Release>(this.API_PATH + "releases/" + id);
  }

  private _getRequest<T>(url) {
    return this.http.get<T>(url, {
      headers: {
        Authorization: "Discogs token=NrdbzBDFRADMleQMMXQSulkaAAEOROdYNRMHAYsG"
      }
    });
  }
}
