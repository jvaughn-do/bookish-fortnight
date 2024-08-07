onmessage = (e) => {
  console.log("Message received from main script");
  var result
  fetch("0.0.0.0:8080/info")
  .then((response) => {
    console.log(response.body);
    result = response.body
  })
  console.log(result);
  postMessage(result);
};
