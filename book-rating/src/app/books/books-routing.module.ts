import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'books', component: DashboardComponent },
  // { path: 'books/:isbn', component: BookDetailsComponent }

  // Lazy Loading mit Standalone – voll wenig aufwand! =)
  { path: 'books/:isbn', loadComponent: () => import('./book-details/book-details.component')
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
