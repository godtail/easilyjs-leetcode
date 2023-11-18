import { strStr } from './solution';

describe('28. Find the Index of the First Occurrence in a String', () => {
  it('test case 1', () => {
    const haystack = 'sadbutsad';
    const needle = 'sad';
    expect(strStr(haystack, needle)).toEqual(0);
  });

  it('test case 2', () => {
    const haystack = 'leetcode';
    const needle = 'leeto';
    expect(strStr(haystack, needle)).toEqual(-1);
  });
});
