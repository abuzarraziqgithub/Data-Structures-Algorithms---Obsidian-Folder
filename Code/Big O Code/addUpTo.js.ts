
/* Different Implementations for the same code: */

// Pseudo Code:
AddUp Function(10){
    Number = 0;

    Iterate 10 Times: From 0 to 10
    {
        0 + 1
        1 + 2
        2 + 3
        3 + 4
        4 + 5..... 10 => 
    }
}

// Impl 1:
function addUpTo(n){
let total = 0;
for (let i = 1; i <= n; i++){
    total += i;
}
return total;
}


// Impl 2:
function addUpTo(n){
    return n * (n + 1) / 2;
}

// Which one is better?