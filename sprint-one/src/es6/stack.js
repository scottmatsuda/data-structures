class Stack {
  constructor() {
    this.last = 0;
    this.howbig = 0;
    this.storage = {};
  }

  push(value) {
    this.last++;
    this.howbig++;
    this.storage[this.last] = value;
  }

  pop() {
    if(this.howbig > 0) {
      var item = this.storage[this.last];
      delete this.storage[this.last];
      this.last--;
      this.howbig--;
      return item;
    }
  }

  size() {
    return this.howbig;
  }
}