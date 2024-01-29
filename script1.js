
//***************************************ARROW FUNCTIONS********************* */

//Print odd elements from an array

var arr = [1,2,3,4,5,6,7];

var oddNum =(a)=>{
    var odd=[]
 for(let i of a){
    if(i%2!==0){
        odd.push(i)
    }
 }
 return odd
}
console.log(oddNum(arr))

// Convert all the strings to title caps in a string array

var string = ["apple", "bat", "cat"];

var titleCaps =(str)=>{
    var titleCapsStr=[]
    for(let i of str){
    var a = i.split("")
    a[0]=a[0].toUpperCase()
    titleCapsStr.push(a.join(""))
    
    }
    return titleCapsStr;
}
console.log(titleCaps(string))

//Sum of all numbers in an array

var arr1=[1,4,3,5,8];
var sum=0;
var sumOfArr=(arr1)=>{
    for(let val of arr1){
        
        sum+=val
        
    }
    return sum
}
console.log(sumOfArr(arr1))

//print the prime numbers

var primeArr =[2,4,3,6,7,9,23];
var primeNum = (extractPrime)=>{
    var prime=[]
for(let i of extractPrime){
    if(i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0){
       prime.push(i)
    }
}
 return prime

}
console.log(primeNum(primeArr))

//Return all palindrome in an array

var palindrome =["malayalam","cat","pop"];

var palindromicArray = (a)=>{
   var palindromeArray =[]
   for(let i of a){
        let j = i.split("").reverse().join("")
        if(i==j){
            palindromeArray.push(i)

        }
   }
   return palindromeArray
}
console.log(palindromicArray(palindrome))