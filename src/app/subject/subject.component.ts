import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

    
    // obs.subscribe((data) => console.log(data));
    
    // obs.subscribe((data) => console.log(data))
    
    // obs.next(Math.random());

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


    //example of Subject  -multicast-
    //same values
    const subject = new Subject();
    const data = ajax('https://randomuser.me/api/');

    subject.subscribe({
      next: (res) => {
        console.log(res, 'datadatadata');
      }
    });
    subject.subscribe({
      next: (res) => {
        console.log(res, 'datadatadata');
      }
    });

    data.subscribe(subject);
  }
}
