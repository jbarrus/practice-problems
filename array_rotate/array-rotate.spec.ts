import rotate from './array-rotate';

describe('array rotate', () => {
  it('should return an empty array when passed an empty array', () => {
    expect(rotate([])).toEqual([]);
  });

  it('should return the array if there are fewer than 2 items', () => {
    expect(rotate([])).toEqual([]);
    expect(rotate([1])).toEqual([1]);
  });

  it('should rotate items 1 time', () => {
    expect(rotate([1, 2, 3], 1)).toEqual([3, 1, 2]);
  });

  it('should rotate items 2 times', () => {
    expect(rotate([1, 2, 3], 2)).toEqual([2, 3, 1]);
  });

  it('should return the array itself if rotation times = length', () => {
    expect(rotate([1, 2, 3], 3)).toEqual([1, 2, 3]);
  });

  it('should not overflow the stack', () => {
    expect(rotate([1, 2, 3], 3 * 1000000 + 1)).toEqual([3, 1, 2]);
  });
});
