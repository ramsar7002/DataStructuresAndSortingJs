let arr =new Array(10000);
for(let i=0; i<arr.length; i++){
    arr[i]= Math.floor(Math.random() * Math.floor(10000));
}

partition = (arr, left, right) =>{
    let pivotValue = arr[right];
    let i=left, j=i-1;

    for(let i=left; i < right; i++){
        if(arr[i]<pivotValue){
            j++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        }
    [arr[j+1], arr[right]] = [arr[right], arr[j+1]];
    return j+1;
}

quickSort = (arr, start=0, end=arr.length) =>{
   if(start>=end) return;

   let index = partition(arr,start,end);
   quickSort(arr,start,index-1);
   quickSort(arr, index+1, end);
}

let start =  Date.now();
quickSort(arr);
console.log(arr);
let end =  Date.now();
console.log(`It took ${end-start} ms`);