import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteService } from './quote/quote.service';
import { QuoteComponent } from './quote/quote.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'quotes',
    pathMatch: 'full'
  },
  {
    path: 'quotes',
    component: QuoteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
     RouterModule.forRoot(ROUTES)
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
