
## **Space Complexity

 So far, we've been focusing on **Time  Complexity**:
 - How can we analyze the **runtime** of an algorithm as the size of the inputs increases?


  We can also use big O notation to analyze **Space complexity**:
- How much additional memory do we need to allocate in order to run the code in our algorithm?


- We gonna ignore that where when n grows, the size of the input itself which is n going to grow.

### **What about the inputs?
#### Auxiliary Space:
- Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs, we care about the algorithm itself not about the input.

- Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity(Space taken up/ required by the algorithm).

#### **Space Complexity in JavaScript:
- Most primitives (Booleans, numbers, undefined, null) are constant space.
- Strings require O(n) space (where n is the string length).
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).
 (Means the O is linear for Strings and reference type data) => Strings, Objects & Arrays(keys, length) = O(n).
 
```
function sum(arr){
let total = 0;
for (let i = 0; i < arr.length; i++){
 total += arr[i];
}
return total;
}

// sum([1,2,3]) => 6 => total number
// Space complexity for this is n(1).
```


Another Example:
```
function double(arr){
let newArr = [];
for (let i = 0; i< arr.length; i++) {
newArr.push(2 * arr[i]);
}
return newArr;
}


// double[1,2,3] => [2,4,6] => Created a new array of items.
// Space complexity for this is O(n)

// As the array length grows(as the input approach the infinity)
// The input array getting longer directly and proportion to the length of the input;
// If the array is 50 items, we are storing 50 items in new array and returning that.
```