const Joi = require('joi');
const express = require('express')
const app = new express();
app.use(express.json())

const movies = [{
        name: 'The Dark Knight',
        genre: 'Action',
        rating: 9
    },
    {
        name: 'Inglorious Bastards',
        genre: 'Thriller',
        rating: 8
    },
    {
        name: 'Superbad',
        genre: 'Comedy',
        rating: 8
    }
]

app.get('/api/movies', (req, res) => {
    res.status(200).send(movies);
})

app.get('/api/movies/:name', (req, res) => {
    const movie = validateMovie(req.params.name);
    // if (!movie) return res.status(404).send('404 Movie Not Found');
    if (!movie) return errorMessage(res);
    res.status(200).send(movie);
})

app.post('/api/movies/add', (req, res) => {
    const isPostValid = validatePostRequest(req.body)
    if (isPostValid.error) return res.status(400).send(isPostValid.error.details[0].message);
    movies.push(req.body);
    res.status(200).send(isPostValid);
})

app.put('/api/movies/:name', (req, res) => {
    const movie = validateMovie(req.params.name);
    if (!movie) return res.status(404).send('404 Movie Not Found');
    // if (!movie) return errorMessage(res);
    res.status(200).send(movie);
})

const validateMovie = name => movies.find(m => m.name === name);

const validatePostRequest = movie => {
    const schema = {
        name: Joi.string().min(2).required(),
        genre: Joi.string().min(3).required(),
        rating: Joi.number().min(0).max(10).required()
    }
    return Joi.validate(movie, schema)
};

const errorMessage = (res) => res.status(404).send('404 Movie Not Found');

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Live at http://localhost:${port}/api/movies`));