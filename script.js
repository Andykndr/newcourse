let numberOfFilms;

const start = () => {
  numberOfFilms = prompt('How much?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('How much?', '');
  }
};
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Witch film do you?', '');
    const b = prompt('Rate this film?', '');

    if (
      a != null &&
      b != null &&
      a != '' &&
      b != '' &&
      a.length < 50 &&
      b.length < 50
    ) {
      personalMovieDB.movies[a] = b;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count < 31 && personalMovieDB.count > 10) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Kinoooo');
  } else {
    console.log('error');
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
