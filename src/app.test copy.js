//use the test() and expect() methods from jest
const { test, expect } = require("@jest/globals")
//sets "check" to point to the file containing test subjects
let check = require(`./app`)

//checks an array contains a value
test(`does it contain`, () =>{
    expect(check.myArray).toContain(`Stuart`)
});

//check correct value is returned
test(`does it add up`, () => {
    expect(check.addUp(2,3)).toBe(5);
});

//checks things are NOT returning a null value
test('checks value is NOT null', () =>{
    expect(check.myObject).not.toBeNull();
});

test(`checks value is true`, () =>{
    expect(check.doveFromAbove).toBe(true);
});

test(`checks value is false`, () =>{
    expect(check.crowFromBelow).toBe(false);
});

test(`checks value is true`, () =>{
    expect(check.letItBe()).toBeTruthy();
});

test(`checks value is false`, () =>{
    expect(check.letItNotBe()).toBeFalsy();
});

test(`checks value is a string`, () =>{
    expect(typeof check.meaning).toBe("string");
});

test(`checks value is a string`, () =>{
    expect(typeof check.thingToString(42)).toBe("string");
});

//run tests from terminal by entering: npm run test
