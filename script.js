"use strict";


// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше фамилия?', '');
// answers[1] = prompt('Какая у вас имя?', '');
// answers[2] = prompt('Как ваше отчество?', '');

// console.log(typeof(answers));

// ИНТЕРПОЛЯЦИЯ!!!

// const category = 'toys';

// console.log(`/https://someurl.com/${category}/5/6`);

// const user = "Ivan";

// alert(`ПИДАРАС ТЫ, ${answers}`);

// const numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }

const answers = [];

answers[0] = prompt('Ваше имя?', '');
answers[1] = prompt('Ваша фамилия?', '');

const name = "николай";

// if (answers[0] == name) {
//     alert(`ПИДАРАС ТЫ, ${answers[0]}`);
// } else if (answers[0] !== name) {
// alert(`Привет, ${answers[1]} ${answers[0]}`);
// }

(answers[0] == name) ? alert(`ПИДАРАС ТЫ, ${answers[0]}`) : alert(`Привет, ${answers[1]} ${answers[0]}`);
// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }



// const numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено фильмов довольно мало");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("произошла ошибка");
// }

// console.log(personalMovieDB);


let num = 20;

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello world");
console.log(num);

function calc(a, b) {
    return (a / b);
}

console.log(calc(4, 3));
console.log(calc(7, 3));
console.log(calc(14, 3));

function ret() {
    let num = 50;
//

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};
logger();

const calc = (a, b) => { return a + b };

// методы и св-ва:

const str = "teSt";

// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.4;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); 
console.log(parseFloat(test));