async function run() {
  startPerf();

  const text = document.querySelector(".content-text");

  const translator = await Translator.create({
    sourceLanguage: "nl",
    targetLanguage: "en",
  });

  const answer = await translator.translate(text.innerText);

  modelAnswer.innerText = answer;

  endPerf();
}
