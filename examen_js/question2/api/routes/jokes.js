var express = require("express");
var router = express.Router();
const { Jokes } = require("../models/jokes");
const jokeModel = new Jokes();

// GET /Jokes : read all the Jokes, filtered by minimum-duration if the query param exists
router.get("/", function (req, res) {
  // NB : in JS, variables cannot contain '-'
  console.log("req.params", req.query);
 
  const jokes = jokeModel.getAll();
  return res.json(jokeModel.getAll());
  
});

// GET /Jokes/{id} : Get a joke from its id in the menu
router.get("/:id", function (req, res) {
  const joke = jokeModel.getOne(req.params.id);
  // Send an error code '404 Not Found' if the joke was not found
  if (!joke) return res.sendStatus(404);

  return res.json(joke);
});

// POST /Jokes : add a joke
router.post("/", function (req, res) {
  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    !req.body.joke ||
    !req.body.joke.trim() 
    
  )
    return res.sendStatus(400);

  const joke = jokeModel.addOne(req.body);

  return res.json(joke);
});

// DELETE /Jokes/{i} : delete a joke
router.delete("/:id", function (req, res) {
  const joke = jokeModel.deleteOne(req.params.id);
  // Send an error code '404 Not Found' if the joke was not found
  if (!joke) return res.sendStatus(404);
  return res.json(joke);
});

// PUT /Jokes/{id} : update a joke identified by its id
router.put("/:id", function (req, res) {
  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body ||
    !req.body.joke ||
    !req.body.joke.trim() 
  )
    return res.status(400).end();

  const joke = jokeModel.updateOne(req.params.id, req.body);
  // Send an error code 'Not Found' if the joke was not found :
  if (!joke) return res.sendStatus(404);
  return res.json(joke);
});

module.exports = router;
