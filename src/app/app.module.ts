import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';
import {LoginComponent} from './login/login.component';
import {NotfoundModule} from './notfound/notfound.module';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    LoginModule,
    NotfoundModule,

    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
