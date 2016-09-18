import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs/Rx';

export default class Calculator {

  add(x: number, y: number): number {
    return x + y;
  }

  addUsingObservables(x: number, y: number): number {
    let observable: Observable<number> = Observable.of(x, y).reduce((x1: number, x2: number) => x1 + x2);
    let result: number = 0;
    var subscription = observable.subscribe(
      function(x) {
        result = x;
      },
      function(err) {
        console.error(err);
      },
      function() {
        // done
      });
    return result;
  }
}
