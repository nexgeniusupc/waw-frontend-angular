import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";

export type HttpMethods = keyof Omit<HttpClient, "request" | "jsonp">;
export type HttpMethodsWithBody = "post" | "put" | "patch";
export type HttpMethodsWithoutBody = Exclude<HttpMethods, HttpMethodsWithBody>;

export class BaseService<TModel, TId extends string | number = number> {
  protected endpoint: string;
  protected httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(path: string, protected http: HttpClient) {
    this.endpoint = this.formatEndpoint(path);
  }

  private formatEndpoint(path: string) {
    let endpoint = environment.apiUrlBase;
    if (endpoint.endsWith("/")) {
      endpoint = endpoint.substring(0, endpoint.length - 1);
    }
    if (path.startsWith("/")) {
      path = path.substring(1);
    }
    return `${endpoint}/${path}`;
  }

  protected handleError(error: HttpErrorResponse) {
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

  protected fetch<T = TModel>(
    method: HttpMethodsWithoutBody,
    url: string
  ): Observable<T>;
  protected fetch<T = TModel>(
    method: HttpMethodsWithBody,
    url: string,
    body: unknown
  ): Observable<T>;
  protected fetch<T = TModel>(
    method: HttpMethods,
    url: string,
    body?: unknown
  ) {
    let res: Observable<T> | null = null;
    if (body) {
      res = this.http.request<T>(method, url, {
        ...this.httpOptions,
        body: JSON.stringify(body),
      });
    } else {
      res = this.http.request<T>(method, url, this.httpOptions);
    }
    return res.pipe(retry(2), catchError(this.handleError));
  }

  protected fetchAll<T = TModel[]>(url: string) {
    return this.fetch<T>("get", url);
  }

  create(item: TModel) {
    return this.fetch("post", this.endpoint, item);
  }

  getAll() {
    return this.fetchAll(this.endpoint);
  }

  getById(id: TId) {
    return this.fetch("get", `${this.endpoint}/${id}`);
  }

  update(id: TId, item: TModel) {
    return this.fetch("put", `${this.endpoint}/${id}`, item);
  }

  delete(id: TId) {
    return this.fetch("delete", `${this.endpoint}/${id}`);
  }
}
