const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const lotsOfFetchCalls = [
  fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
];

Promise.race(lotsOfFetchCalls)
  .then((winner) => {
    console.log(winner);
  })
  .catch((err) => console.log(err));
