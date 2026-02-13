const sample = async () => {
  console.log("Started");
  await fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((json) => console.log(json));
  console.log("Ended");
};


console.log("Process 1-------------------");
sample();
console.log("Process 2-------------------");
