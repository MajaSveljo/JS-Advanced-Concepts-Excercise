const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

// fetch(`${BASE_URL}/1`)
//   .then((res1) => {
//     console.log("RESPONSE 1 ", res1);
//     fetch(`${BASE_URL}/2`)
//       .then((res2) => {
//         console.log("RESPONSE 2", res2);
//         fetch(`${BASE_URL}/3`)
//           .then((res3) => {
//             console.log("RESPONSE 3", res3);
//             fetch(`${BASE_URL}/4`)
//               .then((res4) => {
//                 console.log("RESPONSE 4", res4);
//               })
//               .catch((err) => console.log("ERR!", err));
//           })
//           .catch((err) => console.log("ERR!", err));
//       })
//       .catch((err) => console.log("ERR!", err));
//   })
//   .catch((err) => console.log("ERR!", err));

// fetch(`${BASE_URL}/1`)
//   .then((res1) => {
//     console.log("RESPONSE 1 ", res1);
//     return fetch(`${BASE_URL}/2`);
//   })
//   .then((res2) => {
//     console.log("RESPONSE 2 ", res2);
//     return fetch(`http://nope.nope`);
//   })
//   .then((res3) => {
//     console.log("RESPONSE 3 ", res3);
//     return fetch(`${BASE_URL}/4`);
//   })
//   .then((res4) => {
//     console.log("RESPONSE 4 ", res4);
//   })
//   .catch((err) => {
//     console.log("IN THE CATCH! Error: ", err);
//   });

// Make request to pokemon/1
// then make request to pokemon/2
// then make request to pokemon/3
// then make request to pokemon/4

// async function getFirstPokemon() {
//   const result = await fetch(`${BASE_URL}/1`);
//   console.log(result);
// }

// async function getFirstPokemon() {
//   const result = await fetch(`${BASE_URL}/1`);
//   console.log(result);
// }

// async function getFourPokemon() {
//   try {
//     const res1 = await fetch(`${BASE_URL}/1`);
//     console.log(res1);

//     const res2 = await fetch(`${BASE_URL}/2`);
//     console.log(res2);

//     const res3 = await fetch(`http://nope.nope`);
//     console.log(res3);

//     const res4 = await fetch(`${BASE_URL}/4`);
//     console.log(res4);
//   } catch (e) {
//     console.log("FETCH WENT WRONG!");
//     console.log(e);
//   }
// }

// async function fetchFakeWebsite() {
//   try {
//     const res1 = await fetch(`http://nope.nope`);
//     console.log(res1);
//   } catch (e) {
//     console.log("SOMETHING WENT WRONG...");
//     console.log(e);
//   }
// }

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

// const results = [];
// async function getPokemon(num) {
//   const res = await fetch(`${BASE_URL}/${num}`);
//   results.push(res);
//   console.log(`REQUEST ${num} FINISHED!`);
// }

// getPokemon(1);
// getPokemon(2);
// getPokemon(3);

// const lotsOfFetchCalls = [
//   fetch(`${BASE_URL}/1`),
//   fetch(`${BASE_URL}/2`),
//   fetch(`${BASE_URL}/3`),
//   fetch(`${BASE_URL}/4`),
//   fetch(`${BASE_URL}/5`),
//   fetch(`${BASE_URL}/6`),
// ];

// Promise.all(lotsOfFetchCalls)
//   .then((results) => {
//     console.log("Promise.all() is done and resolved!");
//     console.log(results);
//   })
//   .catch((e) => {
//     console.log("ONE of the promises was rejected");
//     console.log(e);
//   });

// async function getLotsOfPokemon() {
//   try {
//     const results = await Promise.all(lotsOfFetchCalls);
//     console.log("Promise.all() is done and resolved!");
//     console.log(results);
//   } catch (e) {
//     console.log("ONE of the promises was rejected");
//     console.log(e);
//   }
// }

// async function allSettledDemo() {
//   const GITHUB_BASE_URL = "https://api.github.com";

//   let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);

//   let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);

//   let badUrl = fetch("http://definitelynotarealsite.com");

//   let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);

//   let anotherbadUrl = fetch("http://definitelynotarealsite.com");

//   let results = await Promise.allSettled([
//     elieP,
//     joelP,
//     badUrl,
//     coltP,
//     anotherbadUrl,
//   ]);

//   console.log(results);
//   const fulfilled = results.filter((r) => r.status === "fulfilled");
//   const rejected = results.filter((r) => r.status === "rejected");
//   console.log(fulfilled);
//   console.log(rejected);
// }

// const lotsOfFetchCalls = [
//   fetch(`http://nope.nope`),
//   fetch(`${BASE_URL}/2`),
//   fetch(`${BASE_URL}/3`),
//   fetch(`${BASE_URL}/4`),
//   fetch(`${BASE_URL}/5`),
//   fetch(`${BASE_URL}/6`),
// ];

// Promise.race(lotsOfFetchCalls)
//   .then((winner) => {
//     console.log(winner);
//   })
//   .catch((err) => console.log(err));

// function wait(duration) {
//   const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("this is the resolved value!");
//     }, duration);
//   });
//   return p;
// }

// function randomRejectResolve() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve("Pickles");
//       } else {
//         reject("Error!!!!!");
//       }
//     }, 2000);
//   });
// }

// async function demo() {
//   console.log("hi");
//   const val = await wait(2000);
//   console.log("there");
//   console.log(val);
// }

// wait(5000).then((val) => console.log(val));

// randomRejectResolve()
//   .then((val) => {
//     console.log("INSIDE first .then() callback ", val);
//     return randomRejectResolve();
//   })
//   .then((val) => {
//     console.log("INSIDE 2nd .then() callback ", val);
//     return randomRejectResolve();
//   })
//   .then((val) => {
//     console.log("INSIDE 3rd .then() callback ", val);
//   })
//   .catch((e) => console.log("INSIDE CATCH", e));
