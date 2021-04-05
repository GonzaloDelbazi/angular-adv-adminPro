import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', component: NotPageFoundComponent}
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AuthRoutingModule
    ]
})
export class AppRoutingModule {



}

