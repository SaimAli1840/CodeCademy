//CLASSES AND INHERITANCE

// class Media { //parent class
//     constructor(title){
//         this._title = title;
//         this._isCheckedOut = false;
//         this._ratings = [];
//     }

//     get title(){
//         return this._title
//     }

//     get isCheckedOut(){
//         return this._isCheckedOut
//     }

//     get ratings(){
//         return this._ratings;
//     }

//     set isCheckedOut(value){
//         this._isCheckedOut = value;
//     }

//     getAverageRating(){
//         let total = this._ratings.reduce((sum, current) => sum + current, 0)
//         let result = total / this._ratings.length
//         return result;
//     }

//     toggleCheckOutStatus(){
//         this._isCheckedOut = !this._isCheckedOut;
//     }

//     addRating(val){
//         this._ratings.push(val)
//     }
// }

// class Book extends Media{ //child class extending from parent class
//     constructor(title, author, pages){
//         super(title)
//         this._author = author;
//         this._pages = pages;
//     }

//     get author(){
//         return this._author
//     }

//     get pages(){
//         return this._pages
//     }
// }

// class Movie extends Media{
//     constructor(title, director, runTime){
//         super(title)
//         this._director = director;
//         this._runTime = runTime;
//     }

//     get director(){
//         return this._director
//     }

//     get runTime(){
//         return this._runTime
//     }
// }

// const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
// historyOfEverything.toggleCheckOutStatus()
// historyOfEverything.addRating(4)
// historyOfEverything.addRating(5)
// historyOfEverything.addRating(5)
// historyOfEverything.getAverageRating()

// console.log(historyOfEverything.ratings)




//JS CLASSES CHALLENGES


// class Network {
//     constructor(data, users) {
//       this.data = data;
//       this.users = users;
//     }
//     // Insert code below
//     movieTime(){
//         if((this.data / this.users < 10 && this.data / this.users >= 0) || (this.data === 0 || this.users === 0)){
//             return false
//         } else {
//             return true;
//         }
//     }
//   }

// const library = new Network(50, 9) 
// library.movieTime()




class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
   
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
  }


  function balloonAttack(p1, p2){
    let p1BalloonsLeft = p1.balloonCount - p2.hitsPerMinute * 10;
    let p2BalloonsLeft = p2.balloonCount - p1.hitsPerMinute * 10;

    if (p1BalloonsLeft === p2BalloonsLeft){
        return 'Tie'
    } else if (p1BalloonsLeft > p2BalloonsLeft){
        return p1.name
    } else if (p2BalloonsLeft > p1BalloonsLeft){
        return p2.name
    }
  }

//   const p1 = new Player('p1', 5);
//   const p2 = new Player('p2', 2);
   
//   balloonAttack(p1, p2);
   
 
