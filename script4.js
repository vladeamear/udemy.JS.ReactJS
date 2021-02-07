'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function(){
        let i = 0;
        while (i != 2){
            let nextMovie = prompt("Один из последних просмотренных фильмов?", ""),
                ratingMovie = "";
            if ((nextMovie.length < 50) && (nextMovie.length != 0) && (nextMovie != null)){
                ratingMovie = prompt("На сколько оцените его?", "");
                personalMovieDB.movies[nextMovie] = ratingMovie;
                i++;
            }
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30){
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка!" + personalMovieDB.count);
            // .start();
        }
    },
    checkPrivateness: function(){
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB.movies);
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while (genre == '' || genre == null){
                genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            }
            personalMovieDB.genres[i-1] = genre;
        }
        personalMovieDB.genres.forEach(function(item,i){
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        (!personalMovieDB.privat) ? personalMovieDB.privat = true : personalMovieDB.privat = false;
    }

};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.checkPrivateness();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);