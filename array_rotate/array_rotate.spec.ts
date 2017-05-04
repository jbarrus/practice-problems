import 'jasmine';
import {array_rotate} from './array_rotate';

describe('array_rotate', () => {
  it('should rotate an array', () => {
    expect(array_rotate([1, 2, 3], 1)).toEqual([3, 1, 2]);
  });
});
