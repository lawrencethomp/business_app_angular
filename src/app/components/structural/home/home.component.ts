import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  quotes = [
    `"While there is a lower class, I am in it,
    while there is a criminal element, I am of it,
    and while there is a soul in prison, I am not free."
    -Eugene Debs`,
    `"Love doesn't just sit there, like a stone;
    it has to be made, like bread,
    remade all the time, made new."
    -Ursula Le Guin`,

  " \"When you light a candle, you also cast a shadow.\" -Ursula Le Guin",
    "\"It is good to have an end to journey toward, but it is the journey that matters in the end.\" Ursula Le Guin",
    "\"If they can get you asking the wrong questions, they don't have to worry about the answers.\" Thomas Pynchon",

    "\"Let me be unambiguous. I prefer not to be photographed. \"Thomas Pynchon"
  ];

  ngOnInit() {
    this.quote = this.randomQuote();
  }

  randomQuote() {
    return this.quotes[
      Math.floor(
        Math.random() * Math.floor(this.quotes.length)
      )];
  }

}
