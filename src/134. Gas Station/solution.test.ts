import { canCompleteCircuit } from './solution';

describe('134. Gas Station', () => {
  it('test case 1', () => {
    const gas = [1, 2, 3, 4, 5];
    const cost = [3, 4, 5, 1, 2];
    expect(canCompleteCircuit(gas, cost)).toEqual(3);
  });

  it('test case 2', () => {
    const gas = [2, 3, 4];
    const cost = [3, 4, 3];
    expect(canCompleteCircuit(gas, cost)).toEqual(-1);
  });
});
