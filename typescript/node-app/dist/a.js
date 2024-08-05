"use strict";
function runAfterOneSecond(fn) {
    setTimeout(fn, 1000 * 2);
}
runAfterOneSecond(function () {
    console.log("hi there after 2 seconds");
    return 5;
});
