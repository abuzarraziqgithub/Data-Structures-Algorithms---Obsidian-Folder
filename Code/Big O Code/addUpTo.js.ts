
/* Different Implementations for the same code: */

// Pseudo Code:
AddUp Function(10){
    Number = 0;

    Iterate 10 Times: From 0 to 10
    {
        0 + 1 = 1
        1 + 2 = 3
        2 + 3 = 5
        3 + 4 = 7
        4 + 5..... 10 => 55
    }

    Return Number = 55;
}


// Impl 1:
function addUpTo(n){
let total = 0;
for (let i = 1; i <= n; i++){
    total += i;
}
return total;
}


// Pseudo Code:
AddUp Function(10){
    
    Return
     10 * (10 + 1) / 2
     10 * 11 / 2
     110 / 2
     55
}

// Impl 2:
function addUpTo(n){
    return n * (n + 1) / 2;
}



// Added Performance API for checking the execution time of the code:
function addUpTo(n){
    let total = 0;

    for(let i = 1; i<= n; i++){
        total += i;
    }
    return total
}

let t1 = Performance.now();
addUpTo(10000000);
let t2 = Performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)





