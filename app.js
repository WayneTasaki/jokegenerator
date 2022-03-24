// let url = "https://v2.jokeapi.dev/joke/Any?safe-mode"

// window.onload = function () {

// }

async function getJoke() {
  let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
  let res = await fetch(url);
  let joke = await res.json();

  console.log(joke)


  let jokeCategory = joke.category;
  let jokeType = joke.type;
  let jokeSetup = joke.setup;
  let jokeDelivery = joke.delivery
  let jokeSingle = joke.joke

  if (jokeSingle) {
    document.getElementById('joke-box').innerText = jokeSingle;
  } else {
    document.getElementById('joke-setup').innerText = jokeSetup;
    document.getElementById('joke-delivery').innerText = jokeDelivery;
  }
}
getJoke();

const button = document.getElementById('button');
button.addEventListener('click', getJoke)