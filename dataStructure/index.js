//Arrays
const GLOBAL_CHIPS_POSITION = 4;
let menuArray = ['Bread', 'Cheese', 'Chips', 'Chicken', 'Burger']
let mixArray = ['Bread', 0, true];
let mixArray2 = ['Bread', 0, true, [1,2,3]];

menuArray.push('Soda');
menuArray.unshift('Salad');
menuArray.splice(2, 0, 'Pizza');
menuArray[GLOBAL_CHIPS_POSITION] = 'Fries';
menuArray.pop();
menuArray.shift();

menuArray.forEach((item, index) => {
   // console.log(`Index ${index}: ${item}`);
  });


//Objects
let userObject = {

    name: 'Pedro',
    
    age: 99,
    
    email: 'pedro@equinimcollege.com',
    
    favourite_foods: ['Burgers', 'Hot dogs']
    
    };
    //add
    userObject.phone = '123-456-7890'; 
    userObject['country'] = 'Australia'; 
    //set-change
    userObject.age = 29;
    userObject['name'] = 'Donnie'; 
    userObject.favourite_foods[1] = 'Pizza'; 

    //Remove
    userObject.phone = undefined; 
    userObject.phone = null | 'null'; 

    //DELETE
    delete userObject.email;                     // removes the email key
    delete userObject['favourite_foods'];  
    // console.log(userObject)

    for (let key in userObject) {
        if (userObject.hasOwnProperty(key)) {
        //   console.log(`${key}: ${userObject[key]}`);
        }
      }

    // console.log(Object.entries(userObject));
      Object.entries(userObject).forEach(([key, value]) => {
        // console.log(`${key}: ${value}`);
      });




//Eliza question
    const stringNull = null;
    if (!stringNull) {
       //console.log(true)
    } else {
        //console.log(false)
    }


//SET
let trainerSet = new Set();
trainerSet.add('Don');

trainerSet.add('Nidup');

trainerSet.add('Jonathan');

trainerSet.add('Don');


//ADD
trainerSet.add('Winnie');

//SET
if (trainerSet.has('Don')) {
    trainerSet.delete('Don');
    trainerSet.add('Donnie');
  }

//REMOVE
trainerSet.delete('Nidup');

//LOOP
for (let trainer of trainerSet) {
    // console.log(`Trainer: ${trainer}`);
  }
// console.log(trainerSet);

//MAP
let translations = new Map();

translations.set('hello', 'bonjour');
translations.set('goodbye', 'au revoir');

//ADD
translations.set('thanks', 'merci'); 

//SET
translations.set('hello', 'salut'); 

translations.delete('goodbye'); 
// translations.clear();  

translations.forEach((value, key) => {
    console.log(`${key} => ${value}`);
  });
  
// console.log(translations.get('hello'));
// console.log(translations);