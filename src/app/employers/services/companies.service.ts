import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Company } from "../model/company";

@Injectable({
  providedIn: "root",
})
export class CompaniesService {
  private basePath = `${environment.apiUrlBase}/companies`;

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

  create(company: Company): Observable<Company> {
    return this.http
      .post<Company>(this.basePath, JSON.stringify(company), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<Company[]> {
    return this.http
      .get<Company[]>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: number): Observable<Company> {
    return this.http
      .get<Company>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: number, item: Company): Observable<Company> {
    return this.http
      .put<Company>(
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
