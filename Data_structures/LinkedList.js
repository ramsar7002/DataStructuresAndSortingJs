class Node{
  constructor(data, next=null){
    this.data=data;
    this.next=next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertFirst(data){
    this.head= new Node(data, this.head);
    this.size++;
  }

  //Insert last node
  
  insertLast(data){
    let node = new Node(data);
    if(this.head===null) this.head=node
    else{
      let temp = this.head;
      while (temp.next) {
        temp=temp.next;
      }
      temp.next = node;
    }
    this.size++;
  }

  //Insert at index
  insrtAt(data, index){
    //If index is out of range
    if(index>0 && index>this.size){
      return;
    }

    //Case of first index
    if(index===0){
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current = this.head;
    let prev = this.head;

    for(let i=0; i<index; i++){
      prev=current;
      current=current.next;
    }
    node.next=current;
    prev.next=node;

    this.size++;
  }
  //Get at index

  getAt(index){
    if(!this.head) return undefined;
    let cur = this.head;
    if(index>=this.size) return undefined;
    for(let i=0; i<index; i++){
        cur=cur.next
      }
      return cur.data;
    }
  

  //Remove at index
  removeAt(index){
    if(index>this.size) return undefined;
    if(!this.head) return;
    if(index===0){
      if(this.head.next) this.head=this.head.next;
      else this.head=null
    } else
    {
      let cur=this.head;
      let prev = this.head;

      for(let i=0; i<index; i++){
        prev=cur;
        cur=cur.next;
      }
      if(cur.next===null){
        prev.next=null;
      }
      else{
        prev.next=cur.next;
      }
    }

    this.size--;
    
    
  }

  //Clear list
  clearList(){
    this.head=null;
    this.size=0;
    }
  

  //print list data
  printListData(){
    let current = this.head;
    while (current) {
      console.log(current.data);
      current=current.next;
    }
  }


}

const list = new LinkedList();

list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
// list.printListData();
list.insertLast(400);
list.insertLast(500);
list.insertLast(600);
list.insrtAt(50, 5)
list.printListData();
//console.log(list.getAt(list.size));
console.log('=====================')
list.removeAt(list.size-1);
list.printListData();
console.log('=====================')
list.clearList();
list.printListData();
