var christmasMovies = ['Один дома', 'Эльф', 'Рождественские каникулы', 'Подарок на рождество'];
var movies = [];
for (var j = 0; j < 2; j++) {
    movies += christmasMovies[j];
}
console.log(movies);

var blindChrMovies = christmasMovies[2]+movies;

alert(blindChrMovies);