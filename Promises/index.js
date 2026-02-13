const fetchData = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data Fetched");
    console.log("Data Fetched");
  } else {
    reject("Data Not Found");
  }
});

fetchData.catch((error) => {
  console.log("🚀 ~ error: ", error);
});

const login = () => {
  return Promise.resolve("Login success");
};
