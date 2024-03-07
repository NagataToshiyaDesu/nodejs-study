'use strict'
let number = process.argv[2] || 0

function factorial(number){
    if(number <= 0){
        return 1;
    }
    return number *factorial(number-1);
}
console.log("10の階乗は3628800で、結果は"+factorial(number)+"でした。");