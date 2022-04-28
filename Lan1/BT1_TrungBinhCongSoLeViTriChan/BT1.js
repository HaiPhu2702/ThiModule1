

let arr=[];
//nhập số lượng phần tử phan tử nhập vào   (kiem tra)
let n_Element=+prompt("nhap bao nhieu phan tu")
console.log("so luong phan tu = "+n_Element)



for (let i = 0; i <n_Element ; i++) {
    let so=+prompt("nhap các phan tu cho mang")
    //thêm phần tử vào mảng
    arr.push(so);
}
//hiển thị mảng+them vao
console.log(" them vao ,hien thi mang") ;
console.log(arr)

//trung_Binh_Cong_So_lẻ_Vi_Tri_Chan
let sum=0;
let count=0;
let TBC=0;
    for (let j = 0; j <arr.length-1 ; j=j+2) {

            if(arr[j] % 2 !== 0){
                sum+=arr[j];
                count++;
            }

    }

    TBC=sum/count;
console.log("TBC= ")
console.log(TBC)
    // hien thi

