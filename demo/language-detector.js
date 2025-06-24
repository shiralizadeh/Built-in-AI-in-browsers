async function run() {
  startPerf();

  const text = document.querySelector(".content-text");

  const languageDetector = await LanguageDetector.create();

  const answer = await languageDetector.detect(text.innerText);

  modelAnswer.innerText = JSON.stringify(answer, null, 2);

  endPerf();
}
