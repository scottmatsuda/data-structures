class Queue {

  constructor() {
    this.last = 0;
    this.next = 0;
    this.howbig = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.last++;
    this.howbig++;
    if(this.next === 0) {
      this.next++;
    }
    this.storage[this.last] = value;
  }

  dequeue() {
    if(this.howbig > 0) {
      item = this.storage[this.next];
      delete this.storage[this.next];
      if(this.next === this.last){
        this.next = 0;
        this.last = 0;
      } else {
        this.next++;
      }
      this.howbig--;
      return item;
    }
  }
  size() {
    return this.howbig;
  }
}
