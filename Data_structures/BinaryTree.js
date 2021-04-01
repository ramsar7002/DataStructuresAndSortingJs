class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    }
    const searchTree = node => {
      if (data < node.data) {
        if (!node.left) {
          node.left = new Node(data);
          return;
        } else {
          return searchTree(node.left);
        }
      } else {
        if (!node.right) {
          node.right = new Node(data);
          return;
        } else {
          return searchTree(node.right);
        }
      }
    };
    return searchTree(node);
  }

  find(data) {
    let node = this.root;
    if (node.data === null) {
      return null;
    }
    while (node.data !== data) {
      if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
      if (node === null) {
        return null;
      }
    }

    return node;
  }

  findMinHeiget(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.findMinHeiget(node.left);
    let right = this.findMinHeiget(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeiget(node = this.root) {
    if (node === null) {
      return -1;
    }

      let left = this.findMaxHeiget(node.left);
      let right = this.findMaxHeiget(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalanced() {
    if (this.findMaxHeiget() - this.findMinHeiget() <= 1) {
      return true;
    }
    return false;
  }

  inOrder(){
    if(this.root===null){
      return null;
  }

    let res = new Array();

    let findInOrder = (node)=>{
      node.left && findInOrder(node.left);
      res.push(node.data);
      node.right && findInOrder(node.right);
  }
  findInOrder(this.root);

  return res;
}

postOrder(){
  if(this.root===null){
    return null;
}

  let res = new Array();

  let findPostOrder = (node)=>{
    node.left && findPostOrder(node.left);
    node.right && findPostOrder(node.right);
    res.push(node.data);
}
findPostOrder(this.root);

return res;
}

preOrder(){
  if(this.root===null){
    return null;
}

  let res = new Array();

  let findPreOrder = (node)=>{
    res.push(node.data);
    node.left && findPreOrder(node.left);
    node.right && findPreOrder(node.right);
  }
findPreOrder(this.root);

return res;
}

levelOrder(){
  let result =[];
  let q=[];
  if(this.root!=null){
    q.push(this.root);

  while(q.length>0){
    let node = q.shift();
    result.push(node.data);
  
  if(node.left!=null){
    q.push(node.left);
  }
  if(node.right!=null){
    q.push(node.right);
  };
  };
return result;
  }
else{
   return null;
}
}

}


const tree = new BST();

tree.add(2);
tree.add(1);
tree.add(3);
tree.add(3);
tree.add(6);
tree.add(22);
tree.add(5);
tree.add(7);
tree.add(20);

console.log(tree);

console.log(tree.findMinHeiget());
console.log(tree.findMaxHeiget());

console.log(tree.isBalanced());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.levelOrder())
console.log(BST.prototype)
