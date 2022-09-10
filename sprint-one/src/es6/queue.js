class Queue {

  constructor(storage, beg, end) {
    this.storage = {};
    this.beg = 0;
    this.end = 0;
  }

  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
  }

  dequeue() {
    let result = this.storage[this.beg];

    if (this.end - this.beg > 0) {
      this.beg++;
    }
    return result;
  }

  size() {
    return this.end - this. beg;
  }

}