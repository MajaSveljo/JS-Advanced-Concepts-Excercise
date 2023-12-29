async function showNumberTrivia() {
    const numbersTrivia = await fetch('http://numbersapi.com/random/year?json')
    const numbersTriviaJson = await numbersTrivia.json()

    console.log('showNumberTrivia: ', numbersTriviaJson.text)
}

async function showNumberRace() {
    const result = await Promise.race([
        fetch('http://numbersapi.com/1?json'),
        fetch('http://numbersapi.com/2?json'),
        fetch('http://numbersapi.com/3?json'),
        fetch('http://numbersapi.com/4?json')
    ])
    const resultJson = await result.json()

    console.log('showNumberRace: ', resultJson.text)
}

async function showNumberAll() {
    const results = await Promise.allSettled([
        fetch('http://numbersapi.com/1?json'),
        fetch('http://numbersapi.com/2?json'),
        fetch('http://numbersapi.com/3?json'),
        fetch('http://numbersapi.com/wrong?json')
    ])

    const resultsJson = await Promise.allSettled(results.map(result => result.value.json()))

    const fulfilled = resultsJson.filter((r) => r.status === "fulfilled");
    const rejected = resultsJson.filter((r) => r.status === "rejected");
    console.log('showNumberAll fulfilled ', fulfilled);
    console.log('showNumberAll rejected ', rejected);
}

async function main() {
    await showNumberTrivia()
    await showNumberRace()
    await showNumberAll()
}
