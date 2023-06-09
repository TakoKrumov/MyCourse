const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += <li>${post.title}</li>;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' });

getPosts();

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += <li>${post.title}</li>;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
