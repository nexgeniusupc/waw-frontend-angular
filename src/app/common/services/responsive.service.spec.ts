import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { ResponsiveService } from "./responsive.service";

describe("ResponsiveService", () => {
  let service: ResponsiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ResponsiveService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
