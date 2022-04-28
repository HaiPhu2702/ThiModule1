

function tim_Tong_Uoc_Mot_So(so) {
    let sum = 0;

    for (let i = 1; i < so - 1; i++) {
        if (so % i == 0) {
            sum += i;
        }
    }
    return sum;
}

//main
function check_Cap_So_Than_Thiet(so_A,so_B){
    if(tim_Tong_Uoc_Mot_So(so_A)===so_B  &&  tim_Tong_Uoc_Mot_So(so_B)===so_A){
        return true;
    }
    return false;

}

let check=check_Cap_So_Than_Thiet(220,294)
console.log(check)