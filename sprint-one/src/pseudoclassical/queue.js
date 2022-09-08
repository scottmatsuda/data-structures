var Queue = function() {
  this.last = 0;
  this.next = 0;
  this.howbig = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.last++;
  this.howbig++;
  if(this.next === 0){
    this.next++;
  }
  this.storage[this.last] = value;
}
Queue.prototype.dequeue = function() {
  if(this.howbig > 0) {
    var item = this.storage[this.next];
    delete this.storage[this.next];
    if(this.next === this.last){
      this.next = 0;
      this.last = 0;
    }else {
      this.next++;
    }
    this.howbig--;
    return item;
  }
}
Queue.prototype.size = function() {
  return this.howbig;
}
