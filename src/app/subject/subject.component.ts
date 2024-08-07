import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{


  ngOnInit() {
    // // const obs = new Observable((observer) => {observer.next(Math.random())})        //Unicast



    // const obs = new Subject();                                                        //MultiCast
    // const obs = new BehaviorSubject<number>(100);

    // obs.subscribe((data) => console.log("Subscriber 1", data));
    
    // obs.subscribe((data) => console.log("Subscriber 2", data))
    
    // obs.next(2020);

    // obs.subscribe((data) => console.log("Subscriber 3", data));

    // obs.next(2023);



    // //example of Observable -unicast-   
    // //it will return different values
    // const data = ajax('https://randomuser.me/api/');

    // data.subscribe({
    //   next: (res) => {
    //     console.log(res, 'datadatadata');
    //   }
    // });
    // data.subscribe({
    //   next: (res) => {
    //     console.log(res, 'datadatadata');
    //   }
    // });


    // //example of Subject  -multicast-
    // //same values
    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/');

    // subject.subscribe({
    //   next: (res) => {
    //     console.log(res, 'datadatadata');
    //   }
    // });
    // subject.subscribe({
    //   next: (res) => {
    //     console.log(res, 'datadatadata');
    //   }
    // });

    // data.subscribe(subject);



    const promise = new Promise((resolve, reject) => {
      console.log("Promise is called!!");
      resolve(100);
      resolve(200); //only emit one value
      resolve(300); //only emit one value

    });
    promise.then((data) => {
      console.log(data, 'data promise')
    })

    const obs = new Observable((sub) => {
      console.log("Observable is called!!");
      sub.next(100);
      sub.next(200);
      sub.next(300);

    });
    obs.subscribe((data) => {
      console.log(data, "observabel data.")
    });
  }
}
