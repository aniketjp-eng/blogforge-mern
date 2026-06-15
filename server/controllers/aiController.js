import genAI from "../configs/gemini.js";
export const enhanceContent = async (req, res) => {
  try {

    const { content } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite"
    });

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

    const result =
      await model.generateContent(prompt);

    const enhancedContent =
      result.response.text();

    res.json({
      success: true,
      enhancedContent
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message
    });

  }
};