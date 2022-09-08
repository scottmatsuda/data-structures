var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var beg = 0;
  var end = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    let result = storage[beg];
    if (end - beg > 0) {
      beg++;
    }
    return result;
  };

  someInstance.size = function() {
    return end - beg;
  };

  return someInstance;
};
