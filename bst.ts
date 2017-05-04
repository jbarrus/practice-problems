export class Node<T> {
  constructor(public value?: T, public left?: Node<T>, public right?: Node<T>) {

  }

  insert(item: T) {
    if (!this.value) {
      this.value = item;
    } else if (item < this.value) {
      if (!this.left) {
        this.left = new Node<T>();
      }
      this.left.insert(item);
    } else if (item > this.value) {
      if (!this.right) {
        this.right = new Node<T>();
      }
      this.right.insert(item);
    }
  }
}
