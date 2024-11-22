Logarithms

- We've encountered some of the most common complexities: O(1), O(n), O(n^2).
- Sometimes big O expressions involve more complex mathematical expressions.
- One that appears more often than you might like is the logarithm.



### What is a Logarithm:
- It is the inverse of Exponentiation. log and exponent are a pair
```
log base 2 (8) = 3 
// It means 2 to what power equals 8 ? => 2^3 = 8.

log base 2 (value) = exponent => 2^exponent = value.

Just like 1 / 2 = 0.5 or 2 * 0.5 = 1

 we'll omit the 2 
 log === log base 2
```

This isn't a math course, so here's a rule of thumb.
- The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.
```
Logarithm Examples:
    8                          25
 /2                        /2
    4                          12.5
 /2                        /2   
    2                          6.25
 /2                        /2
    1                          3.125
log(8) = 3                 /2
                              1.5625
                          /2  
                            0.78125
                            (the value is between 4 and 5)

						  log(25) =~ 4.64
```

Graph of Big O:
[[time-complexity_0.jpg]]


 What O Logarithms for:
 - Certain searching algorithms have logarithmic time complexity.
 - Efficient sorting algorithms involve logarithms.
 - Recursion sometimes involves logarithmic space complexity (not time).
