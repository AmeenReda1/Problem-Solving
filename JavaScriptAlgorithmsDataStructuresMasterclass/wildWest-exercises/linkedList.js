class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // YOUR CODE GOES HERE
        let node = new Node(val)

        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node

        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        let newTail = currentNode
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next

        }
        this.tail = newTail
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
    get(index) {
        let count = 0;
        if (index > this.length || index < 0) return undefined;
        let current = this.head
        while (i !== index) {
            current = current.next;
            count++;
        }
        return current;
    }
    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value
            return true;
        }
        return false;

    }
    unshift(val) {
        var newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        this.length++;
        return this
    }
    insert(index, value) {
        if (index < 0 || index > this.length + 1) return false;
        else if (index == 0) this.unshift(value)
        else if (index == this.length) this.push(value)
        else if (index > 0 && index < this.length) {
            let newNode = new Node(value)
            let prevIndex = index - 1;
            let foundNode = this.get(prevIndex);
            if (foundNode) {
                newNode.next = foundNode.next;
                foundNode.next = newNode;
                this.length++;
            }

        }
        return true;
    }
    shift() {
        if (!this.head) return undefined
        var targetHead = this.head
        this.head = targetHead.next
        this.length--
        return targetHead

    }
    remove(index) {
        if (index > this.length || index < 0) return undefined;
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop();

        var previousNode = this.get(index - 1)
        var removedNode = previousNode.next
        previousNode.next = removedNode.next
        this.length--;
        return removedNode;
    }
    rotate(place) {
        if (place == 0 && place > this.length) return this;
        if (place < 0) {
            place = this.length + place;
        }
        let current = this.head;
        let counter = 0;
        while (counter < place) {
            this.push(current.val)
            this.shift()
            current = current.next;
            counter++;

        }
        return this;
    }
}

var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5); // singlyLinkedList
console.log(singlyLinkedList.length);   // 1
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 5

singlyLinkedList.push(10); // singlyLinkedList
singlyLinkedList.length; // 2
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.tail.val; // 10

singlyLinkedList.push(15); // singlyLinkedList
singlyLinkedList.length; // 3
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.tail.val; // 15

singlyLinkedList.pop().val; // 15
singlyLinkedList.tail.val; // 10
singlyLinkedList.length; // 2
singlyLinkedList.pop().val; // 10
singlyLinkedList.length; // 1
singlyLinkedList.pop().val; // 5
singlyLinkedList.length; // 0
singlyLinkedList.pop(); // undefined
singlyLinkedList.length; // 0
