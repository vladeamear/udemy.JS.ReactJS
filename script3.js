'use strict';

// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms(){
//     for(let i = 0; i < 2; i++){
//         let nextMovie = prompt("Один из последних просмотренных фильмов?", ""),
//             ratingMovie = "";
    
//         if (nextMovie.length < 50 && nextMovie != '' && nextMovie != null){
//             ratingMovie = prompt("На сколько оцените его?", "");
//             personalMovieDB.movies[nextMovie] = ratingMovie;
//         } else {
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10){
//         alert("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         alert("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30){
//         alert("Вы киноман");
//     } else {
//         alert("Произошла ошибка!");
//     }
// }

// detectPersonalLevel();

// function checkPrivateness(){
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB.movies);
//     }
// }

// checkPrivateness();

// function writeYourGenres(){
//     for (let i = 1; i <= 3; i++){
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
//         personalMovieDB.genres[i-1] = genre;
//     }
// }

// writeYourGenres();

// console.log(personalMovieDB);