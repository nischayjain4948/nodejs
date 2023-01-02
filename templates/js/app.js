const request = require("request");

const getPost = (id, callback) => {
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  if (!id) {
    url = `https://jsonplaceholder.typicode.com/posts`;
  }
  console.log(url);
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect the server", undefined);
    } else if (response.body.length === 0) {
      callback("No result found", undefined);
    }
    callback(undefined, response.body);
  });
};

// const postForm = document.querySelector("form");
// postForm.addEventListener("submit", (e) => {
//   console.log("testing");
//   e.preventDefault();
// });

module.exports = { getPost };
