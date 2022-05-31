// app.js
'use-strict';
//1.
function max(x,y){
    if(x> y){
        return x;
    }else{
        return y;
    }
}

console.log(max(-2,5));

//2.
function maxOfThree(x,y,z){

    if(x > y && x>z){
        return x;
    } else if(y> x && y> z){
        return y;
    }else{
        return z;
    }

}
console.log(maxOfThree(55,93,89));


function maxOfThree2(x,y,z){
       let res=  x>z?( x>y ? x: y):(z>y? z:y) // Conditional
       return res;
}


console.log(maxOfThree2(55,93,89));

//3.
function isVowel(ch){

    vowelRegex = ['a','e','i','o','u','A','E','I','O','U'];
    if(vowelRegex.includes(ch)){
        return true;
    }
    else{
        return false;
    }

}

console.log(isVowel('i'));
function isVowel2(ch){

    ch.toLowerCase();
    if(ch == 'a' || ch == 'e'||ch == 'i'||ch == 'o'||ch == 'u'||ch == 'a' ){
        return true;
    }else{
        return false;
    }
}

console.log(isVowel2('i'));

//4.
function sum(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}

function multiply(arr){
    let total = 1;
    for (let index = 0; index < arr.length; index++) {
        total *= arr[index];
    }
    return total;
}
console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));

//5.
function reverseString(ch){

    return ch.split('').reverse().join('');
}
console.log(reverseString('jag tester'));

//6.
//A spread parameter must always be the last argument, else it will try an arror
function findLongestWord(...words){
    let longestWordLength = -Infinity;
    for(let index=0; index <words.length;index++){
        if(words[index].length > longestWordLength){
            longestWordLength= words[index].length;
        }
    }
    return longestWordLength;
}
console.log(findLongestWord('army', 'soldier', 'quarter', 'colonel'));

//7.
function filterLongWords(arr,len){
    let result = [];
    for(let index=0; index< arr.length;index++){
        if(arr[index].length > len){
            result.push(arr[index]);
        }
    }
    return result;
}
console.log(filterLongWords(['army', 'soldier', 'quarter', 'colonel'], 6));

//8.

function computeSumOfSquares(arr){
    let result = arr.map((x)=>x*x);
    return result;
}
console.log(computeSumOfSquares([1,2,3,4,5]));

//9.
function printOddNumbersOnly(arr){
    return arr.filter(x=>x%2 !=0);
}
console.log(printOddNumbersOnly([1,2,3,4,5]));

//10.
function computeSumOfSquaresOfEvensOnly(arr){
  return  arr.filter(x=>x%2==0).map(x=>x*x).reduce((x,y)=>x+y,0);
}
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

//11.
function sum(arr){
   return arr.reduce((x,y)=>x+y,0);
}

function multiply(arr){
    return arr.reduce((x,y)=>x*y,1);
}
console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));

//12.
function findSecondBiggest(arr){
    let biggest = -Infinity;
    let secBiggest = -Infinity;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > biggest){
            secBiggest = biggest;
            biggest = arr[index];
        } 
        
    }
    return secBiggest;
}
console.log(findSecondBiggest([1,3,4,2,4,6,7]));

//13.
function printFibo(n,a,b){
    let sum = 0;
    let result = [];
    if(n == 1){
        return a + " ";
}
    if(n==2){
        return a + ","+ b;
    }
    result.push(a);
    result.push(b);
    for (let index = 2; index < n; index++) {
        sum = a+b;
        a = b;
        b = sum;
        result.push(sum);
        
    }
    return result.toString();
}
console.log(printFibo(6,0,1));

