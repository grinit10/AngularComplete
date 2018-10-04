import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html"
})
export class headerComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  showFiller = false;
  fillerNav: Array<string> = [
    "Recipes",
    "Shopping List",
    "Consultation",
    "Reports",
    "Admin"
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 6000px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.showFiller = false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {}
}
