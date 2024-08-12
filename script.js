//Exercise 1: Applying Array.prototype.map()
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((num) => {
    return num * 2;
  });

console.log(nums2);

//Exercise 2: Array destructuring
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping)
console.log(secondTopping)

//Exercise 3: Destructuring objects
const car = {
    make: 'Audi',
    model: 'q5',
  };

const { make, model } = car;

console.log(make)
console.log(model)

//Exercise 4: Applying the spread operator on arrays
const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings)

//Exercise 5: Applying the spread operator on objects
const myCar = {...car}

myCar.model = 'q7'

console.log(car)
console.log(myCar)

//Exercise 6: Dynamic keys in objects
const propertyName = 'email';

const userProfile = {
    [propertyName]: 'matt1005@yahoo.com'
}

console.log(userProfile);

//Exercise 7: Import and Export

//Exercise 8: Default Parameters
function petSentence(noun = 'cat', adjective = 'white') {
    console.log('This ' + noun + ' is ' + adjective);
}

petSentence();
petSentence('dog');
petSentence('dog', 'blue');

//Exercise 9: Ternary operator
let pizza = 'tasty';

pizza === 'tasty' ? console.log('Yum') : console.log('Yuck')

//Exercise 10: Boolean gates
// 1. SET LANGUAGE

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

let LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);
// 2. SET WEBSITE THEME

const userSavedTheme = null;

let USER_THEME = userSavedTheme || 'light';
//let USER_THEME = userSavedTheme && 'light';

console.log('User theme setting:', USER_THEME);

//Exercise 11: Optional chaining
const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age;
  
  console.log(cat);