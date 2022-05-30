import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ResetpasswordComponent } from "./resetpassword.component";

import { imports } from "src/app/app.module";

describe("ResetpasswordComponent", () => {
  let component: ResetpasswordComponent;
  let fixture: ComponentFixture<ResetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...imports],
      declarations: [ResetpasswordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
