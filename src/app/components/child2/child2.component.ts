import { Component } from '@angular/core';
import { SignalServiceService } from '../../services/SignalService/signal-service.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {
  // Properties

  // Constructor
  constructor(private _signalService:SignalServiceService) {
  }

  // Methods
  protected getDoubleCount() {
    return this._signalService.getDoubleCount();
  }
}
