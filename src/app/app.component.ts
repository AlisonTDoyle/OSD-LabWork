import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { SignalServiceService } from './services/SignalService/signal-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
    , Child1Component
    , Child2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [SignalServiceService]
})
export class AppComponent {
  title = 'OSD-LabWork';
  private _signalService: SignalServiceService;

  // Constructor
  constructor(signalService: SignalServiceService) {
    this._signalService = signalService;
  }

  // Methods
  public increment() {
    this._signalService.increment();
  }

  public decrement() {
    this._signalService.decrement();
  }
}
