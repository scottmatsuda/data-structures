var Stack = function() {
  this.last = 0;
  this.howbig = 0;
  this.storage = {};

};

Stack.prototype.push = function(value) {
    this.last++;
    this.howbig++;
    this.storage[this.last] = value;
}
Stack.prototype.pop = function() {
  if(this.howbig > 0) {
    var item = this.storage[this.last];
    delete this.storage[this.last];
    this.last--;
    this.howbig--;
    return item;
  }
}
Stack.prototype.size = function() {
  return this.howbig;
}