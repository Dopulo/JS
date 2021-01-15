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

if (answers[0] == name) {
    alert(`ПИДАРАС ТЫ, ${answers[0]}`);
} else if (answers[0] !== name) {
alert(`Привет, ${answers[1]} ${answers[0]}`);
}

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