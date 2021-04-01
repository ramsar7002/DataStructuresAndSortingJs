class Heap{
    constructor(){
        this.heap = [];
        this.heap.push(null);
    }

heapifyUp(index){
    while(this.heap[index] < this.heap[Math.floor(index/2)]){
        if(index>1){
            let temp = this.heap[index];
            this.heap[index] = this.heap[Math.floor(index/2)];
            this.heap[Math.floor(index/2)] = temp;
        }
        if(Math.floor(index/2)>1){
            index=Math.floor(index/2);
        }
        else break;
    }
}

heapifyDown(index){
    let left = index*2;
    let right = index*2+1;

    while(this.heap[index]>this.heap[left] || this.heap[index]>this.heap[right]){
        if(this.heap[left]< this.heap[right]){
            let temp = this.heap[index];
            this.heap[index] = this.heap[left];
            this.heap[left] = temp;
            index*=2
        }
        else{
            let temp = this.heap[index];
            this.heap[index] = this.heap[right];
            this.heap[right] = temp;
            index=index*2+1;
        }

        left=index*2;
        right=index*2+1;

        if(!this.heap[left] || !this.heap[right]) return;

    }

}

insert(num){
    this.heap.push(num);
    if(this.heap.length>2)
        this.heapifyUp(this.heap.length-1);
}


remove(){
    if (this.heap.length===1) return null;
    let minNum = this.heap[1];
    if(this.heap.length===2){
         this.heap.pop();
         return minNum;
    }

    if(this.heap.length===3){
        this.heap[1]= this.heap.pop();
        if (this.heap[1] > this.heap[2]) {
            let temp = this.heap[1];
            this.heap[1] = this.heap[2];
            this.heap[2] = temp;
          }
          return minNum;
    }

    this.heap[1] = this.heap[this.heap.length-1];
    this.heap.pop();


    this.heapifyDown(1);
    return minNum;
}

heapSort(){
    let sortdArr = [];
    let size = this.heap.length
    for(let i=1; i<size; i++){
        let val = this.remove()
        sortdArr.push(val);
    }
    return sortdArr;
}

}

let heap = new Heap();
for(let i=0; i<10000; i++){
    heap.insert(Math.floor(Math.random() * Math.floor(10000)));
  }

let start =  Date.now();
console.log(heap.heapSort())
let end =  Date.now();
console.log(`It took ${end-start} ms`);