# Regex 101



**<a href="https://regex101.com/" target="_blank">✔Check this site</a>**

**<a href="https://www.youtube.com/watch?v=909NfO1St0A" target="_blank">✔Youtube</a>**


## Basics -

### 🔰 /searchQueary/gm ###

1. **g modifier**: global. All matches (don't return after first match)

2. **m modifier**: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)

3. **i modifier**: case insensitive

``` javascript
const myStr = "My name is tripto, my age is 21, my fav color is green";
const searchQuery = /tripto/gm; //this is the search query, here we search for "tripto"
const isPresent = searchQuery.test(myStr); //here we check , if present then true, else false

console.log(isPresent); //will return true

`````

### 🔰 /^searchQueary$/ ###

1. ^ means the string has to start with that string
2. $ means the string ends with that string


``` javascript
const myStr = "My name is tripto, my age is 21, my fav color is green";
const searchQuery = /^name/gm; //this is the search query, here we search for "My", charcter sensitive here
const isPresent = searchQuery.test(myStr); //here we check , if present then true, else false

console.log(isPresent); //will return false, it'll be true if it was "My"

`````

### 🔰 /searchQueary[a-z]+/ ###

1. **[a-z]**: anything within a to z
2. **[0-9]**: any number
3. **[A-Z]**: anything within A to Z

``` javascript
const myStr = "My name is tripto, my age is 21, my fav color is green";
const searchQuery = /name is [a-z]+/gm; //this is the search query, here we search for "name is plus anything within a - z, so tripto will be also counted"
const isPresent = searchQuery.test(myStr); //here we check , if present then true, else false

console.log(isPresent); //will return true

`````

### 🔰 /searchQueary?/ ###

1. **?** : presnets optional charcter say name?, here e is the optional charcter, tri?pto, here i is the optional charcter 


``` javascript
const myStr = "My name is tripto, my age is 21, my fav color is green";
const searchQuery = /tri?pto/gm; //this is the search query, here we search for "name is plus anything within a - z, so tripto will be also counted"
const isPresent = searchQuery.test(myStr); //here we check , if present then true, else false

console.log(isPresent); //will return true, even trpto will return true

````
### 🔰 /[0-9]{1, 3}/ : 

{1, 3} matches the characters {1, 3} literally (case insensitive)

### 🔰 /[0-9]{2}/ : 

{2} Quantifier — Matches exactly 2 times 

### 🔰 /\d+/ : 

\d+ matches a digit (equal to [0-9])

### 🔰 /\w/ : 

\w matches any word character (equal to [a-zA-Z0-9_]) e.g 'a', 'x'

### 🔰 /\w+/ : 

\w+ matches any word character (equal to [a-zA-Z0-9_]) e.g 'apple'