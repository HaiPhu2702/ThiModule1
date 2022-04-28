

let arrDiemThi=[3,7,6,8,9,15]


function sort(arr){
    for (let i = 1; i <arr.length-1 ; i++) {
       let j=i-1;
       let temp=arr[i];
       while(temp<arr[j] &&j>=0){
           arr[j+1]=arr[j];
           j--;
       }
       arr[j+1]=temp;
    }
    return arr
}


function timDiemThiCaoThu3(arr){
    sort(arr);
    return arr[arr.length-3];
}
let result=timDiemThiCaoThu3(arrDiemThi);
console.log(result)