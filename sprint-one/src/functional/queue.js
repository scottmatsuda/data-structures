var Queue = function() {
  var someInstance = {};
  var last = 0;
  var next = 0;
  var howbig = 0


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = last +1;
    if(next === 0){
      next ++;
    }
    last ++;
    howbig++;
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    if(howbig > 0){
      var index = next;
      var item = storage[index]
      delete storage[index];
      if(next === last){
        last --;
        next--;
      }else {
      next ++;
      }
      howbig--;
      return item;
    }
  };

  someInstance.size = function() {
    return howbig;
  };

  return someInstance;
};
