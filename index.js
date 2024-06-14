function Dog(name, breed, show, notes, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.show = show;
    this.notes = notes;
    this.mySound = mySound;
    this.canTalk = canTalk;
    this.myGreeting = function() {
        if (this.canTalk) {
            return `Hello, my name is ${this.name} and I can talk. I am from the show ${this.show}. My character breed is ${this.breed} and ${this.notes}. ${this.mySound}.`
        } else {
            return `Woof, my name is ${this.name} and ${this.mySound} I am from the show ${this.show}. My character breed is ${this.breed} and ${this.notes}.`
        }
    };
 }

 let myDogConst = new Dog(
    "Courage",
    "Beagle",
    "Courage The Cowardly Dog",
    "I am a anthropomorphic dog who lives with a married couple of elderly farmers in the 'Middle of Nowhere'",
    "Based on my name, you might think I am a courageous dog, but I am in fact a very cowardly dog who just so happens to be brave sometimes",
    true
);

let dog2 = new Dog(
    "Scooby-Doo",
    "Great Dane",
    "Scooby-Doo, Where Are You!",
    "I am a lifelong companion of Shaggy Rogers, about a big dog and several teenage humans.",
    "Ruh-Roh! Raggy! I sound like a scaredy-cat sometimes, but I am always ready for a Scooby Snack.",
    true

);

let dog3 = new Dog(
    "Odie",
    "Unknown",
    "Garfield and Friends",
    "I am a yellow-furred, brown-eared dog in the Garfield comic strip, tv shows, and movies",
    "I can't talk!",
    false
);

for (let key in myDogConst) {
    if (typeof myDogConst[key] !== "function") {
        console.log(`${key}: ${myDogConst[key]}`)
    }
}

for (let key in dog2) {
    if (typeof dog2[key] !== "function") {
        console.log(`${key}: ${dog2[key]}`)
    }
}

for (let key in dog3) {
    if (typeof dog3[key] !== "function") {
        console.log(`${key}: ${dog3[key]}`)
    }
}

let userInput = prompt("Please select a dog (Courage, Scooby-Doo, or Odie):");

if (userInput === "Courage") {
    document.write(myDogConst.myGreeting());
} else if (userInput === "Scooby-Doo") {
    document.write(dog2.myGreeting());
} else if (userInput === "Odie") {
    document.write(dog3.myGreeting());
} else {
    alert("Error: The selected dog doesn't exist. Please select one of the 3 given dog names.");
}