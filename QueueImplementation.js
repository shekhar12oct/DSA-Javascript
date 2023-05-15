//Queue implementation using Javascript

class Queue {
  constructor() {
    this.items = {};
    this.fronIndex = 0;
    this.backIndex = 0;
  }

  //enqueue
  enqueue = (item) => {
    this.items[this.backIndex] = item;
    this.backIndex++;
  };
  //dequeue
  dequeue = () => {
    const item = this.items[this.fronIndex];
    delete this.items[this.fronIndex];
    return item;
  };
  //isEmpty
  isEmpty = () => {
    Object.keys(this.items).length === 0;
  };

  //peek
  peek = () => {
    return this.items[this.fronIndex];
  };

  //printQueue
  printQueue = () => {
    return queue.items;
  };
}
