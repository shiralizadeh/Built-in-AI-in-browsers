const textElement = document.getElementById("text");
const tagsElement = document.getElementById("tags");

const prompt = _.debounce(async function prompt(e) {
  let response = null,
    promptText = null;

  try {
    promptText = `
        You're an author helping people to find right tags for their blog posts.
        Consider the following text and suggest tags for it in json format.

        Example: { tags: ['tag1', 'tag2', ...] }

        <text>
            ${e.target.value}
        </text>
    `;

    const session = await ai.languageModel.create();
    response = await session.prompt(promptText);

    const jsonResponse = JSON.parse(response);
    const tags = jsonResponse.tags;

    tagsElement.innerHTML = "";

    for (const tag of tags) {
      const li = document.createElement("li");

      li.textContent = tag;

      tagsElement.appendChild(li);
    }

    console.log({ tags });
  } catch (error) {
    console.log({ error, response, query });
  }
}, 300);

textElement.addEventListener("input", prompt);
