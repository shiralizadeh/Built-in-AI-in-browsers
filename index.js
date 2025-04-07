const textElement = document.getElementById("text");
const tagsElement = document.getElementById("tags");

const prompt = _.debounce(async function prompt(e) {
  let response = null,
    promptText = null;

  try {
    promptText = `
        You're an author helping people to find right tags for their blog posts.
        Consider the following text and suggest tags for it in json format.

        Example: { "tags": ['tag1', 'tag2', ...] }

        <text>
            ${e.target.value}
        </text>
    `;

    // Create a session
    const session = await ai.languageModel.create();

    // Prompt the model
    response = await session.prompt(promptText);

    // Log Response
    console.log({ response });

    // Parse Response
    // const { tags } = ...

    tagsElement.innerHTML = "";

    for (const tag of tags) {
      const li = document.createElement("li");

      li.textContent = tag;

      tagsElement.appendChild(li);
    }

    console.log({ tags });
  } catch (error) {
    // console.log({ error, response, promptText });
  }
}, 300);

textElement.addEventListener("input", prompt);
