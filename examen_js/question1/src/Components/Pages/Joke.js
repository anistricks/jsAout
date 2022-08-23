import Pun from "../../img/Pun.jpg";
import Christmas from "../../img/Christmas.jpg";
import Programming from "../../img/Programming.jpg";
import { Redirect } from "../Router/Router";
import {DEFAULT_JOKES} from '../../utils/jokes';
const CATEGORY_OPTIONS = ['Pun', 'Programming', 'Christmas'];
const Joke = () => { 
const pageDiv = document.querySelector("#page");


const picture =  `
<div class="text-center">
 
 
    <img  id="pun" src="${Pun}" alt="Pun"   width="600" height="700" />

  <img id="prog" src="${Programming}" alt="Christmas" width="600" height="700" />

<img id="chris" src="${Christmas}" alt="Programming" width="600" height="700" />

</div>


 
` ;

pageDiv.innerHTML=picture;

let pun =document.querySelector("#pun");

const onPunClick=()=>{
  pageDiv.innerHTML = "";
  const form = document.createElement("form");
  form.className = "row mx-0";
  const text1 = document.createElement("div");
  let jokesCategory=selectCategory("Pun");
  let index =Math.floor(Math.random()*(jokesCategory.length));
  let jokeQuestion=jokesCategory[index].question;
  text1.className="alert alert-primary";
  text1.innerText=jokeQuestion
  
   let answer=document.createElement("div");
  answer.className="alert alert-danger";
  answer.innerText=jokesCategory[index].answer;
 //setTimeout(() => { NewPage();}, 3000);
 const submit = document.createElement("input");
   submit.value = "Go back to HomePage";
   submit.className = "btn btn-secondary mt-3";
   submit.addEventListener("click", () => {
    Redirect("/joke");
  });
 

 form.appendChild(text1);
 setTimeout(() => { form.appendChild(answer);}, 2000);
 setTimeout(() => {  form.appendChild(submit);}, 3000);
 pageDiv.appendChild(form);

}





let prog =document.querySelector("#prog");

  const onProgClick=()=>{
    pageDiv.innerHTML = "";
    const form = document.createElement("form");
    form.className = "row mx-0";
    const text1 = document.createElement("div");
    let jokesCategory=selectCategory("Programming");
    let index =Math.floor(Math.random()*(jokesCategory.length));
    let jokeQuestion=jokesCategory[index].question;
    text1.className="alert alert-primary";
    text1.innerText=jokeQuestion
    
     let answer=document.createElement("div");
    answer.className="alert alert-danger";
    answer.innerText=jokesCategory[index].answer;
   //setTimeout(() => { NewPage();}, 3000);
   const submit = document.createElement("input");
     submit.value = "Go back to HomePage";
     submit.className = "btn btn-secondary mt-3";
     submit.addEventListener("click", () => {
      Redirect("/joke");
    });
   
  
   form.appendChild(text1);
   setTimeout(() => { form.appendChild(answer);}, 2000);
   setTimeout(() => {  form.appendChild(submit);}, 3000);
   pageDiv.appendChild(form);
  
  }

let christ =document.querySelector("#chris");


  const OnChristmasClick=()=>{
    pageDiv.innerHTML = "";
    const form = document.createElement("form");
    form.className = "row mx-0";
    const text1 = document.createElement("div");
    let jokesCategory=selectCategory("Christmas");
    let index =Math.floor(Math.random()*(jokesCategory.length));
    let jokeQuestion=jokesCategory[index].question;
    text1.className="alert alert-primary";
    text1.innerText=jokeQuestion
    
     let answer=document.createElement("div");
    answer.className="alert alert-danger";
    answer.innerText=jokesCategory[index].answer;
   //setTimeout(() => { NewPage();}, 3000);
   const submit = document.createElement("input");
     submit.value = "Go back to HomePage";
     submit.className = "btn btn-secondary mt-3";
     submit.addEventListener("click", () => {
      Redirect("/joke");
    });
   
  
   form.appendChild(text1);
   setTimeout(() => { form.appendChild(answer);}, 2000);
   setTimeout(() => {  form.appendChild(submit);}, 3000);
   pageDiv.appendChild(form);
  
  }

const selectCategory = (category) => {
  let jokesCategory = [];
  DEFAULT_JOKES.forEach(joke => {
      if (joke.category === category) {
        jokesCategory.push(joke);
      }
  });
  return jokesCategory;
}

pun.addEventListener("click", onPunClick);
prog.addEventListener("click", onProgClick);
christ.addEventListener("click", OnChristmasClick);






}
export default Joke;