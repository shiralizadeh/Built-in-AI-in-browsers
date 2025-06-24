const promptText = "Thsi Text have issues!";

modelQuestion.innerText = promptText;

async function run() {
  startPerf();

  const proofreader = await Proofreader.create({
    includeCorrectionTypes: true,
    includeCorrectionExplanations: true,
    expectedInputLanguages: ["en"],
  });

  const answer = await proofreader.proofread(text);

  modelAnswer.innerText = JSON.stringify(answer, null, 2);

  endPerf();
}
