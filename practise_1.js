// const keyword for the Object literal

const dist =
{
    person : "a man or women",
    animal : "a living thing",
    plant : "a living thing",
    nice : "a good person",
    bad : "a bad person"
}

console.log(dist);

// it point to the same object but not create a new object(it change the inside of the object)
dist["best"] = "a best person";
console.log(dist);
