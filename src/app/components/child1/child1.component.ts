import { Component } from '@angular/core';
import { SignalServiceService } from '../../services/SignalService/signal-service.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {
  // Properties

  // Constructor
  constructor(private _signalService:SignalServiceService) {
  }

  // Methods
  protected getCount() {
    return this._signalService.getCount();
  }
}
