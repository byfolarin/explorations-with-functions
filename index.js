// Write a function that takes two parameters (numbers) and returns their sum.

function sum (num1, num2){
    return num1 + num2
}

console.log(sum(1,2));

// 2. Create an array containing the names of your five favorite fruits. Then, use a loop to print each fruit's name.

var fruits = ["banana", "Orange", "apple", "pear", "mango"];

for (let i = 0 ; i < fruits.length; i++){
    console.log(fruits[i])
};

// 3. Write a function that checks whether a given number is even or odd. (Hint: Use the modulo operator %.)

function even(num){
    if (num % 2 === 0){
        console.log(num, ": This is even");
    } else {
        console.log(num, ": This is odd");
    }
};
even(129);

// 4. Create an array containing five numbers. Write a function that takes this array as a parameter and returns the sum of its elements.



console.log(eval([1, 204, 17, 18, 25].join('+')));


// 5. Write a program that asks the user for their age and prints whether they are a minor (under 18), an adult (18 or older), or a senior (65 or older).


let user = 24;

switch (true) {
    case (user < 18):
        console.log("Minor");
        break;
    case (user >= 18 && user < 65):
        console.log("Adult");
        break;
    default:
        console.log("Senior");
}


// 6.Create an array of numbers. Write a function that takes this array as a parameter and returns the largest number in the array.


function newArray(arr){

    let Largest = arr [0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > Largest){
            Largest = arr [i];
        }
    }
    return Largest;
}

let arry = [9, 8, 69, 24, 18];

console.log(newArray(arry));



// 7.Write a program that generates a random number between 1 and 10 and asks the user to guess it. The program should indicate whether the guess is too high, too low, or correct.

function guessWork(guess){
    
 let randomNumber = Math.round((Math.random() * 10 + 1));

if ( guess === randomNumber ){
    console.log("Your guess " , guess , " is correct")
} else if ( guess < randomNumber ){
    console.log("Your guess " , guess , " is too low")
} else {
    console.log("Your guess " , guess , " is too high")
}   }

guessWork(7);

// 8. Write a function that takes a string as input and returns the reverse of that string.

// Arrays can split.split

function newStuff(input){
    var newArray = input.split("");
    var reversedArray = newArray.reverse(); 
    var reversedString = reversedArray.join("");
    return reversedString; 
}

let type = "GARUBA";
let reverse = newStuff(type);

console.log(reverse);

// 9. Create an array containing the names of your three favorite books. Write a program that prints the length of each book title.


function book (bookTitles){
for (let i = 0; i < bookTitles.length ; i++){
    let titleLength = bookTitles[i].length;
    console.log(`Length of "${bookTitles[i]}": ${titleLength}`);
}
}


let favoriteBooks  = ["Times", "Younda", "Idan"];
book(favoriteBooks);









