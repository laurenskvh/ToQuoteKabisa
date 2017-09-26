import { Quote } from './quote.model';
import { QuoteService } from './quote.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote;
  currentQuoteNumber = 1;
  @Input() name = '';
  @Input() quoteContent = '';
  message: string;
  isVisibleBoolean: boolean;

  /*
   * Initalize QuoteService.
   */
  constructor(private _quoteService: QuoteService) { }

  /*
   * On component initaliziation (after construction)
   * fetch a random quote to display.
   */
  ngOnInit() {
    this._quoteService.getRandomQuote().subscribe((res) => {
      this.quote = res.json();
    });
  }

  /*
   * Fetch the next quote by increasing ID.
   */
  nextQuote(): void {
    this._quoteService.getSingleQuote(this.currentQuoteNumber).subscribe((res) => {
      this.quote = res.json();
      this.currentQuoteNumber++;
    });
  }

  /*
   * Google the passed quote string.
   */
  googleQuote(quote: string): void {
    window.open('https://www.google.com/search?q=' + quote);
  }

  /*
   * Pass parameters from form to component
   * through @Input. Basic check if values
   * aren't null.
   */
  submitNewQuote(): void {
    if (this.name == '' || this.quoteContent == '') {
      this.message = 'Please fill in the fields.';
    } else {
      this.name = '';
      this.quoteContent = '';
      this.message = 'Thank you.';
      this.isVisibleBoolean = true;
    }
  }
}
