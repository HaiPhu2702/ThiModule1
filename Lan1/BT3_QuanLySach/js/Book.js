class Book{
    constructor(name,year,number) {
        this._name=name;
        this._year=year;
        this._number=number;
        this._status=true;
    }

    getName1(){
        return this._name;
    }
    getYear(){
        return this._year;
    }
    getNumber(){
        return this._number
    }
    getStatus(){
        return this._status
    }

}