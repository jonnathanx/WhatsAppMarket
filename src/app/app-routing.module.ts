import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './store/pages/home/home.component';
import { ProductosComponent } from './store/pages/productos/productos.component';
import { ProductoComponent } from './store/pages/producto/producto.component';
import { ShopCartComponent } from './store/pages/shop-cart/shop-cart.component';
import { CheckoutComponent } from './store/pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'shop-cart',
    component: ShopCartComponent
  },
  {
    path : 'checkout',
    component: CheckoutComponent
  },
  // {
  //   path: '', 
  //   redirectTo: '/heroes-list',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    redirectTo: '/',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
