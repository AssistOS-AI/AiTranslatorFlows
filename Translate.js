export class Translate {
    static description = "Translates a text using a given personality";
    async start(context, personality) {
        let prompt = `Please translate the following text: "${context.text}" in the following language: "${context.language}". ${context.prompt || ""}. You will play the role of this personality: "${personality.name}", which has the following characteristics: "${personality.description}". You will translate the given text in the style of the given personality. Return only the translated text.`;
        let llm = assistOS.space.getLLM();
        let translatedText = await llm.request(prompt, context.maxTokens);
        this.return(translatedText);
    }

}