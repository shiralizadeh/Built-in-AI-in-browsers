const promptText = "How are you?";

modelQuestion.innerText = promptText;

async function run() {
  startPerf();

  const languageModel = await LanguageModel.create();

  const answer = await languageModel.prompt(promptText);

  modelAnswer.innerText = answer;
  
  endPerf();
}
