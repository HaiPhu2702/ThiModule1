class HinhChuNhat {
    constructor(x,y,width,height,color) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color= color;
        this.canvas=document.getElementById("canvas11")
        this.pen=this.canvas.getContext("2d")
    }

    render(){
       this.pen.beginPath()
        this.pen.fillStyle = this.color;
        this.pen.fillRect(this.x,this.y,this.width,this.height);

    }


}


