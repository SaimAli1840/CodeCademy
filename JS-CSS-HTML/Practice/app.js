



class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title
    }

    get isCheckedOut(){
        return this._isCheckedOut
    }

    get ratings(){
        return this._ratings;
    }

    set isCheckedOut(value){
        this._isCheckedOut = value;
    }

    getAverageRating(){
        let total = this._ratings.reduce((sum, current) => sum + current, 0)
        let result = total / this._ratings.length
        return result;
    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(val){
        this._ratings.push(val)
    }
}

class Book extends Media{
    constructor(title, author, pages){
        super(title)
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author
    }

    get pages(){
        return this._pages
    }
}

class Movie extends Media{
    constructor(title, director, runTime){
        super(title)
        this._director = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director
    }

    get runTime(){
        return this._runTime
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus()
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
historyOfEverything.getAverageRating()

console.log(historyOfEverything.ratings)