import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators'

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnDestroy {
  timeStreamSubscription!: Subscription;
  timeValue: Date | undefined;
  time$ = interval(1000).pipe(
    startWith(""),
    map(() => new Date())
  );
  constructor() {
    this.timeStreamSubscription = this.time$.subscribe(value => this.timeValue = value);
  }
  ngOnDestroy(): void {
      this.timeStreamSubscription.unsubscribe();
  }
}
