'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    let nextMovie = prompt("Один из последних просмотренных фильмов?", ""),
        ratingMovie = "";

    if (nextMovie.length < 50 && nextMovie != '' && nextMovie != null){
        ratingMovie = prompt("На сколько оцените его?", "");
        personalMovieDB.movies[nextMovie] = ratingMovie;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
    alert("Вы киноман");
} else {
    alert("Произошла ошибка!");
}

console.log(personalMovieDB);