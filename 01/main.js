// console.log("hello world!")

// const a = 1;
// a = 2
// console.log(a)

// let fName = "ashwini"
// let age = 26
// let isLearning = true

// console.log("my name is : " + fName + " and age is " +age)
// if (isLearning){
//     console.log(fName + " is Learning")
// } else {
//     console.log(fName + " is not Learning")
// }

// let answer = 0

// for (i=0; i<=10; i = i+1){
//     answer = answer + i
// }
// console.log(answer)

// let fname = "ashwini"
// let lname = "paraye"
// let isFemale = true

// console.log("hello " + fname +" " +lname)
// if (isFemale) {
//     console.log(fname + " is female")   
// } else {
//     console.log(fname + " is male")   
// }


// let num = 0
// let count = 0
// for (let i = 0; i <= 5; i++) {
//     count = count + i
// }

// console.log(count)

// let ages = [ 20,21,22,23,24,15,16,26,28,30]
// let numberOfPeople = ages.length

// for (let i=0; i<numberOfPeople; i++){
//     if (ages[i] % 2 === 0) {
//         console.log(ages[i])
//     }
// }

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array>largest) {
//         var largest=array[i];
//     }
// }

// console.log(largest);


// var arr = [3, 6, 2, 546, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > largest ) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

// const users1 = {
//     fName: "Ashwini",
//     gender: "female"
// }

// console.log(users1["fName"]);

// const allUsers = [
// {
//     fName: "Ashwini",
//     gender: "female",
//     metadata: {
//         age: 20,
//         address: "xyzefe"
//     }
// },
// {
//     fName: "Mayuri",
//     gender: "female",
//     metadata: {
//         age: 21,
//         address: "xyzeferfe"
//     }
// },
// {
//     fName: "Akshay",
//     gender: "male",
//     metadata: {
//         age: 25,
//         address: "xyz"
//     }
// }
// ]

// for (let i = 0; i < allUsers.length; i++) {
//    if (allUsers[i]["metadata"]["age"] > 22) {
//     console.log(allUsers[i]["fName"]);
//    }
    
// }


// function findSum(num1, num2) {
//     return num1 + num2;
// }

// const value = findSum(2,4)
// console.log(value);


// let sum = 0;

// for (let i = 0; i < 10000000000000000; i++) {
//     sum = sum + i;
    
// }

// console.log(sum);


// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2
//     fnToCall(result)
// }

// function displayResult(data) {
//     console.log("Result of the sum is: " + data);
// }
// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// const ans = sum(2,2,displayResultPassive)


// function calculateArithmetic(a,b, type) {
//     if(type == "sum"){
//         return a+b
//     }
//     if(type == "minus"){
//         return a-b
//     }
// }

// const value = calculateArithmetic(1,2,"minus")
// console.log(value);


// function calculateArithmetic(a,b, finalFn) {
//     const ans = finalFn(a,b)
//     return ans
// }

// function sum(a,b) {
//     return a + b
// }

// const value = calculateArithmetic(4,2, sum)
// console.log(value);


//setTimeout

// function greet() {
//    console.log("hello");
// }
// function greetAlien() {
//    console.log("hello alien");
// }

// setInterval(greetAlien, 2000)
// setTimeout(greetAlien, 2000)

// function counter() {
//     for (let i = 30; i >= 0; i--) {
//         setTimeout(function() {
//           console.log(i);
//         }, (30 - i) * 1000);
//       }
      
// }

// counter()

// Function to display the current time
// function displayClock() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     const timeString = `${hours}:${minutes}:${seconds}`;

//     console.clear();
//     console.log(timeString);
// }

// setInterval(displayClock, 1000);

// displayClock();
