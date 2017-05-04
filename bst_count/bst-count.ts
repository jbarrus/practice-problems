import {sum, map} from 'lodash';

import {Node} from '../bst';

export default function count<T>(node?: Node<T>): number {
  if (!node) {
    return 0;
  }
  return 1 + count(node.left) + count(node.right);
}