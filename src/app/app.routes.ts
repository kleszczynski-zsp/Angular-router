import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';

export const routes: Routes = [
    { path: "", component: IndexComponent },
    { path: "kontakt", component: KontaktComponent }
];
