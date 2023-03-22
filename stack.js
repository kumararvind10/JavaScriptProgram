class Stack{
    constructor(){
        this.items = [];

    }

    push(item){
        this.items.push(item);
    }

    pop(){
        if(this.isEmpty()){
            return 'Stack is empty'
        }
        this.items.pop()

    }

    isEmpty(){
        return (this.items.length == 0) ? true: false;
    }

    printItems(){
        let results = "";
        for( let i = 0; i< this.items.length ; i++){
            results += " "+ this.items[i] + "" ;
        }
        return results.trim();
    }

}

let stack1 = new Stack();
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(6);
console.log(stack1.printItems())
console.log(stack1.pop())
console.log(stack1.printItems())
stack1.push(7);
console.log(stack1.printItems())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.pop())




