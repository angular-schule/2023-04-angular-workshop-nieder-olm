import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    // const bookRatingMock = {
    //   rateUp: (book: Book) => book
    // }

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      // providers: [{
      //   provide: BookRatingService,
      //   useValue: bookRatingMock
      // }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp() should forward all calls to BookRatingService', () => {
    const bookRatingMock = TestBed.inject(BookRatingService);
    // spyOn(bookRatingMock, 'rateUp').and.callFake((book: Book) => book);
    spyOn(bookRatingMock, 'rateUp').and.callThrough();

    const book = {} as Book;
    component.doRateUp(book);

    expect(bookRatingMock.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
