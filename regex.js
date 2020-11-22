const myStr = "My name is tripto, my age is 21, my fav color is green";


const searchQuery = /tripto/gm; //this is the search query, here we search for "base"

const isPresent = searchQuery.test(myStr); //here we check , if present then true, else false

console.log(isPresent);