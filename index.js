const currentApi = document.querySelector(".current-api");

const modelQuestion = document.querySelector(".model-question");
const modelAnswer = document.querySelector(".model-answer");
const answerDuration = document.querySelector(".answer-duration");

const script = document.createElement("script");
const api = document.location.search.replace("?", "");

script.src = `/demo/${api}.js`;

document.body.appendChild(script);

currentApi.textContent = api;

document.querySelector(".btn-run").addEventListener("click", async () => {
  run();
});

let time = undefined;
function startPerf() {
  time = Date.now();

  answerDuration.textContent = "";
  modelAnswer.innerText = "Loading...";
}

function endPerf() {
  answerDuration.textContent = `Duration: ${Date.now() - time}ms`;
}
