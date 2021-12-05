/*=====================================Quiz 3============================================ */

// import { func } from "prop-types"

/* 1-create a function longestWord that returns the longest word in a sentence */


const longestWord = function(str){


    /*         write your code here        */
    if(str===""){
        return "it's empty string"
    }else{

    
    let string = str.split(" ");
    let longest = 0;
    let word = null;
    string.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
   
        }
       console.log(longestWord(''));   



/* 
Examples:
longestWord('time dog cat'); // => 'time'
longestWord('we love cats'); // => 'love'
longestWord('dogs and cats are cute'); => "dogs"
longestWord(''); // => 'it's empty string'
*/


/* 2- create a function SumOddNumber that returns the sum of all od numbers inside an array of numbers */
const sumOddNumber = function(arr){


    const sumOddNumber = function(arr){


        /*         write your code here  */
        let count=0;
        for(let i=0; i<arr.length;i++){
    
            if(arr[i]%2==1){
                count += arr[i]
            }
        }
        return count
        
        
        
        }
        console.log(sumOddNumber([1, 5, 3, 4, 5]));

/*
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
SumOddNumber([2, 4, 6,0 ]) // => 0
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([-2, 0, 4, -3, 5]) // => 2
SumOddNumber([]) // => 0
*/


/* 3- create a function isPowerOfTwo that returns YES if a number is power of 2, and NO if not */
// const isPowerOfTwo = function(num){
    const isPowerOfTwo = function(num){

        /*         write your code here        */
        
        if(num === 1){
            return "YES";
         };
         if(num % 2 !== 0){
            return "NO";
         }
         return isPowerOfTwo(num / 2);
        
        }
        console.log(isPowerOfTwo(6));

// /*         write your code here        */

// if()

// }
// console.log(isPowerOfTwo());

/*
Example:
isPowerOfTwo(0) // => 'NO'
isPowerOfTwo(1) // => 'YES'
// I am sure not a typo 1 => YES
isPowerOfTwo(2) // => 'YES'
isPowerOfTwo(4) // => 'YES'
isPowerOfTwo(6) // => 'NO'
isPowerOfTwo(11) // => 'NO'
isPowerOfTwo(16) // => 'YES'
isPowerOfTwo(18) // => 'NO'
isPowerOfTwo(24) // => 'NO'
*/


/* 4- Create a function  flattenArray that takes an array of strings, numbers, and arrays. Then returns an array without an arrays inside it  */
// P.S: DO NOT USE .flat() or .flatMap() methods
const flattenArray = function(arr){
/*         write your code here        */
}

/*
Examples:
flattenArray([0, 1, 2, [3, 4]]) 
// => [0,1,2,3,4]
flattenArray(["john", 45, "nameless", [7, "sarah"], ["another", "grid", 78]]) 
// => ["john", 45, "nameless", 7, "sarah", "another", "grid", 78]
flattenArray([["this"], "is",["fine"], 88, {name:"mike", height: 180}, [3, 4]]) 
// => ["this", "is", "fine", 88, {name: "mike", height: 180}, 3, 4]
*/



/* 5- Create a function removeNotUnique that takes a string, delete any characters that are not unique from the string. */

// const removeNotUnique = function(str){
// /*         write your code here        */
// let array=[];
// for(let i=0 ; i<str.length;i++){

// }


// }
// console.log(removeNotUnique("memory"));

/* 
Examples:
removeNotUnique('memory') // => 'eory'
removeNotUnique('hello lol') // => 'he '
removeNotUnique('xyzj') // => 'xyzj'
removeNotUnique('iiii') // => ''
removeNotUnique('') // => 'it's empty'
*/

/* 6- Create a function containsElements that takes two arrays of numbers and returns true if the second array contains elements of the numbers of the first array numbers */

const containsElements = function(arr1, arr2){

/*         write your code here        */
}
console.log(containsElements([],[]));

/* 
Examples:
containsElements([12, 14, 35], [5, 4, 3, 2, 7]) // => true
containsElements([52, 21, 7, 77], [26, 7, 3]) // => false
*/