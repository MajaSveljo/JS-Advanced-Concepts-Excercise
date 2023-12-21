const lotsOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
];

// Promise.all(lotsOfFetchCalls)
//   .then((results) => {
//     console.log("Promise.all() is done and resolved!");
//     console.log(results);
//   })
//   .catch((e) => {
//     console.log("ONE of the promises was rejected");
//     console.log(e);
//   });

async function getLotsOfPokemon() {
  try {
    const results = await Promise.all(lotsOfFetchCalls);
    console.log("Promise.all() is done and resolved!");
    console.log(results);
  } catch (e) {
    console.log("ONE of the promises was rejected");
    console.log(e);
  }
}
