"use strict";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// first promise

const url = `${BASE_URL}/1`;
const p = fetch(url);
console.log("first", p); // Promise {<pending>}

const validUrl = `${BASE_URL}/1`;
const futureResolvedPromise = fetch(validUrl);

futureResolvedPromise.then(console.log).catch(console.warn);

const invalidUrl = `http://nope.nope`;
const futureRejectedPromise = fetch(invalidUrl);

futureRejectedPromise.then(console.log).catch(console.warn);

// promise chaining
fetch(`${BASE_URL}/1`)
  .then(function f1(r1) {
    console.log(`#1: ${r1}`);
    return fetch(`${BASE_URL}/2`);
  })
  .then(function f2(r2) {
    console.log(`#2: ${r2}`);
    return fetch(`${BASE_URL}/3`);
  })
  .then(function f3(r3) {
    console.log(`#3: ${r3}`);
  })
  .catch(function (err) {
    console.error(err);
  });

async function getPokemonAwait() {
  const r1 = await fetch(`${BASE_URL}/1`);
  console.log(`#1: ${(await r1.json()).name}`);

  const r2 = await fetch(`${BASE_URL}/2`);
  console.log(`#2: ${(await r2.json()).name}`);

  const r3 = await fetch(`${BASE_URL}/3`);
  console.log(`#3: ${(await r3.json()).name}`);
}

async function getPokemonAwaitCatch() {
  try {
    const r1 = await fetch(`${BASE_URL}/1`);
    console.log(`#1: ${(await r1.json()).name}`);

    const r2 = await fetch(`${BASE_URL}/2`);
    console.log(`#2: ${(await r2.json()).name}`);

    const r3 = await fetch(`${BASE_URL}/3`);
    console.log(`#3: ${(await r3.json()).name}`);
  } catch (err) {
    console.warn("Try again later!");
  }
}
