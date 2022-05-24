import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { ProjectsService } from "./projects.service";

describe("ProjectsService", () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ProjectsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
