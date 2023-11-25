import { isIsomorphic } from './solution';

describe('205. Isomorphic Strings', () => {
  it('test case 1', () => {
    const s = 'egg';
    const t = 'add';
    expect(isIsomorphic(s, t)).toEqual(true);
  });

  it('test case 2', () => {
    const s = 'foo';
    const t = 'bar';
    expect(isIsomorphic(s, t)).toEqual(false);
  });

  it('test case 3', () => {
    const s = 'paper';
    const t = 'title';
    expect(isIsomorphic(s, t)).toEqual(true);
  });
});
