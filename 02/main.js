// function getLength(str) {
//     console.log("original string : ", str);
//     console.log("length of string : ", str.length);
// }

// getLength("Hey ashwini ")


// function findIndexOf(str,target) {
//     console.log("original string : ", str);
//     console.log("length of string : ", str.indexOf(target));
// }

// findIndexOf("hello world", "world")


// function findLastIndexOf(str,target) {
//     console.log("original string : ", str);
//     console.log("length of string : ", str.lastIndexOf(target));
// }

// findLastIndexOf("hello world world", "world")

// let ans = "ashwini paraye".substr(2,5)
// let ans2 = "ashwini paraye".slice(2,5)
// console.log(ans);
// console.log(ans2);


// const str = "hello world"
// console.log(str.replace("world", "js"));


// const value = "hi, my, name, is, ashwini"
// const words = value.split(",")
// console.log(words);


// const val = "        ashwini          paraye     "
// console.log(val.trim());



// const str = "ashwini"
// console.log(str.toUpperCase());


// const str = "ashWIni"
// console.log(str.toLowerCase());

// console.log(parseInt("23"));
// console.log(parseInt("24as"));
// console.log(parseInt("2sdfsdf3"));
// console.log(parseInt("23.34"));


// console.log(parseFloat("23.3d4"));
// console.log(parseFloat("24as"));
// console.log(parseFloat("2sdfsdf3"));
// console.log(parseFloat("23.34"));


// const initialArr = [1,2,3,4]
// initialArr.push(44)
// console.log(initialArr);

// const initialArr = [1,2,3,4]
// initialArr.pop()
// console.log(initialArr);

// const initialArr = [1,2,3,4]
// initialArr.shift()
// console.log(initialArr);

// const initialArr = [1,2,3,4]
// initialArr.unshift(0)
// console.log(initialArr);

// const initialArr = [1,2,3,4]
// const secondArr = [8, 8]
// // const val = initialArr.concat(secondArr)
// // console.log(val);
// console.log(initialArr.concat(secondArr));


// const initialArr = [1,2,3,4]
// const secondArr = [8, 8]

// for (let i = 0; i < initialArr.length; i++) {
//    console.log(initialArr[i]);
// }


// const initialArr = [1,2,3,4]
// const secondArr = [8, 8]

// function logThing(str) {
//     console.log(str);
// }

// initialArr.forEach(logThing)

// class Animal {
//     constructor(name, legCount, speaks){
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks
//     }
//     static myType (){
//         console.log("this is the static function");
//     }
//     speak (){
//         console.log("hi there I am " + this.name + " and I do " + this.speaks);
//     }
// }
// Animal.myType()

// let dog = new Animal("dog", 4, "bhow bhow") // create objects
// let cat = new Animal("cat", 4, "meow meow")

// dog.speak() //call function on object
// cat.speak()