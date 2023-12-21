async function allSettledDemo() {
  const GITHUB_BASE_URL = "https://api.github.com";

  let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);

  let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);

  let badUrl = fetch("http://definitelynotarealsite.com");

  let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);

  let anotherbadUrl = fetch("http://definitelynotarealsite.com");

  let results = await Promise.allSettled([
    elieP,
    joelP,
    badUrl,
    coltP,
    anotherbadUrl,
  ]);

  console.log(results);
  const fulfilled = results.filter((r) => r.status === "fulfilled");
  const rejected = results.filter((r) => r.status === "rejected");
  console.log(fulfilled);
  console.log(rejected);
}
