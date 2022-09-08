var Queue = function() {

  var queue = {
    storage: {},
    beg: 0,
    end: 0
  };

  extend(queue, queueMethods);
  return queue;
};

var extend = function(obj) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      obj[key] = arguments[i][key];
    }
  }

  return obj;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue: function() {
    let result = this.storage[this.beg];
    if (this.end - this.beg > 0) {
      this.beg++;
    }
    return result;
  },

  size: function() {
    return this.end - this.beg;
  }
};


