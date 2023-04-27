import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  currentWidth?: number;

  constructor() {
    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    // A = 1
    // B = 9


    fromEvent(window, 'resize').pipe(            //            -E-----EEE-----E
      map(x => (x.target as Window).innerWidth), //            -W-----WWW-----W
      debounceTime(2000),                        //   ---2000---W---2000---W---2000---W
      startWith(9),                              //  B---2000---W---2000---W---2000---W
      startWith(1),                              // AB---2000---W---2000---W---2000---W
      tap(console.log)
    ).subscribe(width => this.currentWidth = width)

    /******************************/
  }

}
