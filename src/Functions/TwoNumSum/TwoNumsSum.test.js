import TwoNumSum from './TwoNumsSum';

describe('TwoNumSum', () => {
  it('Debe devolver un objeto', () => {
    expect(typeof TwoNumSum()).toBe('object');
  });
  it('Debe de devolver un Array con los dos numeros que suman', () => {
    expect(TwoNumSum([3, 6, 8, 10], 13)).toEqual([3, 10]);
    expect(TwoNumSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
    expect(TwoNumSum([1, 10, 9, 21], 30)).toEqual([9, 21]);
    expect(TwoNumSum([6, 3, 2, 1], 5)).toEqual([3, 2]);
    expect(TwoNumSum([3, 6, 8, 10], 16)).toEqual([6, 10]);
    expect(TwoNumSum([1000, 700, 300, 500], 1000)).toEqual([700, 300]);
  });
  it('Debe devolver un Array vacio cuand no encuentra un resultado', () => {
    expect(TwoNumSum([3, 6, 8, 10], 12)).toEqual([]);
    expect(TwoNumSum([2, 7, 11, 15], 19)).toEqual([]);
    expect(TwoNumSum([1, 10, 9, 21], 29)).toEqual([]);
    expect(TwoNumSum([3, 6, 8, 10], 15)).toEqual([]);
    expect(TwoNumSum([6, 3, 2, 1], 10)).toEqual([]);
    expect(TwoNumSum([1000, 700, 300, 500], 900)).toEqual([]);
  });
});
