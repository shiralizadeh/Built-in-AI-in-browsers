const promptText = "Is the first image look like the second one?";

modelQuestion.innerText = promptText;

async function run() {
  startPerf();

  const mohamadImg = document.querySelector(".content-img-mohamad");
  const rowanImg = document.querySelector(".content-img-rowan");

  const languageModel = await LanguageModel.create({
    expectedInputs: [{ type: "text" }, { type: "image" }],
  });

  const prompt = [
    {
      role: "user",
      content: [
        { type: "text", value: promptText },
        { type: "image", value: mohamadImg },
        { type: "image", value: rowanImg },
      ],
    },
  ];

  const answer = await languageModel.prompt(prompt, {
    type: "boolean",
  });

  modelAnswer.innerText = answer;

  endPerf();
}