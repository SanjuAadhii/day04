
//*****************IIFE****************************** */

//Print odd elements from an array

var arr = [1,2,3,4,5,6,7];

(function(a){
    var odd=[]
 for(let i of a){
    if(i%2!==0){
        odd.push(i)
    }
 }
 console.log(odd)
})(arr)

// Convert all the strings to title caps in a string array

var string = ["apple", "bat", "cat"];

(function(str){
    var titleCapsStr=[]
    for(let i of str){
    var a = i.split("")
    a[0]=a[0].toUpperCase()
    titleCapsStr.push(a.join(""))
    
    }
    console.log(titleCapsStr)
})(string)


//Sum of all numbers in an array

var arr1=[1,4,3,5,8];
var sum=0;
(function(arr1){
    for(let val of arr1){
        
        sum+=val
        
    }
    console.log(sum)
})(arr1)

//print the prime numbers

var primeArr =[2,4,3,6,7,9,23];
(function(extractPrime){
    var prime=[]
for(let i of extractPrime){
    if(i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0){
       prime.push(i)
    }
}
console.log(prime)

})(primeArr)

//Return all palindrome in an array

var palindrome =["malayalam","cat","pop"];

(function(a){
   var palindromeArray =[]
   for(let i of a){
        let j = i.split("").reverse().join("")
        if(i==j){
            palindromeArray.push(i)

        }
   }
   console.log(palindromeArray)
})(palindrome)

//Return median of two sorted array
var a1 =[1,2,3,4,5];
var a2 =[6,7,8,9,10];

(function(b1,b2){
    var c1 =[...b1,...b2];
    var median,mid;
    if(c1.length%2==0){
        mid = c1.length/2;
        median = c1[mid-1]
    }
    else{
        mid =Math.ceil(c1.length/2)
        median =c1[mid]
    }
    console.log(median)
})(a1,a2)

//Remove all duplicates in an array

var mixedArr =[1,2,1,3,4,5,5];
(function(mixArr){
    var set =new Set(mixArr)
    console.log(set)

})(mixedArr)

//Rotate an array by k times

var properArr = [1, 2, 3, 4, 5];
var k = 3;

(function (arr, rotations) {
    while (rotations > 0) {
        var temp = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = temp;
        rotations--;
    }
    console.log(arr);
})(properArr, k);