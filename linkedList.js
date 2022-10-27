var Block = /** @class */ (function () {
    function Block(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return Block;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirst = function (data) {
        this.head = new Block(data, this.head);
        this.size++;
    };
    LinkedList.prototype.insertLast = function (data) {
        var block = new Block(data);
        var current = this.head;
        if (!this.head) {
            current = block;
        }
        else {
            console.log("");
            while (current.next) {
                current = current.next;
            }
            current.next = block;
        }
        this.size++;
    };
    LinkedList.prototype.insertAt = function (data, index) {
        var block = new Block(data);
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bound exception");
        }
        if (index === 0) {
            this.insertFirst(block);
        }
        var current, previous;
        current = this.head;
        var count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        block.next = current;
        previous.next = block;
    };
    LinkedList.prototype.getAt = function (index) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bound exception");
        }
        var current = this.head;
        var count = 0;
        while (current) {
            if (count === index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.printList = function () {
        var current = this.head;
        // console.log("- - - - ", current);
        while (current) {
            console.log("- - - - ", current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
var ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertLast(500);
ll.insertAt(600, 2);
// ll.printList();
ll.getAt(3);
