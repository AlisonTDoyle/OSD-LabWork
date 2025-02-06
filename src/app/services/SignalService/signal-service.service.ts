import { computed, Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalServiceService {
  // Properties
  public count: WritableSignal<number> = signal(0);
  public doubleCount: Signal<number> = computed(() => this.count() * 2);

  // Constructor
  constructor() { }

  // Methods
  public increment() {
    this.count.update(value => value + 1);
  }

  public decrement() {
    // Make sure count does not go below 0
    if (this.count() > 0) {
      // Increment the count by 1.
      this.count.update(value => value - 1);
    };
  }

  public getCount() {
    return this.count();
  }

  public getDoubleCount() {
    return this.doubleCount();
  }
}