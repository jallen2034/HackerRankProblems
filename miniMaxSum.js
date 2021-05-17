// https://www.hackerrank.com/challenges/mini-max-sum/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // counting variables for min and max 
    let min = 0
    let max = 0
    
    // clone original array
    const arrClone = [...arr]
    
    // Write your code here
    arrClone.sort((a, b) => a - b); // For ascending sort
    arr.sort((a, b) => b - a); // For descending sort
    
    // calculate min numbers
    for (let i = 0; i < arrClone.length - 1; i++) {
       min += arrClone[i]
    }
    
    // calculate max numbers
    for (let i = 0; i < arr.length - 1; i++) {
       max += arr[i]
    }
    
    // output
    console.log(`${min} ${max}`)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
