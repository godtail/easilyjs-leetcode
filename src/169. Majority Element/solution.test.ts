import { majorityElement } from './solution';

describe('169. Majority Element', () => {
  it('test case 1', () => {
    const nums = [3, 2, 3];
    expect(majorityElement(nums)).toEqual(3);
  });

  it('test case 2', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    expect(majorityElement(nums)).toEqual(2);
  });
});
