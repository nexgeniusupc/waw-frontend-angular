import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { JobOffer } from "../model/job-offer";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  private basePath = `${environment.apiUrlBase}/jobOffers`;

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(
        `An error ocurred ${error.status}, body was ${error.error}`
      );
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      () =>
        new Error("Something happened with request, please try again later.")
    );
  }

  create(item: JobOffer): Observable<JobOffer> {
    return this.http
      .post<JobOffer>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<JobOffer[]> {
    return this.http
      .get<JobOffer[]>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: number): Observable<JobOffer> {
    return this.http
      .get<JobOffer>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: number, item: JobOffer): Observable<JobOffer> {
    return this.http
      .put<JobOffer>(
        `${this.basePath}/${id}`,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: number) {
    return this.http
      .delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
