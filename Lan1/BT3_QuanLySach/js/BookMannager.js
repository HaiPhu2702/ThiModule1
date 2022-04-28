class BookMannager {
    constructor() {
        this._Book = [];
    }

    showBook() {
        let html = ''
        if (this._Book.length === 0) {
            html += '<tr>'
            html += '<td colspan="6"> No data</td>'
            html += '</tr>'
        } else {
            for (let i = 0; i < this._Book.length; i++) {
                html += '<tr>'
                html += `<td>${i + 1}</td>`
                html += `<td>${this._Book[i].getName1()}</td>`
                html += `<td>${this._Book[i].getYear()}</td>`
                html += `<td>${this._Book[i].getNumber()}</td>`
                // html += `<td>${this._Book[i].getStatus()}</td>`
                html += '</tr>'
            }
        }
        document.getElementById("list-book1").innerHTML = html;


    }

    add(name, year, number) {
        let book = new Book(name, year, number);
        this._Book.push(book);
        this.showBook();

    }




}