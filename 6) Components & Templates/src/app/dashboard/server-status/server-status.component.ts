import { Component, inject, OnInit, DestroyRef, signal, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent{
  currentStatus= signal <'online' | 'offline' | 'unknown'> ('offline');
  private destoryRef = inject(DestroyRef);


  constructor(){
    effect(()=>{
      console.log(this.currentStatus());
    })
  }

  ngOnInit(){
    console.log('On InIt');
    const interval = setInterval(()=>{
      const rnd = Math.random(); //0 - 0.99999999999999

      if(rnd<0.5){
        this.currentStatus.set('online');
      }else if(rnd<0.9){
        this.currentStatus.set('offline');
      }else{
        this.currentStatus.set('unknown');
      }
    },5000);
    this.destoryRef.onDestroy(()=>{
      clearInterval(interval);
    })
}
ngAfterViewInit(){
  console.log('After View InIt');
}
}
