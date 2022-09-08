var Queue = function(storage, beg, end) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.beg = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  let result = this.storage[this.beg];

  if (this.end - this.beg > 0) {
    this.beg++;
  }
  return result;
};

Queue.prototype.size = function() {
  return this.end - this.beg;
};

