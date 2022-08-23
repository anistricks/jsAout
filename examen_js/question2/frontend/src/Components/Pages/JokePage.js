import Joke from "../Domain/Joke";
import JokeLibrary from "../Domain/JokeLibrary";

const jokePage = `
<div class="text-center">
  <h3>Jokes</h3>
  <div id="JokeBouge"></div>
 
   <div id="printJokes"></div>
  
</div>`;

const myJokeLibrary = new JokeLibrary();

const JokePage = async () => {
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = jokePage;
  const printJokes = document.getElementById("printJokes");
  printJokes.innerHTML = await myJokeLibrary.getHtmlTable();
  const JokeBouge = document.getElementById("JokeBouge");
 
 // setTimeout(function () { location.reload(true); }, 1000);



 const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
 let n=1;
 while(n>0){
  
    
    JokeBouge.innerHTML = await myJokeLibrary.getOne();
    await wait(2000);
 
}

 






};

export default JokePage;
