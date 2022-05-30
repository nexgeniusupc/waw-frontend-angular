import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";

interface TestModel {
  id: number;
  name: string;
  visible: boolean;
}

@Injectable({
  providedIn: "root",
})
class TestService extends BaseService<TestModel> {
  constructor(http: HttpClient) {
    super("/test", http);
  }
}

describe("BaseService", () => {
  let service: BaseService<TestModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TestService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
