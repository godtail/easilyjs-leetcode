import { hIndex } from './solution';

describe('274. H-Index', () => {
  it('test case 1', () => {
    const citations = [3, 0, 6, 1, 5];
    expect(hIndex(citations)).toEqual(3);
  });

  it('test case 2', () => {
    const citations = [1, 3, 1];
    expect(hIndex(citations)).toEqual(1);
  });
});
