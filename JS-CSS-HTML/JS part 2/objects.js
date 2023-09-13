
//OBJECTS PRACTICE
//Meal Maker
// A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!


let menu = {
    _meal: '', //starting with _ so it means it should not be directly altered.
    _price: 0,

    set meal(mealToCheck) { //Using setter method to make sure user sets the correct meal
        if(typeof mealToCheck === 'string'){
            this._meal = mealToCheck;
        }
    },

    set price(priceToCheck) {
        if(typeof priceToCheck === 'number'){
            this._price = priceToCheck;
        }
    },

    get todaysSpecial () {
        if(this._meal && this._price){
            return `Today's special is ${this._meal} for ${this._price}`
        } else {
            return 'Meal or price was not set correctly'
        }

    }
}


menu.meal = 'chicken'
menu.price = 54;



//console.log(todaysSpecial)



//OBJECTS TEAM STATS PROJECT
// Team Stats
// We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

// After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
const team = {
    _players: [
            {firstName: 'Saim', lastName: 'Ali', age: 22},
            {firstName: 'James', lastName: 'Sun', age: 45},
            {firstName: 'Mike', lastName: 'Watson', age: 12}
    ],
    _games: [
        {opponent: 'India', teamPoints: 250, opponentPoints: 220},
        {opponent: 'England', teamPoints: 300, opponentPoints: 220},
        {opponent: 'Australia', teamPoints: 290, opponentPoints: 220}

    ],

    get players () { //we dont have setters because we don't want above properties to be changed. 
        return this._players
    },

    get games () {
        return this._games
    },

    addPlayer(newFirstName, newLastName, newAge) { //method to add a new player
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }

        this._players.push(player)

    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this._games.push(game)
    }


}

team.addPlayer('Bugs', 'Bunny', 76)
team.addGame('Titans', 100, 98)
//console.log(team._games)