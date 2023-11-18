import { convert } from './solution';

describe('6. Zigzag Conversion', () => {
  it('test case 1', () => {
    const s = 'PAYPALISHIRING';
    const numRows = 3;
    expect(convert(s, numRows)).toEqual('PAHNAPLSIIGYIR');
  });

  it('test case 2', () => {
    const s = 'PAYPALISHIRING';
    const numRows = 4;
    expect(convert(s, numRows)).toEqual('PINALSIGYAHRPI');
  });
});
