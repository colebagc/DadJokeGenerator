// Start the page by getting a random joke to display
getRandom();

// Declare some variables
const joke = document.querySelector('.joke');
const jokeID = document.querySelector('.jokeID');
const btnNext = document.getElementById('btnNext');
const jokeParagraph = document.querySelector('.joke p');
const jokeIDParagraph = document.querySelector('.jokeID p');

// When the seach button is clicked, search for the specific joke
btnSearch.addEventListener('click', searchForJoke);

// When the get random joke button is clicked, get another random joke to display
btnNext.addEventListener('click',getRandom);

// Function to retrieve a certian joke from icanhazdadjoke.com and show it on the webpage
async function searchForJoke(){
  const clear = ' ';
  const mainURL = 'https://icanhazdadjoke.com/j/';
  const jokeID = document.getElementById('searchBox').value;
  const fetchURL = mainURL + jokeID;
  const jokeRes = await fetch(fetchURL, {
    headers: {
      'Accept': 'application/json'
    }
  });
  const resJson = await jokeRes.json();
  if (resJson.joke != undefined) {
    jokeParagraph.innerHTML = resJson.joke;
    jokeIDParagraph.innerHTML = resJson.id;
  } else {
    jokeParagraph.innerHTML = "Error: There was no joke matching that JokeID";
    jokeIDParagraph.innerHTML = clear;
  }

}

// Function to retrieve a random joke from icanhazdadjoke.com and show it on the webpage
async function getRandom(){
  const jokeRes = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const resJson = await jokeRes.json();
  jokeParagraph.innerHTML = resJson.joke;
  jokeIDParagraph.innerHTML = resJson.id;
}