const myStr = "My name is tripto, my age is 21, my fav color is green";
const songStr = "i have a mp3 player to play adat.mp3, ondhokar.mp3, waka.mp3node regex.js";


const searchQuery = /tripto/gm; //this is the search query, here we search for "base"

const isPresent = searchQuery.test(myStr); //here we check , if present then true, else false

console.log(isPresent);


// grouping 

const myName = /My name is ([a-z]+)/gm;

const mySong = /(\w+)\.mp3/gmi;

const getMyName = myName.exec(myStr);
let getMySong = mySong.exec(songStr); //have to be let

console.log(getMyName); //will return an object
console.log(getMyName[1]); // will return the name

console.log(getMySong);//will return an object
console.log(getMySong[1]);// will return the name

//we can use while loop to search through all the matches
while(getMySong){
    const songName = getMySong[1];
    console.log(songName);
    getMySong = mySong.exec(songStr);
}
