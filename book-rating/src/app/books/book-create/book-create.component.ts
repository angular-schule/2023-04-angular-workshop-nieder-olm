import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  standalone: true,
  imports: [NgIf, ReactiveFormsModule]
})
export class BookCreateComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    description: new FormControl('', {
      nonNullable: true
    })
  });

  c = this.bookForm.controls;

  isInvalid(control: FormControl): boolean {
    return control.touched && control.invalid;
  }

  hasError(control: FormControl, errorCode: string): boolean {
    return control.touched && control.hasError(errorCode);
  }

  submitForm(): void {
    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    }

    // 1. Erstelle ein Event mit dem Namen 'create'
    // 2. Versende das neue Buch per Event
    // 3. Aboniere dich auf das Event im Dashboard
    // 4. Füge das Buch dem Array hinzu

    this.bookForm.reset();
  }
}
