function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Asynchronous operation
    setTimeout(() => {
      resolve('Okay!');
    });
  });
}

export default getResponseFromAPI;
