const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

//I can copy an object
const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ["Sports", "Cooking"];
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => "Hobby: " + hobby));
console.log(hobbies);


//I can add to a const because I am changing what is being looked at.
hobbies.push("Programming");

//One way to copy an array
const copiedArray = hobbies.slice();
console.log(copiedArray);

//Another way to copy using the spread operator
const copiedArray2 = [...hobbies];
console.log(copiedArray2);

console.log(hobbies);

person.greet();

//Rest operator
const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, "Hello World"));