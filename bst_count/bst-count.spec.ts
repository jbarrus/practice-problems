import {random, times} from 'lodash';
import {all as simpleWords} from 'simple-words';

import count from './bst-count';
import {Node} from '../bst';

describe('binary search tree', () => {
  it('should return 0 for undefined', () => {
    expect(count()).toBe(0);
  });

  it('should return 1 for a tree with 1 item', () => {
    expect(count(generateTree(['first']))).toBe(1);
  });

  it('should return 2 for a tree with 2 items', () => {
    expect(count(generateTree(['first', 'second']))).toBe(2);
  });

  it('should return 3 for a tree with 3 items', () => {
    expect(count(generateTree(['first', 'second', 'third']))).toBe(3);
  });

  it('should handle large trees', () => {
    expect(count(generateTree(simpleWords))).toEqual(simpleWords.length);
  });

  function generateTree<T>(items: T[]): Node<T> {
    const root = new Node<T>();
    items.forEach(item => root.insert(item));
    return root;
  }
});
