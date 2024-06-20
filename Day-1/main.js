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

const allUsers = [
{
    fName: "Ashwini",
    gender: "female",
    metadata: {
        age: 20,
        address: "xyzefe"
    }
},
{
    fName: "Mayuri",
    gender: "female",
    metadata: {
        age: 21,
        address: "xyzeferfe"
    }
},
{
    fName: "Akshay",
    gender: "male",
    metadata: {
        age: 25,
        address: "xyz"
    }
}
]

for (let i = 0; i < allUsers.length; i++) {
   if (allUsers[i]["metadata"]["age"] > 22) {
    console.log(allUsers[i]["fName"]);
   }
    
}