import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  timerSubscription: Subscription = new Subscription;
  constructor() { }

  ngOnInit(): void {
    let timer = 0;

    // this.timerSubscription = interval(1000).subscribe(()=> {
    //   console.log(timer);
    //   timer++;
    // })
    

    const timerObservable = new Observable((observer) => {
      setInterval(()=> {
        observer.next(timer);
        if(timer == 3){
          observer.complete();
        }
        if(timer == 5 ) {
          observer.error("Fake error thrown when the timer is 2")
        }
        timer++; 
      }, 1000)
    });


    this.timerSubscription =     timerObservable.pipe(
      filter((data: any) => {
      return data % 2 === 0;
    }),
    map((data) => {
      return 'Round ' + data;
    })).subscribe((timer)=>{
      console.log(timer);
    }, (error)=> {
      console.log(error);
    }, ()=> {
      console.log("Observable is complete!")
    })
  }


  ngOnDestroy(){
    this.timerSubscription.unsubscribe()
  }

}
