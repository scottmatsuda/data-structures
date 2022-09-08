var Stack = function() {
  var someInstance = {};
  var last = 0
  var howBig = 0;
  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
  someInstance.push = function(value) {
    var next = last + 1;
    storage[next] = value;
    last += 1;
    howBig += 1;
  };

  someInstance.pop = function() {
    if(howBig > 0) {
      var index = last
      var poped = storage[index];
      delete storage.index;
      last -= 1;
      howBig -= 1;
      return poped;
    }
  };

  someInstance.size = function() {
    return howBig;
  };

  return someInstance;
};
