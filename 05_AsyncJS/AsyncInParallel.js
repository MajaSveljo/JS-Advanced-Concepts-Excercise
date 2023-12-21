// const results = [];
// fetch(`${BASE_URL}/1`).then((res) => {
//   results.push(res);
//   console.log("REQUEST 1 FINISHED!");
// });

// fetch(`${BASE_URL}/2`).then((res) => {
//   results.push(res);
//   console.log("REQUEST 2 FINISHED!");
// });

// fetch(`${BASE_URL}/3`).then((res) => {
//   results.push(res);
//   console.log("REQUEST 3 FINISHED!");
// });

// console.log("WAITING FOR REQUESTS TO COMPLETE");

// const results = [];
// async function getPokemon1() {
//   const res = await fetch(`${BASE_URL}/1`);
//   results.push(res);
//   console.log("REQUEST 1 FINISHED!");
// }

// async function getPokemon2() {
//   const res = await fetch(`${BASE_URL}/2`);
//   results.push(res);
//   console.log("REQUEST 2 FINISHED!");
// }

// async function getPokemon3() {
//   const res = await fetch(`${BASE_URL}/3`);
//   results.push(res);
//   console.log("REQUEST 3 FINISHED!");
// }

// getPokemon1();
// getPokemon2();
// getPokemon3();

// console.log("WAITING FOR REQUESTS TO COMPLETE");

const results = [];
async function getPokemon(num) {
  const res = await fetch(`${BASE_URL}/${num}`);
  results.push(res);
  console.log(`REQUEST ${num} FINISHED!`);
}

getPokemon(1);
getPokemon(2);
getPokemon(3);
