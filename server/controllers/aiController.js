import genAI from "../configs/gemini.js";

export const enhanceContent = async (req, res) => {
  try {
    const { content } = req.body;

    const prompt = `
You are a professional blog editor.

Task:
- Fix grammar
- Improve readability
- Improve sentence structure
- Create proper paragraphs
- Keep original meaning
- Do not add fake facts
- Return only improved content

Content:

${content}
`;

    const models = [
      "gemini-2.5-pro",
      "gemini-2.5-flash",
      "gemini-2.5-flash-lite",
      "gemini-1.5-pro",
      "gemini-1.5-flash",
    ];

    for (const modelName of models) {
      try {
        console.log(`Trying model: ${modelName}...`);

        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        const enhancedContent = result.response.text(); // no unnecessary await

        console.log(`Success with model: ${modelName}`);

        return res.json({
          success: true,
          enhancedContent, 
          modelUsed: modelName, 
        });
      } catch (modelError) {
        console.error(`Model ${modelName} failed:`, modelError.message);

      }
    }

    return res.status(500).json({
      success: false,
      message: "All Gemini models failed. Please try again later.",
    });
  } catch (error) {
    console.error("Unexpected error in enhanceContent:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
