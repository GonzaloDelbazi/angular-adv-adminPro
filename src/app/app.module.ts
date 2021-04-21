import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ====================================================================================
// MODULOS
// ====================================================================================
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

// ====================================================================================
// COMPONENTES
// ====================================================================================
import { AppComponent } from './app.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { AuthModule } from './auth/auth.module';




@NgModule({
  declarations: [
    AppComponent,
    NotPageFoundComponent,
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
