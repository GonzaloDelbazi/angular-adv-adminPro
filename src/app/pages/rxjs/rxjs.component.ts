import { Component, OnDestroy, } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import {map, retry, take, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {



  // this.retornaObservable().pipe(
  //   retry()
  // ).subscribe(
  //   valor => console.log('Subs: ', valor),
  //   (error) => console.warn('Error: ', error),
  //   () => console.log('Obs terminado')
  // );

  // Llamada a observable Interval
  this.intervalSubs = this.retornaIntevalo().subscribe( console.log )
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


  // Uso de observable Interval
  retornaIntevalo(): Observable<number>{

    return interval(100).pipe(
      // take(10),
      map(valor => {
        return valor + 1;
      }),
      filter(num => (num % 2 === 0) ? true : false)
    );

  }


  retornaObservable(): Observable<number> {

  let i = -1;

  const obs$ = new Observable<number>( observer => {


    const intervalo = setInterval( () => {
      i++;
      observer.next(i);
      if (i === 4){
        clearInterval(intervalo);
        observer.complete();

      }
      if (i === 2 ){
        observer.error('i llego a valor 2');
      }

    }, 1000);

  });

  return obs$;
  }
}
