function doSomeSetup(options = {}) {
  options.timeout ??= 3000; // default timeout of 3 seconds
  options.retries ??= 5; // default of 5 retries
  console.log(options);
}
