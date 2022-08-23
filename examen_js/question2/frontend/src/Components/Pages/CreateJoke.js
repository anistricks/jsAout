import Joke from "../Domain/Joke";
import JokeLibrary from "../Domain/JokeLibrary";
//import { Redirect } from "../Router/Router";


const jokePage = `
<div class="text-center">
  <h3>Jokes</h3>

  <p>Create your Own jokes</p>

  <form class="px-5">
            <div class="mb-3">
              <label for="joke">Enter  a joke</label>
              <input
                class="form-control"
                type="text"
                name="joke"
                id="joke"
                required
              />
            </div>
            
            <input type="submit" class="btn btn-primary" value="Add Joke" />
    </form>
   
  
</div>`;

const myJokeLibrary = new JokeLibrary();

const JokePage = async () => {
  
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = jokePage;
  const myForm = document.querySelector("form");
 

  myForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    let newJoke = new Joke(
      joke.value
    );

    const jokesAdded = await myJokeLibrary.addJoke(newJoke);
    
    // test to see if our collection is protected against change in objects
    newJoke.joke = "External change to object after added to collection";
   
    // clear form inputs
    myForm.reset();
    //Redirect("/jokes");
    
   
  });
};

export default JokePage;
