import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book } from '../shared/book';
import { BookComponent } from './book.component';

// OnPush components are harder to test
// see https://github.com/angular/angular/issues/12313
@Component({
  template: '<br-book [book]="book"></br-book>',
  standalone: true,
  imports: [BookComponent]
})
export class BookWrapperComponent {
  @Input() book?: Book;
}

describe('BookComponent', () => {
  let component: BookWrapperComponent;
  let fixture: ComponentFixture<BookWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should disable the rate down button when rating is smaller 2', () => {
    component.book = { isbn: '323', title: 'Test', description: 'rest', rating: 1 };
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelectorAll('button')[0];

    expect(button.disabled).toBe(true);
  });
});
