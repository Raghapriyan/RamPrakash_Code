import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BottomCartComponent } from './bottom-cart/bottom-cart.component';
import { HighlightDirective } from './highlight.directive';
import { ExponentPipe } from './exponent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    BottomCartComponent,
    HighlightDirective,
    ExponentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
