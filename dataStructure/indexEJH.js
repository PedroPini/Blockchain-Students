//GitHub - options for amendment
// git commit -am "Adding Object Examples into my code" // to amend with a message
// git push origin main
// Just need to create a branch : 
// git branch -d newbranch
//And push from that


//Learning all about arrays

const GLOBAL_CHIPS_POSITION = 4;

let menuArray = ['Bread', 'Cheese', 'Chips', 'Chicken', 'Burger']
let mixArray = ['Bread', 0, true];
let mixArray2 = ['Bread', 0, true, [1,2,3]]; //array in a array

console.log(menuArray);
console.log(menuArray[0]);
console.log(menuArray[1]);
console.log(menuArray.length);


menuArray.push('Soda'); //end of the array

menuArray.unshift('Salad'); //beginning of the array

menuArray.splice(2, 0,'Pizza'); //Adding 2 in from the zero index number ie. place 3. Do not recommend splice or slice as it's difficult to understand why the number was hard-coded. 

menuArray[4] = 'Fries'; //replace chips with fries at index number 4. Often better to use global variables to allow change in positions over time. 
menuArray[GLOBAL_CHIPS_POSITION] = 'Fries';
menuArray.pop(); //removes the first item
menuArray.shift(); //removes 

console.log (menuArray);

menuArray.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});
console.log(menuArray);


//Objects

let userObject = {

    name: 'Pedro',

    age: 99,

    email: 'pedro@equinumcollege.com',

    favourite_foods: ['Burgers', 'HotDogs']

};

userObject.phone = '123-456-7890' // to add to the objects
userObject['country'] = 'Australia'; //second way to add objects. 
// //Ultimately better to choose one way of the two above and stick with it in code to allow standard to be maintained during peer review. 

userObject.age = 29;
userObject['name'] = 'Donnie';
userObject.favourite_foods[1] = 'Pizza'; // to replace using the index notation in favourite-foods. Zero based indexing. 

//Remove 
    userObject.phone = undefined;
    userObject.phone = null; //true null not a string null. 

//Delete
    delete userObject.email;
    delete userObject['favourite_foods'];

    console.log(userObject)

    for (let key in userObject) {
        if (userObject.hasOwnProperty(key)) {
            console.log(`${key}: ${userObject[key]}`);
        }
    }

    console.log(Object.entries(userObject));
    Object.entries(userObject).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });

//SET - no duplicates, used for IDs or anything that you don't want a duplicate for. 
    let trainerSet = new Set();
    trainerSet.add('Don');
    trainerSet.add('Nidup');
    trainerSet.add('Jonathon');
    trainerSet.add('Don'); // won't add the second Don. No errors thrown
    trainerSet.add('Winnie');

    console.log(trainerSet);

 // Use the if and the has to find and then replace
    if (trainerSet.has('Don')) {
        trainerSet.delete('Don'); 
        trainerSet.add('Donnie');
    }
    console.log(trainerSet);

 // remove
    trainerSet.delete('Nidup');
    console.log(trainerSet);

//LOOP
    for ( let trainer of trainerSet) {
        console.log(`Trainer: ${trainer}`);
    }
    console.log(trainerSet);

//MAP
    let translations = new Map();
    translations.set('hello', 'bonjour');
    translations.set('goodbye', 'au revoir');
    console.log(translations);
    console.log(translations.get('hello')); // use get as long as you know your key

    //add
    translations.set('thanks', 'merci');

    //set
    translations.set('hello', 'salut');

    translations.delete('goodbye');
    //translations.clear(); Do not normally use this one, will get rid of the whole set.

    translations.forEach((value, key) => {
        console.log(`${key} => ${value}`);
    });

    
    console.log(translations.get('hello'));
    console.log(translations);






//Eliza question on string null vs true null. Can also use length to check.
const stringNull = null;
if (!stringNull) {
    //console.log(true)
} else {
    //console.log(false)
}

