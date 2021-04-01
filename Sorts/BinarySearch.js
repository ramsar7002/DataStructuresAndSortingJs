let arr= [1,4,6,7,8,9,12,15,17,19,24,26,29,29,29,56,78,98]


binarySearch = (arr, num) =>{
    let start = 0, end=arr.length-1, mid=0;

    while(start<end){
        
        mid = Math.floor(start + (end - start) / 2);
        if(arr[mid]===num){
            return mid;
        }
        else
        if(arr[mid]>num){
            end = mid-1;
        }
        else start= mid+1;
    }
    return 'The number not found';
}

let start =  Date.now();
console.log(binarySearch(arr, 24));
let end =  Date.now();
console.log(`It took ${end-start} ms`);