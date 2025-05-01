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
    console.log(`Index ${index}: ${item}`);
  });
console.log(menuArray);