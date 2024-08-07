import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {
  counter = interval(1000);
  numArr: number[] = [];

  theSubscriber: any;

  OnSubscribe() {
    this.theSubscriber = this.counter.subscribe((data) => {
      this.numArr.push(data);
    })
  }

  OnUnsubscribe() {
    this.theSubscriber.unsubscribe();
  }
}
