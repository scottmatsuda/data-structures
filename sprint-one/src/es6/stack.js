class Stack {

  constructor(storage, length) {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length > 0) {
      this.length--;
    }
    return this.storage[this.length];
  }

  size() {
    return this.length;
  }
}