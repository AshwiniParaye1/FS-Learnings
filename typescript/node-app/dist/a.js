"use strict";
function isLegal(user) {
    return user.filter((u) => u.age >= 18);
}
console.log(isLegal([
    { firstname: "User1", lastname: "abc", age: 13 },
    { firstname: "User2", lastname: "xyz", age: 18 },
    { firstname: "User3", lastname: "sdfkbwe", age: 22 },
]));
