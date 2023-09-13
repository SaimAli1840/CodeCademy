

//Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
let reverseArray = (arr) => {
    let newArr = []
    for(let i = arr.length-1; i >= 0; i--)
    newArr.push(arr[i])
    return newArr;
  }



const sentence = ['sense.','make', 'all', 'will', 'This'];

//console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];






//Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

let greetAliens = (arr) => {
    for(let i = 0; i < arr.length; i ++){
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

//greetAliens(aliens);






//Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

let convertToBaby = (arr) => {
    let newArr = []
      for(let i = 0; i < arr.length; i++){
        newArr.push(`baby ${arr[i]}`)
      }
      return newArr
  }
