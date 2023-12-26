const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

Promise.any([
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
])
  .then((firstToFinish) =>
    console.log("THIS IS THE FIRST RESOLVED VALUE!", firstToFinish)
  )
  .catch((e) => {
    console.log("OH NO, this means some promise was rejected", e);
  });
