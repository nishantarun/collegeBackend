// const sample = async () => {
//   console.log("Started");
//   await fetch("http://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
//   console.log("Ended");
// };

// console.log("Process 1-------------------");
// sample();
// console.log("Process 2-------------------");

const sample1 = async () => {
  const func1 = fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((json) => console.log(json));

  const func2 = fetch("http://jsonplaceholder.typicode.com/posts/2")
    .then((res) => res.json())
    .then((json) => console.log(json));

  const a = await func1;
  const b = await func2;

  console.log("🚀 sample ~ b");
  console.log("🚀 sample ~ a");
};

sample1();
