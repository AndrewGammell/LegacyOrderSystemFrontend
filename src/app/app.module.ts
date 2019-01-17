import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      }
    ])
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


