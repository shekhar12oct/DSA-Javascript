// Stack Implementation
class Stack {
  constructor() {
    this.items = [];
  }
  // push an element - push(element)
  push = (element) => {
    this.items[this.items.length] = element;
  };
  // remove an element - pop()
  pop = () => {
    this.items.pop();
  };
  //top element value without removing it- peek()
  peek = () => {
    return this.items[this.items.length - 1];
  };
  //check if stack is empty or not - isEmpty()

  isEmpty = () => {
    return this.items.length === 0;
  };
  //get the number of elements in the stack - size()
  size = () => {
    return this.items.length;
  };
  // visualize the elements in the stack - print()
  print = () => {
    console.log(this.items.toString());
  };
}
