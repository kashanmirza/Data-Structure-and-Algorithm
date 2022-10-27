class Block {
  data: any;
  next: any;

  constructor(data: any, next: any = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head: any;
  size: any;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data: any) {
    this.head = new Block(data, this.head);
    this.size++;
  }

  insertLast(data: any) {
    let block = new Block(data);
    let current: Block = this.head;
    if (!this.head) {
      current = block;
    } else {
      console.log("");
      while (current.next) {
        current = current.next;
      }
      current.next = block;
    }
    this.size++;
  }

  insertAt(data: any, index: number) {
    const block = new Block(data);
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bound exception");
    }

    if (index === 0) {
      this.insertFirst(block);
    }

    let current: Block, previous: Block;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    block.next = current;
    previous.next = block;
  }

  getAt(index: number) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bound exception");
    }

    let current: Block = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  removeAt(index: number) {
    let current: Block, previous: Block;
    current = this.head;
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bound exception");
    }

    if (index === 0) {
      this.head = current.next;
    } else {
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next; 
    }

    this.size--;
  }


  clearList(){
      this.head = null;
      this.size = 0;
  }

  printList() {
    let current = this.head;
    // console.log("- - - - ", current);
    while (current) {
      console.log("- - - - ", current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertLast(500);
ll.insertAt(600, 2);
// ll.printList();
ll.getAt(3);
