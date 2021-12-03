const request = require('request');
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`; // API endpoint

request(url, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);

    console.log("data.length", data.length)
    console.log("body.length", body.length)

    if (body.length <= 2 || breed !== data[0].name) {
      console.log(`ERROR: Breed '${breed}' not found`);
    } else { // breed is found
      const description = data[0].description;
      printResult(description); 
    }
  } else {
    console.log('The request failed. Error:', error); // print the error if one occurred
  }
});

const printResult = (description) => {
  console.log(description);
};