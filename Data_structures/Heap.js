class MinHeap {
    constructor() {
      this.heap = [null];
    }
  
    hepifyUp(idx) {
      while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
        if (idx > 1) {
          let temp = this.heap[idx];
          this.heap[idx] = this.heap[Math.floor(idx / 2)];
          this.heap[Math.floor(idx / 2)] = temp;
  
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  
    hepifyDown() {
      let i = 1;
      let left = i * 2;
      let right = i * 2 + 1;
      while (this.heap[i] > this.heap[left] || this.heap[i] > this.heap[right]) {
        if (this.heap[left] < this.heap[right]) {
          let temp = this.heap[left];
          this.heap[left] = this.heap[i];
          this.heap[i] = temp;
          i *= 2;
        } else {
          let temp = this.heap[right];
          this.heap[right] = this.heap[i];
          this.heap[i] = temp;
          i = i * 2 + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
  
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    }
  
    insert(num) {
      this.heap.push(num);
      if (this.heap.length > 2) {
        let idx = this.heap.length - 1;
        this.hepifyUp(idx);
      }
    }
  
    remove() {
      if (this.heap.length <= 1) return;
      let smallest = this.heap[1];
      if (this.heap.length > 2) {
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.splice(this.heap.length - 1);
        if (this.heap.length === 3) {
          if (this.heap[1] > this.heap[2]) {
            let temp = this.heap[1];
            this.heap[1] = this.heap[2];
            this.heap[2] = temp;
          }
          return smallest;
        }
        this.hepifyDown();
        return smallest;
      } else {
        this.heap.splice(this.heap.length - 1);
        return smallest;
      }
    }
  
    print() {
      let str = '';
      for (let i = 1; i < this.heap.length; i++) {
        str += `${this.heap[i]} `;
      }
      console.log(str);
    }
  
    sort() {
      let res = new Array();
      while (this.heap.length > 1) {
        res.push(this.remove());
      }
      return res;
    }
  }
  
  let minHeap = new MinHeap();
  minHeap.insert(10);
  minHeap.insert(3);
  minHeap.insert(5);
  minHeap.insert(2);
  minHeap.insert(8);
  minHeap.insert(6);
  console.log(minHeap.heap);