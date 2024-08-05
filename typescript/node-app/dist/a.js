"use strict";
const user = {
    firstname: "Ashwini",
    lastname: "Paraye",
    email: "XQlPn@example.com",
    age: 13,
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const result2 = isLegal({
    firstname: "Ashwini",
    lastname: "Paraye",
    email: "XQlPn@example.com",
    age: 18,
});
console.log(result2);
