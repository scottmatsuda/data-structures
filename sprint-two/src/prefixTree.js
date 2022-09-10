class prefixTree {

  constructor() {
    this.isWord = false;
    this.children = {};
  }

  insert(word) {
    let string = word.split('');
    let char = string.shift();
    if (this.children[char]) {
      if (string.length === 0) {
        this.children[char].isWord = true;
      } else {
        this.children[char].insert(string.join(''));
      }
    } else {
      let node = new prefixTree();
      this.children[char] = node;
      if (string.length === 0) {
        node.isWord = true;
      } else {
        node.insert(string.join(''));
      }
    }
  }

  contains(word) {
    return this.lookingFor(word, true);
  }

  startsWith(prefix) {
    return this.lookingFor(prefix, false);
  }

  lookingFor(string, boolean) {
    let letters = string.split('');
    let char = letters.shift();
    if (this.children[char]) {
      if (letters.length === 0) {
        return boolean ? this.children[char].isWord : true;
      } else {
        return this.children[char].lookingFor(letters.join(''), boolean);
      }
    } else {
      return false;
    }
  }
}

// var myTree = new prefixTree();
// myTree.insert('apple');
// myTree.insert('ape');
// myTree.insert('triangle');
// console.log('myTree', myTree);
// console.log('children', myTree.children);
// console.log('should return flase for words that are not inserted into tree', myTree.contains('app'));
// console.log('should return true for prefixes that are  inserted into tree', myTree.startsWith('app'));
// console.log('should return true for words inserted into tree', myTree.contains('ape'));
// console.log('should return true for prefixes that are inserted into tree', myTree.startsWith('trian'));




