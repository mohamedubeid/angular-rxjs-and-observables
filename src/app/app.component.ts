import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, of, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-observables';

  data: any[] = [];

  @ViewChild('createbtn')
  createBtn: ElementRef | undefined;

  // myObservable = new Observable((observer) => {
  //   // observer.next([1, 2, 3, 4, 5]);\
  //   setTimeout(() => {observer.next(1)}, 1000);
  //   setTimeout(() => {observer.next(2)}, 2000);
  //   setTimeout(() => {observer.next(3)}, 3000);
  //   // setTimeout(() => {observer.error(new Error('there is an error here.'))}, 3000);
  //   setTimeout(() => {observer.next(4)}, 4000);
  //   setTimeout(() => {observer.next(5)}, 5000);
  //   setTimeout(() => {observer.complete()}, 6000);
  // })

  array1 = [1, 2, 3 ,4 ,5, 6];
  array2 = ['A', 'B', 'C'];
  // myObservable = of(this.array1, this.array2, 2, 4, 5);
  myObservable = from(this.array1).pipe(
    map((val) => {
    return val * 10;
    }),
    filter((val) => {
      return val % 4 === 0;
    })
  );

  // transformObs = this.myObservable.pipe(
  //   map((val) => {
  //   return val * 10;
  //   }),
  //   filter((val) => {
  //     return val % 4 === 0;
  //   })
  // );

  // filterObs = this.transformObs.pipe(filter((val) => {
  //   return val % 4 === 0;
  // }))


  GetAsyncData() {
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(val)
      },
      error: (err) => {
        alert(err);
      },
      complete: () => {
        // alert('straming is done!')
        console.log('completed!!')
      }
    })
  }

  // buttonClicked() {
  //   fromEvent(this.createBtn?.nativeElement, 'click')
  //   .subscribe({
  //     next: (data) => {
  //       this.data.push(`Item ${this.data.length + 1}`)
  //       console.log(data)
  //    }
  //   })
  // }

  ngAfterViewInit() {
    // this.buttonClicked();
  }


}
