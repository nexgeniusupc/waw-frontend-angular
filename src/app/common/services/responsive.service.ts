import { Injectable, OnDestroy } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Subscription } from "rxjs";
import { TailwindBreakpoints } from "../utils/breakpoints";

export const AppBreakpoints = TailwindBreakpoints;
export type Breakpoints = keyof typeof AppBreakpoints;
export type AllBreakpoints =
  | Breakpoints
  | `${Breakpoints}Minus`
  | `${Breakpoints}Plus`;
export type ParsedBreakpoints = Record<AllBreakpoints, boolean>;
export type MappedBreakpoints = Record<string, AllBreakpoints>;

@Injectable({
  providedIn: "root",
})
export class ResponsiveService implements OnDestroy {
  breakpoints: ParsedBreakpoints;
  private breakpointMapping: MappedBreakpoints;
  private breakpointSubscription: Subscription;

  constructor(protected breakpointObserver: BreakpointObserver) {
    const keys = Object.keys(AppBreakpoints) as Breakpoints[];

    this.breakpoints = keys.reduce<Record<string, boolean>>((acc, value) => {
      acc[value] = false;
      acc[`${value}Minus`] = false;
      acc[`${value}Plus`] = false;
      return acc;
    }, {}) as ParsedBreakpoints;

    this.breakpointMapping = keys.reduce<MappedBreakpoints>(
      (acc, value, index, arr) => {
        const px = AppBreakpoints[value];

        acc[`(max-width: ${px - 0.02}px)`] = `${value}Minus`;
        if (index + 1 >= arr.length) {
          acc[`(min-width): ${px}px`] = value;
        } else {
          const next = `${AppBreakpoints[arr[index + 1]] - 0.02}`;
          acc[`(min-width: ${px}px) and (max-width: ${next}px)`] = value;
        }
        acc[`(min-width: ${px}px)`] = `${value}Plus`;
        return acc;
      },
      {}
    );

    const queries = Object.keys(this.breakpointMapping);

    this.breakpointSubscription = this.breakpointObserver
      .observe(queries)
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          const breakpoint = this.breakpointMapping[query];
          this.breakpoints[breakpoint] = result.breakpoints[query];
        }
        console.log(this.breakpoints);
      });
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}
