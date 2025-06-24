async function run() {
  startPerf();

  const text = document.querySelector(".content-text");

  const summarizer = await Summarizer.create();

  const answer = await summarizer.summarize(text.innerText);

  modelAnswer.innerText = answer;

  endPerf();
}
