class JokeLibrary {
  async addJoke(joke) {    
    if (!joke) return false;
    try {
      console.log("Film within try:", joke)
      const options = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(joke), // body data type must match "Content-Type" header
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log("options:", options);
      const response = await fetch("/api/jokes", options); // fetch return a promise => we wait for the response

      if (!response.ok) {
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      const newJoke = await response.json(); // json() returns a promise => we wait for the data
      console.log("Film added:", newJoke);
      return true;
    } catch (err) {
      console.error("addFilm::error: ", err);
    }
  }

  async getHtmlTable() {
    try {
      const response = await fetch("/api/jokes"); // fetch return a promise => we wait for the response

      if (!response.ok) {
        // status code was not 200, error status code
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      const jokes = await response.json(); // json() returns a promise => we wait for the data

      let htmlTable = `<div class="table-responsive p-5">
      
    <table class="table">
  <thead>
    <tr>
    
      <th class="col" >Joke</th>
      </tr>
  </thead>
  <tbody>`;
      if (jokes && jokes.length > 0) {
        jokes.forEach((element) => {
          htmlTable += "<tr>";
          // Deal with Title Col (create hyperlink from title & link)
          htmlTable += `<td>
        <div  > ${element.joke}</div>      
      </td>`;
          
        });
       
      }
      htmlTable += `</tbody>
</table>
</div>`;

      return htmlTable;
    } catch (error) {
      console.error("getHTMLTable::error: ", error);
    }
  }
  async getOne() {
    try {
      const response = await fetch("/api/jokes"); // fetch return a promise => we wait for the response

      if (!response.ok) {
        // status code was not 200, error status code
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      const jokes = await response.json(); // json() returns a promise => we wait for the data
      let  jokesCategory = [];
      let htmlTable = `<div class="table-responsive p-5">
      
    <table class="table">
  <thead>
    <tr>
    
      <th class="col" >Joke</th>
      </tr>
  </thead>
  <tbody>`;
      if (jokes && jokes.length > 0) {
        jokes.forEach((element) => {
          jokesCategory.push(element);
          
        });
       
      }
      htmlTable += `</tbody>
</table>
</div>`;

      let indice =Math.floor(Math.random()*(jokesCategory.length));
      return jokesCategory[indice].joke;
    } catch (error) {
      console.error("getHTMLTable::error: ", error);
    }
  }


 
}

export default JokeLibrary;
