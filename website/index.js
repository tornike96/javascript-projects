// const person = {
//   name: 'Kyle',
//   job: 'Developer',
//   hobbies: ['Surfing', 'Baking', 'Bowling'],
// };

// const txt = document.querySelector('.test');

// txt.innerHTML = `<ul>${person.hobbies
//   .map((item) => {
//     return `<li>${item}</li>`;
//   })
//   .join('')}</ul>`;

// const author = 'some author';
// const statement = 'some statement';

// const highlight = (text, ...args) => {
//   const awesomeText = text.map((item, index) => {
//     return `${item} <strong class="blue">${args[index] || ''}</strong>`;
//   });
//   return awesomeText.join('');
// };
// const quote = highlight`here is the ${statement} by ${author} and it could not be more true.`;
// console.log(quote);

// const result = document.querySelector('.result');
// result.innerHTML = quote;

// const multiply = (num1, num2) => num1 * num2;

// const myNum = multiply(3, 5);
// console.log(myNum);

// const object = () => ({ name: 'Tornike', age: 20 });
// console.log(object());

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const moreThanTwo = numbers.filter((item) => item > 2);
// console.log(moreThanTwo);

// const btn = document.querySelector('.btn');
// btn.textContent = 'CLICK ME';

// btn.addEventListener('click', () => {
//   console.log(this);
//   btn.style.color = 'red';
// });

// const fruits = ['banana', 'apple', 'kiwi', 'orange'];

// const [banana, adam, greenFruit, apple] = fruits;
// console.log(banana, greenFruit, apple, adam);
// const fav = fruits[3];
// fruits[3] = 'Peach';
// console.log(fav);

// let a = 1;
// let b = 2;
// let c;

// // c = a;
// // a = b;
// // b = c;
// // console.log(a, b);

// c = b;
// b = a;
// a = c;
// console.log(a, b);

// // let [first, second, third, forth] = [1, 3, 5, 7];
// // console.log(first, second);

// // [first, second] = [second, first];

// // console.log(first, second);

// const tornike = {
//   first: 'tornike',
//   last: 'ekizashvili',
//   city: 'tbilisi',
//   siblings: {
//     sister: 'teona',
//   },
// };

// const {
//   first: firstName,
//   last,
//   city,
//   siblings: { sister: favoriteSibling },
// } = tornike;
// console.log(firstName, last, city, favoriteSibling);

// function getParameters({ first, last, city, siblings: { sister } }) {
//   console.log(first, last, city, sister);
// }

// getParameters(tornike);

// const repeat = (person, amount = 10) => person.repeat(amount);

// const people = repeat('Tornike ');
// console.log(people);

// const fruits = ['apple', 'orange', 'banana', 'peach'];
// const longName = 'John Smith Pepper III';
// let shortName = '';

// for (const letter of longName) {
//   // console.log(letter);
//   if (letter === ' ') {
//     continue;
//   } else {
//     shortName += letter;
//   }
// }

// console.log(shortName);

// for (const fruit of fruits) {
//   if (fruit === 'banana') {
//     continue;
//   } else {
//     console.log(fruit);
//   }
// }

// const headings = document.querySelectorAll('h1');
// const result = document.querySelector('.result');

// const text = [...headings]
//   .map((item) => `<span>${item.textContent}</span>`)
//   .join('');

// result.innerHTML = text;

// console.log(text);

// const numbers = [2, 3, 123, 5, 12345, 48];

// const maxNum = Math.max(...numbers);
// console.log(maxNum);

// const minNum = Math.min(...numbers);
// console.log(minNum);

// const tornike = ['Tornike', 'Ekizashvili'];

// const sayHello = (name, lastName) => console.log(`Hello, ${name} ${lastName}`);

// console.log(...tornike);
// sayHello(...tornike);

// const person = {
//   name: 'Tornike',
//   lastName: 'Ekizashvili',
//   job: 'Developer',
// };

// const { lastName, ...rest } = person;
// console.log(lastName, rest);

// const getAverage = (name, ...scores) => {
//   console.log(name);
//   console.log(scores);
//   let total = 0;
//   for (const score of scores) {
//     total += score;
//   }
//   console.log(`${name}'s average score is ${total / scores.length}`);
// };

// getAverage('tornike', 23, 46, 9, 43, 98);

// const result = Object.entries(person);

// const newResult = result.map((item) => {
//   const [first, second] = item;
//   return first;
// });

// console.log(newResult);

// for (const item of result) {
//   const [first, second] = item;
//   console.log(first, second);
// }

// const unique = new Set();

// const random = 'third';

// unique.add('first');
// unique.add('second');
// unique.add(random);
// unique.add('first');
// unique.add('first');

// const deleteItem = unique.delete('second');
// console.log(deleteItem);
// unique.clear();
// const isValue = unique.has('third');
// console.log(isValue);
// console.log(unique);
