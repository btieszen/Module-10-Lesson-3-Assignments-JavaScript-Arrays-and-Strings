//1. Exploring Array Manipulation in JavaScript
//Task 1: Adding and Removing Elements

console.log("Part 1 Task1");
let fruits = ['apple', 'banana', 'orange'];

//push
console.log("Original List:",fruits);
let fruit=fruits.push('mango');
console.log("Updated list using push:",fruits);

//pop
let fruitsNew = ['apple', 'banana', 'orange'];
console.log("Original List:",fruitsNew);
let newFruit = fruitsNew.pop();
console.log("Item Removed:",newFruit);
console.log("Updated list after pop:",fruitsNew)
console.log("");

//sort
console.log("Part 1 Task 2");
let numbers = [3, 1, 5, 2, 4];
console.log("original list:",numbers);
num= numbers.sort();
console.log("Sorted List:",num);
console.log('');

//map
console.log("Part 1 Task 3");
let numbers1 = [3, 1, 5, 2, 4];
console.log("Original list:",numbers1);
let doubled = numbers1.map(num => num*2);
console.log("List after map,double each number:",doubled);
console.log('');

//filter even numbers
let numbers2 =  [3, 1, 5, 2, 4];
console.log("Original list:",numbers2);
evens = numbers2.filter(function(x) {
    return x % 2 === 0;
 })
console.log("Even numbers:",evens);
console.log('');

//reduce method
let numbers3 =  [3, 1, 5, 2, 4];
let total =numbers3.reduce ((acc,curr)=> acc+curr,0);
console.log("The total of all numbers is:",total);


