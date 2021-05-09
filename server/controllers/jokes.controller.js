const Joke = require('../models/jokes.model')
//var random = require('mongoose-random');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => res.json({ jokes: allDaJokes }))
        .catch((err) => res.json({ message: 'Algo anda mal!', error: err }))
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
        .catch((err) =>
            res.json({ message: 'Something went wrong1', error: err }),
        )
}

module.exports.findRandomJoke = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            let jokes = allJokes
            let count = jokes.length
            return res.json({
                joke: allJokes[Math.floor(Math.random() * count)],
            })
        })
        .catch((err) =>
            res.json({ message: 'Something went wrong', error: err }),
        )
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
        .catch((err) =>
            res.json({ message: 'Something went wrong', error: err }),
        )
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) =>
            res.json({ message: 'Something went wrong', error: err }),
        )
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) =>
            res.json({ message: 'Something went wrong', error: err }),
        )
}
