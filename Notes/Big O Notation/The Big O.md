
## The Official Big O Intro

- Big O Notation is a way to formalize fuzzy counting.
- It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow and how that changes the runtime of the browser, the relationship between the input size and the time relative to that input.
- We won't care about the details, only the trends


## Big O Definition

- We say that an algorithm is O(f(n)){function(n)} if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.

#### **It  simply means:

- f(n) could be linear (f(n) = n) -> as n(input) scales, the runtime also scales as well.
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!


When we talk about the big O, we are actually talking about the worst case scenario, we talk about the upper bound of the runtime


Basically we are concerned of just the order of magnitude, we don't care if it's 5n or n, it's the same when we are charting it on massive chart.



Here's another example:

```
function countUpAndDown(n){
console.log("Going up!");
for(let i = 0; i< n; i++){
console.log(i);
}
console.log("At the top!\nGoing down...");
for(let j = n -1; j >= 0; j--){
console.log(j)
}
console.log("Back down. Bye!");
}

Explained in the Draw
```

Another Example:
```
// Nested Loop:
function printAllPairs(n) {
for (var i = 0; i < n; i++) {
   for (var j = 0; j < n; j++) {
   console.log(i , j)
   }
 }
}

// It print the pairs for every number, if input 5, it will print every pair from the number 0 to 5


// O(n) operation inside of an O(n) operation = O(n^2)
// As n grows, the runtime grows roughly at the rate of n^2

```



## Simplifying Big O Expressions


- When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.
- These rules of thumb are consequences of the definition of big O notation.
- Remember that we only care about the broadest big or the fuzzy overview.


   #### ***Constants Don't Matter
- O(2n)X ---- O(n)
- O(500)X ---- O(1)
- O(13n^2)X ---- O(n^2)

  #### ***Smaller Terms Don't Matter
  - O(n + 10) ---- O(n)
  - O(1000n + 50) ---- O(n)
  - O(n^2 + 5n + 8) ---- O(n^2)


  #### ***Big O Short hands
   - Analyzing complexity with big O can get complicated.
   - There are several rules of thumb that can help.
   - These rules won't ***always*** work, but are helpful starting point.

       - Arithmetic operations are constant(The computer takes roughly the same amount of time to do 2 + 2 as it does for 1 million + 2 )
       - Variable assignment is constant.
       - Accessing elements in an array (by index) or object (by key) is constant.
       - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.
       (Looping over a list or 0 to n, as n grows that loop grows, but then whatever happens inside that loop is also consequential because we have nested loops as we seen  then we ended up potentially with n^2  runtime )



``` 
function logAtLeast5 (n) {
for (var i = 1; i <= Math.max(5, n); i++) {
console.log(i);
}
}
// The Big O of this is O(n), The number 5 doesn't really matter, and because when grows, the number of operation grows in proportion with n.



function logAtMost5(n) {
 for (var i = 1; i<= Math.min(5, n); i++) {
  console.log(i)
 }
}

// The Big of this is O(1), It will only do at most 5 operations.
// And it will only goes down to 0(not lower than 0)

```