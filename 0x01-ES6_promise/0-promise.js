export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'Response from the API' }); // Resolving the Promise with a value
    }, 100);
  });
}
