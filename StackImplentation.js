//Stack Implementation using Javascript classs.
class Stack {
  constructor() {
    this.items = [];
  }

  //push
  push = (newVal) => {
    this.items[this.items.length] = newVal;
  };
  //pop
  pop = () => {
    if (this.items.length > 0) {
      this.items.length -= 1;
    }
  };

  //isEmpty
  isEmpty = () => {
    return this.items.length === 0;
  };

  //peek
  peek = () => {
    return this.items[this.items.length - 1];
  };
}

//return stack elements
stackElement = () => {
  return [...this.items];
};
