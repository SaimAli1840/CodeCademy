//GRAMMAR CHECKER EXERCISE
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' '); //split the string into an array

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

//we will manipuate the story by editing the sotryWords array
let count = 0;
storyWords.forEach(word => { //For each word in the storyWords array, we want the count variable to increment by one.
    count += 1;
    
})




// A word count of 181 is a bit long for this story. Let’s filter out all instances of the word “literally” to shorten the story and remove the unnecessary word. We will reassign the filtered story to the same storyWords variable by applying the .filter() method! 
storyWords = storyWords.filter(word => {
    if(word !== unnecessaryWord){ //variable is assigned above
        return word;
    }
})

// Now that we’ve removed the unnecessary words, let’s take care of any misspelled words in the story. We can reassign storyWords to a new array of spell-checked words using the .map() method!
storyWords = storyWords.map(word => {
    if(word === misspelledWord){
        return 'beautiful'
    } else return word;
})


// Uh oh, your great grandmother is going to read the story and there’s a “bad” word in it! Let’s apply the .findIndex() method to storyWords to find the index of the bad word.
let badWordIndex = storyWords.findIndex(x => {
    return x === badWord;
})

storyWords[78] = 'really';



// Finally, let’s simplify the words in the story to appeal to a broader audience. We can make sure every word in the story is 10 characters or less using the .every() method. The .every() method uses a callback function to test if every element in an array passes a specified condition. It returns true if all elements pass, and false if there is an element that does not pass.
let lengthCheck = storyWords.every(x => {
    x.length < 10;
})

storyWords.filter(x => {
    if(x.length > 10){
        x = 'stunning'
    } else return x;

})






//console.log(lengthCheck)
//console.log(storyWords.join(' ')) //using .join() to make the array more organised. 

