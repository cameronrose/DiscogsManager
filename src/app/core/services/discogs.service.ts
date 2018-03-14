import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
//import * as models from "../../releases/models";
import * as models from "../../core/models";

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

  releaseDetail(id: number): Observable<models.Release> {
    return this._getRequest<models.Release>(this.API_PATH + "releases/" + id);
  }

  collection(user: string): Observable<models.CollectionRelease> {
    return this._getRequest<models.CollectionRelease>(
      this.API_PATH + "/users/" + user + "/collection/folders/0/releases"
    );
  }

  addToCollection(user: string, release_id: number) {
    return this._postRequest(
      this.API_PATH +
        "/users/" +
        user +
        "/collection/folders/1/releases/" +
        release_id
    );
  }

  private _getRequest<T>(url: string) {
    return this.http.get<T>(url, {
      headers: {
        Authorization: "Discogs token=NrdbzBDFRADMleQMMXQSulkaAAEOROdYNRMHAYsG"
      }
    });
  }

  private _postRequest<T>(url: string) {
    return this.http.post<T>(url, {
      headers: {
        Authorization: "Dicogs token=NrdbzBDFRADMleQMMXQSulkaAAEOROdYNRMHAYsG"
      }
    });
  }
}
