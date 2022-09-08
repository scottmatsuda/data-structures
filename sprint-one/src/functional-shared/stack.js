var Stack = function() {
  var stack = {
    storage: {},
    length: 0
  };

  extend(stack, stackMethods);
  return stack;
};

var extend = function(obj) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      obj[key] = arguments[i][key];
    }
  }

  return obj;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function() {
    if (this.length > 0) {
      this.length--;
      return this.storage[this.length];
    } else {
      return undefined;
    }
  },

  size: function() {
    return this.length;
  }
};


