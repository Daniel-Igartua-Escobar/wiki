const { Router } = require('express');
const router = Router();

const movies = require('../mocks/movies.json')

router.get('/', (req, res) => {
  res.json(movies);
})

router.post('/', (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = {...req.body, id};
    movies.push(newMovie);
    console.log(newMovie);
    res.json(movies);
  } else {
    res.status(500).json({error: 'Wrong Request'});
  }
})

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    movies.forEach((movie, i) => {
      if (movie.id == id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.json(movies);
  } else {
    res.status(500).json({error: 'Wrong Request'});
  }

})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  movies.forEach((movie, i) => {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  });
  res.json(movies);
})

module.exports = router;