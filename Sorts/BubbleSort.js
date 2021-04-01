let i=10000;
let arr =new Array(10000);
for(let i=0; i<arr.length; i++){
    arr[i]=arr.length-i;
}

bubbleSort = (arr) =>{
    let temp;
    for(let i=0; i< arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= temp
            }
        }
    }
    console.log(arr)
}

let start =  Date.now();
bubbleSort(arr);
let end =  Date.now();
console.log(`It took ${end-start} ms`);