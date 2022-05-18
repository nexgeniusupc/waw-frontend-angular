import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { JobsService } from "./jobs.service";

describe("JobsService", () => {
  let service: JobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(JobsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
