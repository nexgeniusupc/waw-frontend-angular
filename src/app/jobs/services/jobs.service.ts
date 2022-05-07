import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { JobOffer } from "../model/jobOffer";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  basePath = "http://localhost:6009/jobOffers";
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  // Error
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error ocurred:`, error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status},` + `body was: ${error.error}`
      );
    }
    return throwError(
      () => new Error("Something happened with request, please try again later")
    );
  }

  // create Offer
  /*  createItem(item: any): Observable<JobOffer> {
    return this.http
      .post<JobOffer>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }*/

  // Get All Offer
  getList(): Observable<JobOffer> {
    return this.http
      .get<JobOffer>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /* getItem(id: any): Observable<JobOffer> {
    return this.http
      .get<JobOffer>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
*/
  // Delete Offer
  deleteItem(id: any) {
    return this.http
      .delete<JobOffer>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Update Offer
  /* updateItem(id: any, item: any): Observable<JobOffer> {
    return this.http
      .put<JobOffer>(
        `${this.basePath}/${id}`,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }*/
}
