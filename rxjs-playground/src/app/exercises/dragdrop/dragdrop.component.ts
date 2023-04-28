import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, takeUntil, filter, BehaviorSubject, Subject, withLatestFrom, startWith } from 'rxjs';

@Component({
  selector: 'rxw-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target!: ElementRef<HTMLElement>;
  targetPosition = [100, 80];
  unsubscribeAll$ = new Subject<void>();
  mouseDown$ = new BehaviorSubject<boolean>(false);

  ngOnInit() {
    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseDown$ = fromEvent<MouseEvent>(this.target.nativeElement, 'mousedown');
    const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

    /**
     * Nutze RxJS, um die rote Box mit Drag-and-drop zu bewegen.
     *
     * Die Methode setTargetPosition(e: MouseEvent) ändert die Position der Box.
     * Nutze die Observables mouseMove$, mouseDown$ und mouseUp$ in einer geeigneten Kombination.
     * Beginne damit, dass die Box am Mauszeiger klebt.
     * Sorge dann dafür, dass dieser Prozess erst beim Klick (mouseDown$) beginnt.
     * Beende den Prozess, sobald mouseUp$ feuert.
     */

    /******************************/

    mouseDown$.pipe(
      takeUntil(this.unsubscribeAll$)
    )
    .subscribe(me => this.mouseDown$.next(me.button === 0))

    mouseUp$.pipe(
      takeUntil(this.unsubscribeAll$)
    )
    .subscribe(me => this.mouseDown$.next(false))

    mouseMove$.pipe(
      takeUntil(this.unsubscribeAll$),
      withLatestFrom(this.mouseDown$),
      filter(([_, isDown]) => isDown)
    )
    .subscribe({
      next: (([me, _]) => {
        this.targetPosition = [me.clientX, me.clientY];
      })
    })

    /******************************/
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
  }

  private setTargetPosition(event: MouseEvent) {
    const offset = 50;
    this.targetPosition = [
      event.pageX - offset,
      event.pageY - offset
    ];
  }

}
