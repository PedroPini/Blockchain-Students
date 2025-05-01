class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
      }

    delete(data) {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if (current) {
            prev.next = current.next;
            this.size--;
        }

    }

    find(data) {
        let current = this.head;

        while(current) {
            if(current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.prepend(5);
linkedList.prepend(4);
console.log(linkedList.size);
linkedList.delete(5);
console.log(linkedList.size);
console.log(linkedList.find(5));
// console.log(JSON.stringify(linkedList))
