const merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]){
           sorted.push(arr1[0]);
           arr1.shift();
      }

      else {
          sorted.push(arr2[0]);
          arr2.shift();
      }
    };
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
  };


const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  };



  let arr =new Array(10000);
  for(let i=0; i<arr.length; i++){
      arr[i]= Math.floor(Math.random() * Math.floor(10000));
  }
let start =  Date.now();
console.log(mergeSort(arr));
let end =  Date.now();
console.log(`It took ${end-start} ms`);