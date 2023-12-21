function wait(msec) {
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // cause promise to resolve:
      //   any await-er will resume
      resolve();

      // we have no error conditions -- if we did, we
      // would call reject() to reject this
    }, msec);
  });
  return p;
}

async function demo() {
  console.log("hi");
  await wait(1000);
  console.log("there");
}
// end

demo();
