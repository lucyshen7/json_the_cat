const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error); // if error from request
    } else if (error === null) {
      const data = JSON.parse(body);
      if (data.length === 0 || breedName !== data[0].name) {
        callback(null, null); // if no request error but breed name not found
      } else {
        const desc = data[0].description;
        callback(null, desc); // if no error, pass description 
      }
    }
  });
};

module.exports = { fetchBreedDescription };