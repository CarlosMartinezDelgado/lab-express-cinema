const express = require('express');
const router = express.Router();

const Movie = require("../models/movie.model") //primero antes de buscar

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
  });


router.get("/movies", (req, res, next) => {
  //buscar los nombres de los movie en la base de datos (primero const con un require de movie)
  Movie.find()
  .then((response) => {
    console.log(response)
    res.render("list-movies.hbs", {response}) //(donde queremos que lo añada y en el segundo argumento le enviamos lo que queremos que incluya)
                                              // donde queremos que lo anada lo llamamos {{response}} (con el each le damos formato de que queremos que aparezca y como)
  
  })
  .catch((err) => {
    next (err)
  })
  //mostrar la vista al cliente de los nombres de movies

});

router.get("/movies/:id", (req, res, next) => {
  //buscar un nombre concreto de un movie en la base de datos (primero const con un require de movie)
  Movie.findById( req.params.id ) //desde el modelo y directamente el ID, donde este
  .then((response) => {
    console.log(response)
    res.render("movie-details.hbs", {response}) //(donde queremos que lo añada y en el segundo argumento le enviamos lo que queremos que incluya)
                                              // donde queremos que lo anada lo llamamos {{response}} (con el each le damos formato de que queremos que aparezca y como)
  
  })
  .catch((err) => {
    next (err)
  })
})


module.exports = router;
