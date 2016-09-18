import Calculator from '../src/calc';
import {expect} from 'chai';

describe('Calculator', () => {
  console.log(new Date());
  var calc: Calculator;

  beforeEach(function() {
    calc = new Calculator();
  });

  describe('#add #addUsingObservables', () => {
    it('should add two numbers correctly', () => {
      let x: number = 2;
      let y: number = 3;
      let conventionalAdd: number = calc.add(x, y);
      let addUsingObservables: number = calc.addUsingObservables(x, y);
      expect(conventionalAdd).to.equal(addUsingObservables);
    });
  });
});
