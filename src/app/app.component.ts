import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public constructor(
    private appRef: ApplicationRef,
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
  ) {
    // this.zone.runOutsideAngular(() => {
    //
    // });
    // vk.getUser((user) => {
    //   this.zone.run(() => {
    //     this.user = user;
    //   });
    // });

    // this.appRef.tick();
  }

}

// Event
// Interval
// zone.js
