const Groq = require("groq-sdk");
require('dotenv').config()

const groq = new Groq((api_key = process.env.GROQ_API_KEY));

async function main() {
  const completion = await groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: "Explain the importance of low latency LLMs",
        },
      ],
      model: "llama3-8b-8192",
    })
    .then((chatCompletion) => {
      process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
    });
}

main();