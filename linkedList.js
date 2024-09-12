class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class linkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
        this.listSize = 0;
    }

    append(value) {
        const node = new Node(value);
        if (this.headNode === null) {
            this.headNode = node;
            this.tailNode = node;
        }
        else {
            this.tailNode.nextNode = node;
            this.tailNode = node;
        }
        this.listSize++;
    }
    prepend(value) {
        const node = new Node(value);
        node.nextNode = this.headNode;
        this.headNode = node;
        this.listSize++;
    }
    size() {
        return this.listSize;
    }
    head() {
        return this.headNode;
    }
    tail() {
        return this.tailNode;
    }
    at(index) {
        let item = this.headNode;
        for (let i = 0;i < index;i++) {
            item = item.nextNode;
        }
        return item;
    }
    pop() {
        let item = this.at(this.listSize - 2);
        item.nextNode = null;
        this.tailNode = item;
    }
    contains(value) {
        let contain = false;
        let item = this.headNode;
        for (let i = 0;i < this.listSize;i++) {
            if (item.value === value) {
                contain = true;
                break
            }
            item = item.nextNode;
        }
        return contain;
    }
    find(value) {
        let item = this.headNode;
        for (let i = 0;i < this.listSize;i++) {
            if (item.value === value) {
               return i;              
            }
            item = item.nextNode;
        }
        return null;
    }
    toString() {
        let item = this.headNode;
        let string = "";
        for (let i = 0;i < this.listSize;i++) {
            string = string.concat(`(${item.value}) -> `);
            item = item.nextNode;
        }
        return string.concat("null");
    }
    insertAt(value, index) {
        const newNode = new Node(value);
        const atIndex = this.at(index);
        newNode.nextNode = atIndex;
        this.at(index - 1).nextNode = newNode;
    }
    removeAt(index) {
        const beforeIndex = this.at(index - 1);
        const afterIndex = this.at(index + 1);

        beforeIndex.nextNode = afterIndex;
    }
}