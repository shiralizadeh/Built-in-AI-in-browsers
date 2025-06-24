async function run() {
  startPerf();

  const languageModel = await LanguageModel.create({
    expectedInputs: [{ type: "text" }, { type: "audio" }],
  });

  const audioBlob = await (await fetch("/assets/sample.m4a")).blob();

  const prompt = [
    {
      role: "user",
      content: [
        { type: "text", value: "Transcribe the speech with time slots." },
        { type: "audio", value: audioBlob },
      ],
    },
  ];

  const answer = await languageModel.prompt(prompt, {
    type: "boolean",
  });

  modelAnswer.innerText = answer;

  endPerf();
}