
//create a function when user inputs a company name then clicks the search button that search query is then entered in our fetch statement

const url = 'https://api.openbrewerydb.org/breweries/search?query=virginia';
const list = document.createDocumentFragment();
const ul = document.getElementById('breweries');

  document.getElementById('searchBtn').onclick = function startCall(){apiCall()};

  function apiCall(){
    //let myInput = document.getElementById('myInput').value;

    fetch(url)
    .then(response => {
      return response.json()})
    .then(data => {
        console.log(data);
      })
    };
