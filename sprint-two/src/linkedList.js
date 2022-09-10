var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newtail = new Node(value);
    if (list.head === null) {
      list.head = newtail;
    }
    if (list.tail) {
      list.tail.next = newtail;
    }
    list.tail = newtail;
  };

  list.removeHead = function() {
    if (list.head) {
      let removed = list.head;
      list.head = list.head.next;
      return removed.value;
    }
  };

  list.contains = function(target) {
    var current = list.head;
    if (current.value === target) {
      return true;
    }
    while (current.next) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    if (current.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*

 * Complexity: What is the time complexity of the above functions?
// contains => O(n)
// removeHead, addToTail => O(1)
 */
