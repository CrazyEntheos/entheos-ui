import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { TopNavComponent } from '../home/top-nav/top-nav.component';
import { SideNavComponent } from '../home/side-nav/side-nav.component';
import { HomeSliderComponent } from '../home/home-slider/home-slider.component';
import { ProductsComponent } from '../products/products.component';
import { MenProdListComponent } from '../products/men-prod-list/men-prod-list.component';
import { WomenProdListComponent } from '../products/women-prod-list/women-prod-list.component';
import { KidsProdListComponent } from '../products/kids-prod-list/kids-prod-list.component'
import { AppRoutingModule }     from './app-routing.module';
import { HomeMainComponent } from '../home/home-main/home-main.component';
import { FooterComponent } from '../home/footer/footer.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { LoginSignupComponent } from '../login/login-signup/login-signup.component';
import { OrderPlacedComponent } from '../checkout/order-placed/order-placed.component';
import { BillPayComponent } from '../checkout/bill-pay/bill-pay.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    HomeSliderComponent,
    ProductsComponent,
    MenProdListComponent,
    WomenProdListComponent,
    KidsProdListComponent,
    HomeMainComponent,
    FooterComponent,
    ProductDetailComponent,
    LoginSignupComponent,
    OrderPlacedComponent,
    BillPayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
