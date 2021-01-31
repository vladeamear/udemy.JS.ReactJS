'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastSeenMovie1 = prompt("Один из последних просмотренных фильмов?", ""),
    ratingLSM1 = prompt("На сколько оцените его?", ""),
    lastSeenMovie2 = prompt("Один из последних просмотренных фильмов?", ""),
    ratingLSM2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastSeenMovie1] = ratingLSM1;
personalMovieDB.movies[lastSeenMovie2] = ratingLSM2;

console.log(personalMovieDB);

//second commit 
