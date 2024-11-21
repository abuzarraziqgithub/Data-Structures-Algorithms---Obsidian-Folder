
- Imagine we have multiple Implementations(Code) of the same function.
- How can we determine which one is the best (and in what sense)?



- It's important to have a precise vocabulary to talk about how our code performs.

  Suppose we want to write a function that calculates the sum of all numbers from 1 up to number n.
```
//Code - 1:

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

//Code - 2:

function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

### **What  does better mean?

- Is it the code that is **Faster?
- Less memory-intensive or Code that **take less memory?
- Is it More **Readable?


## **Let's Focus on Faster Code

- we can use **performance.now()** method for checking the run time of the code.
   ***performance is a web API that provides access to performance-related information for the current page.
- Performance.now() return and represents the number of milliseconds.

 Performance used In Code:
 ```
 // For Code 1:
 function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
```


## **The Problem With Time

- Different machines will record different times
- The same machine will record different times due to other load.
- For fast algorithms, speed measurements may not be precise enough?

##  **If not time, then what?

- Rather than counting seconds, which are so variable....
- Let's count the number of simple operations the computer has to perform! (*See Drawings)


## **Counting is hard!

- Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2.
- But regardless of the exact number, the number of operations grows roughly proportionally with n.
- If n doubles, the number of operations will also roughly double.


 That's it for today, See you tomorrow! 💌
 Topics: 
  - Introducing  Big O.
  - Big O Expressions
  - Big O Short-hands
  - Examples
  - Analyzing Big O Graph
  - Space complexity
  