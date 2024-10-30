// Core Primitives: number, string, boolean
let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = false;

// Types: array, objetcs
let hoobies: string[];
hoobies = ['Sports', 'Cooking'];

let person: {name: string, age: number};
person = {
    name: 'Max',
    age: 32
}

let people: {name: string, age: number}[];

// Type inference
let course = 'React - Typescript guide';
//course = 12; This gives an error since ts inferes the type base on the type defined before

// Union types
let numbers: string | number = '3';

// Type alias
type Person = {name: string, age: number};
let personB: Person;

// Function & types (inference also works here)
function add(a: number, b:number): number {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics
function insertAtBeggining<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeggining(demoArray, -1);