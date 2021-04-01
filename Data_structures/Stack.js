class Stack{
    constructor(){
        this.items = [];
        this.count=0;
    }

    push(element){
        this.items[this.count]=element;
        console.log(`${element} added to position [${this.count}]`);
        this.count++;
        
        return this.count-1;
    }

    pop(){
        if(this.count===0){
            console.log('The Stack is empty');
            return undefined;
        }
        let deleteItem = this.items[this.count-1]
        this.count--;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    peek(){
        if(this.items.count===0){
            console.log('The stack is empty');
        }
        let last = this.items[this.count-1];
        console.log(`The last item is ${last}`)
        return last;
    }

    isEmpty(){
        return this.count===0;
    }

    print(){
        let str='';
        for (let i=0; i<this.count; i++){
            str+=`${this.items[i]} `
        }
        return str;
    }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.peek();
stack.pop();
console.log(stack.isEmpty());
stack.pop();
console.log(stack.isEmpty());
stack.pop();
console.log(stack.isEmpty());
stack.push(100);
stack.push(200);
stack.push(300);
console.log(stack.print());