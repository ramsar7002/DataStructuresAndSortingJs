let i=10000;
let arr =new Array(10000);
for(let i=0; i<arr.length; i++){
    arr[i]=arr.length-i;
}

insertionSort = (arr) =>{
    let i, j, key;
    for(let i=0; i< arr.length; i++){
        key=arr[i];
        j=i-1;
        while(j>=0 && key<arr[j]){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }

    console.log(arr);
}

let start =  Date.now();
insertionSort(arr);
let end =  Date.now();
console.log(`It took ${end-start} ms`);