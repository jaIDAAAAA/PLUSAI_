function showAnswer(response) {
  console.log(response.data.answer);
}

let apiKey = "006e1d3aa42ft5cc55o041daac8db188";
let context = "Please be polite and provide a detailed answer";
let prompt = "Kindly tell me who was the first female president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
