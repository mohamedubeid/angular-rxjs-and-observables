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
    const obs = new BehaviorSubject<number>(100);

    obs.subscribe((data) => console.log("Subscriber 1", data));
    
    obs.subscribe((data) => console.log("Subscriber 2", data))
    
    obs.next(2020);

    obs.subscribe((data) => console.log("Subscriber 3", data));

    obs.next(2023);



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
  }
}
