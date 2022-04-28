
let arr=[4,6,7,8,9]


function tryRemoveFromArray(arr,index){

if(index>=0 && index <arr.length){
    for (let i = index; i <arr.length-1 ; i++) {
        arr[i]=arr[i+1]
    }
    arr.length=arr.length-1;
    return arr;
}else {
    return arr;
}

}

let result=tryRemoveFromArray(arr,0)
console.log(result)