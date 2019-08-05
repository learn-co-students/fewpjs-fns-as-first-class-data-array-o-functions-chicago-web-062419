//Each function should return the string that it creates. 
//Create a `String`, `console.log()` it, and return that `String`.

/*console.log("Leash Byron the poodle");
console.log("Walk to the park with Byron the poodle");
console.log("Throw the frisbee for Byron the poodle");
console.log("Walk home with Byron the poodle");
console.log("Unleash Byron the poodle");

* `wakeDog`
* `leashDog`
* `walkToPark`
* `throwFrisbee`
* `walkHome`
* `unleashDog`
*/

function wakeDog(dogName, dogBreed) {
    let string = `Wake ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}
// wakeDog("fluffy", "lab")

function leashDog(dogName, dogBreed) {
    let string = `Leash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function walkToPark(dogName, dogBreed) {
    let string = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function throwFrisbee(dogName, dogBreed) {
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function walkHome(dogName, dogBreed) {
    let string = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

function unleashDog(dogName, dogBreed) {
    let string = `Unleash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
// an `Array` all of the functions we've just defined.

//exerciseDog` will take in two arguments:
// * `dogName`
// * `dogBreed`

function exerciseDog(dogName, dogBreed) {
    let output = []
    for (let i = 0; i < routine.length; i++) {
       output.push(routine[i](dogName, dogBreed));
    }
    return output
};