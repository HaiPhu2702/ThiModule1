let bookMannager=new BookMannager();
bookMannager.showBook()
function save(){
    let Name= document.getElementById("name").value;
    let Year= document.getElementById("year").value;
    let Number= document.getElementById("Number").value;

    studentMannager.add(Name,Year,Number);

}