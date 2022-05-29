import { ComponentFixture, TestBed } from "@angular/core/testing";

import { JobsSearchComponent } from "./jobs-search.component";

import { imports } from "src/app/app.module";

describe("JobsSearchComponent", () => {
  let component: JobsSearchComponent;
  let fixture: ComponentFixture<JobsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...imports],
      declarations: [JobsSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
