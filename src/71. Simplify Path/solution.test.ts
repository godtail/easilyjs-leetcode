import { simplifyPath } from './solution';

describe('71. Simplify Path', () => {
  it('test case 1', () => {
    const path = '/home/';
    expect(simplifyPath(path)).toEqual('/home');
  });

  it('test case 2', () => {
    const path = '/../';
    expect(simplifyPath(path)).toEqual('/');
  });

  it('test case 3', () => {
    const path = '/home//foo/';
    expect(simplifyPath(path)).toEqual('/home/foo');
  });

  it('test case 4', () => {
    const path = '/a/./b/../../c/';
    expect(simplifyPath(path)).toEqual('/c');
  });
});
