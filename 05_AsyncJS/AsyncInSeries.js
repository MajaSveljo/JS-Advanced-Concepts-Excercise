// const results = [];
// fetch(`${BASE_URL}/1`)
//   .then((res) => {
//     results.push(res);
//     console.log("REQUEST 1 FINISHED!");
//     return fetch(`${BASE_URL}/2`);
//   })
//   .then((res) => {
//     results.push(res);
//     console.log("REQUEST 2 FINISHED!");
//     return fetch(`${BASE_URL}/3`);
//   })
//   .then((res) => {
//     results.push(res);
//     console.log("REQUEST 3 FINISHED!");
//   });

async function get3PokemonInSequence() {
  const res1 = await fetch(`${BASE_URL}/1`);
  console.log("REQUEST 1 FINISHED!");
  const res2 = await fetch(`${BASE_URL}/2`);
  console.log("REQUEST 2 FINISHED!");
  const res3 = await fetch(`${BASE_URL}/3`);
  console.log("REQUEST 3 FINISHED!");
  const results = [res1, res2, res3];
}
