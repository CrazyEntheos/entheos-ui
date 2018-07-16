import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { MenProdListComponent } from '../products/men-prod-list/men-prod-list.component';
import { WomenProdListComponent } from '../products/women-prod-list/women-prod-list.component';
import { KidsProdListComponent } from '../products/kids-prod-list/kids-prod-list.component'
import { HomeMainComponent } from '../home/home-main/home-main.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { LoginSignupComponent } from '../login/login-signup/login-signup.component';
import { OrderPlacedComponent } from '../checkout/order-placed/order-placed.component';
import { BillPayComponent } from '../checkout/bill-pay/bill-pay.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeMainComponent },
    { path: 'mens', component: MenProdListComponent },
    { path: 'womens', component: WomenProdListComponent },
    { path: 'kids', component: KidsProdListComponent },
    { path: 'product_detail', component: ProductDetailComponent }, 
    // { path: 'signup', component: LoginSignupComponent },
    { path: 'login', component: LoginSignupComponent },
    { path: 'bill_pay', component: BillPayComponent },
    { path: 'order_details', component: OrderPlacedComponent },

  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  