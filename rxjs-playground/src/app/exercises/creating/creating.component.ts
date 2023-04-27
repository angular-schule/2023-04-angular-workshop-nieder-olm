import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 2. Observer
    const observer = {
      next: (e: string) => this.log(e),
      error: (err: any) => this.log('ERROR' + err),
      complete: () => this.log('COMPLETE')
    }

    // 1. Observable
    // const observable = of('😝', '🙃', '😆');
    const observable = new Observable<string>((subscriber) => { // 3. Subscriber
      subscriber.next('😝');
      setTimeout(() => subscriber.next('😝'), 1000);
      setTimeout(() => subscriber.next('😝'), 2000);
      const x = setTimeout(() => { subscriber.next('😝'); this.log('ZOMBIE CODE! 🧟🧟‍♂️🧟') }, 3000);
      const y = setTimeout(() => subscriber.error('🤬'), 4000);
      const z = setTimeout(() => subscriber.next('HA!'), 5000);

      return () => {
        this.log('Wir müssen die Zombies killen!');
        clearTimeout(x);
        clearTimeout(y);
        clearTimeout(z);
      }
    });

    // 4. Subscription
    const subscription = observable.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 2500);


    

    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
