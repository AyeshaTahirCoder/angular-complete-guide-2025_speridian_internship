import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { interval, map, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCOunt$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0}); 
  // interval = signal(0);
  // doubleInterval = computed(()=> this.interval() * 2);
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      //subscriber.error();
      if(timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting New Value...');
      subscriber.next({ message: 'New Value' });
      timesExecuted ++;
    }, 2000);
  });
  private destoryRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`CLicked button ${ this.clickCount() } times.`)
    // });
  }

  ngOnInit(): void {

  //signal
    // setInterval(() => { 
    //   this.interval.update(prevIntervalNumber => prevIntervalNumber + 1);
    //   //update some signal
    // }, 1000);

  //obervable interval & operator
    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2)
    // ).subscribe({
    //   next: (val) => console.log(val)
    // });

    // this.destoryRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed!'),
      error: (err) => console.log(err)
    });

    const subscription = this.clickCOunt$.subscribe({
      next: (val) => console.log(`CLicked button ${ this.clickCount() } times.`)
    });
    this.destoryRef.onDestroy(() => {
      subscription.unsubscribe();
    });
    
  }

  onClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }

}
