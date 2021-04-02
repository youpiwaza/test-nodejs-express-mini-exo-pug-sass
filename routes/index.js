var express = require('express');
var router = express.Router();

let fs = require('fs');
console.log(fs)

/* GET home page. */
router.get('/', function(req, res, next) {
  // Je passe index.pug en html, en lui passant la variable title
  
  res.render('index', { MONSUPERTITLE: 'Rotten Strawberry2' });
});

module.exports = router;


let film1 = { actors: ["Bob", "Patrick", "Sandy"], category: "Drama", date: "21 mars 2021", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque voluptatem voluptatum qui placeat quo.", image: {src: "images/films/film1.jpg"}, realisator: "Bob le réal", title: {text: "Mon premier super film",link: "#"}}
let film2 = { actors: ["Nic cage"], category: "Action", date: "2 avril 2019", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque voluptatem voluptatum qui placeat quo.", image: {src: "images/films/film2.jpg"}, realisator: "Michel le réal", title: {text: "Nic cage le retour",link: "#"}}
let film3 = { actors: ["Steven seagal"], category: "Comédie", date: "18 juillet 1997", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque voluptatem voluptatum qui placeat quo.", image: {src: "images/films/film3.jpg"}, realisator: "Patrick le réal", title: {text: "Steven Action pack",link: "#"}}
let films = [film1, film2, film3]

function afficherFilm(monFilm) {
  console.log(monFilm.title.text);
  console.log(monFilm.title.link);
  console.log('---');
}

// afficherFilm(film1);
// afficherFilm(film2);
// afficherFilm(film3);

films.forEach(film => afficherFilm(film));