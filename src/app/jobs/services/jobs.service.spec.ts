import { ComponentFixture, TestBed } from "@angular/core/testing";

// import { JobsService } from "./jobs.service";
import { JobsComponent } from "../jobs.component";

describe("JobsComponent", () => {
  // let service: JobsService;

  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobsComponent],
    }).compileComponents();
    // service = TestBed.inject(JobsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
