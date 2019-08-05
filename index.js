function wakeDog(dogName, dogBreed) {
  let string = `Wake ${dogName} the ${dogBreed}`;
  return string;
}

function leashDog(dogName, dogBreed) {
  let string = `Leash ${dogName} the ${dogBreed}`;
  return string;
}

var walkToPark = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}