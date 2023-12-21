function makeRequest(url1, callback1) {
  const xhr1 = new XMLHttpRequest();
  xhr1.open("GET", url1, true);
  xhr1.onload = function () {
    if (xhr1.status === 200) {
      const response1 = JSON.parse(xhr1.responseText);
      const url2 = response1.nextUrl;

      const xhr2 = new XMLHttpRequest();
      xhr2.open("GET", url2, true);
      xhr2.onload = function () {
        if (xhr2.status === 200) {
          const response2 = JSON.parse(xhr2.responseText);
          const url3 = response2.nextUrl;

          const xhr3 = new XMLHttpRequest();
          xhr3.open("GET", url3, true);
          xhr3.onload = function () {
            if (xhr3.status === 200) {
              const response3 = JSON.parse(xhr3.responseText);
              callback1(response3.data);
            } else {
              console.error("Request 3 failed");
            }
          };
          xhr3.send();
        } else {
          console.error("Request 2 failed");
        }
      };
      xhr2.send();
    } else {
      console.error("Request 1 failed");
    }
  };
  xhr1.send();
}

makeRequest("https://api.example.com/endpoint1", function (result) {
  console.log(result);
});
