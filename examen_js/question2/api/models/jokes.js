"use strict";
const { parse, serialize } = require("../utils/json");

const jsonDbPath = __dirname + "/../data/jokes.json";




    const defaultJokes = [
      {"id":1,"joke":"A SQL statement walks into a bar and sees two tables. It approaches, and asks may I join you?"
      },
      {"id": 2,
        "joke":"o	Have a great weekend! I hope your code behaves the same on Monday as it did on Friday."
      },
      {"id": 3,
        "joke":"o	Oysters hate to give away their pearls because they are shellfish"
    }];

    class Jokes {
      constructor(dbPath = jsonDbPath, defaultItems = defaultJokes) {
        this.jsonDbPath = dbPath;
        this.defaultJokes = defaultItems;
      }
    
      getNextId() {
        const jokes = parse(this.jsonDbPath, this.defaultJokes);
        let nextId;
        if (jokes.length === 0) nextId = 1;
        else nextId = jokes[jokes.length - 1].id + 1;
    
        return nextId;
      }
    
      /**
       * Returns all resources
       * @param {predicate} function to be used to filter all resources
       * @returns {Array} Array of resources
       */
      getAll(filterPredicate) {
        let jokes;
        jokes = parse(this.jsonDbPath, this.defaultJokes);
    
        if (filterPredicate) return jokes.filter(filterPredicate);
        else return jokes;
      }
    
      /**
       * Returns the resource identified by id
       * @param {number} id - id of the resource to find
       * @returns {object} the resource found or undefined if the id does not lead to a resource
       */
      getOne(id) {
        const jokes = parse(this.jsonDbPath, this.defaultJokes);
        const foundIndex = jokes.findIndex((item) => item.id == id);
        if (foundIndex < 0) return;
    
        return jokes[foundIndex];
      }
    
      /**
       * Add a resource in the DB and returns the added resource (containing a new id)
       * @param {object} body - it contains all required data to create a ressource
       * @returns {object} the resource that was created (with id)
       */
    
      addOne(body) {
        const jokes = parse(this.jsonDbPath, this.defaultJokes);
    
        // add new resource
        const newResource = {
          id: this.getNextId(),
          ...body, // shallow copy with the spread operator
        };
    
        jokes.push(newResource);
        serialize(this.jsonDbPath, jokes);
        return newResource;
      }
    
      /**
       * Delete a resource in the DB and return the deleted resource
       * @param {number} id - id of the resource to be deleted
       * @returns {object} the resource that was deleted or undefined if the delete operation failed
       */
      deleteOne(id) {
        const jokes = parse(this.jsonDbPath, this.defaultJokes);
        const foundIndex = jokes.findIndex((item) => item.id == id);
        if (foundIndex < 0) return;
        const itemRemoved = jokes.splice(foundIndex, 1);
        serialize(this.jsonDbPath, jokes);
    
        return itemRemoved[0];
      }
    
      /**
       * Update a resource in the DB and return the updated resource
       * @param {number} id - id of the resource to be updated
       * @param {object} body - it contains all the data to be updated
       * @returns {object} the updated resource or undefined if the update operation failed
       */
      updateOne(id, body) {
        const jokes = parse(this.jsonDbPath, this.defaultJokes);
        const foundIndex = jokes.findIndex((item) => item.id == id);
        if (foundIndex < 0) return;
        // create a new object based on the existing resource - prior to modification -
        // and the properties requested to be updated (those in the body of the request)
        // use of the spread operator to create a shallow copy and repl
        const updatedResource = { ...jokes[foundIndex], ...body };
        // replace the resource found at index : (or use splice)
        jokes[foundIndex] = updatedResource;
    
        serialize(this.jsonDbPath, jokes);
        return updatedResource;
      }
    }
    
    module.exports = { Jokes };