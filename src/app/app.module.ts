import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BnkGirlListComponent } from './components/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlComponent } from './components/bnk-girl/bnk-girl.component';
import { RouterModule, Routes } from '@angular/router';
import { InstagramComponent } from './components/instagram/instagram.component';
import { InstagramListComponent } from './components/instagram-list/instagram-list.component';
import { InstagramCardComponent } from './components/instagram-card/instagram-card.component';
import { BnkSuffixPipe } from './pipes/bnk-suffix.pipe';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminBnkListComponent } from './components/admin-bnk-list/admin-bnk-list.component';
import { AdminBnkEditComponent } from './components/admin-bnk-edit/admin-bnk-edit.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'instagram/:instagramId', component: InstagramComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminBnkListComponent, canActivate: [AuthGuard]},
  { path: 'admin/edit/:id', component: AdminBnkEditComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent,
    BnkGirlComponent,
    InstagramComponent,
    InstagramListComponent,
    InstagramCardComponent,
    BnkSuffixPipe,
    LoginComponent,
    AdminBnkListComponent,
    AdminBnkEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
