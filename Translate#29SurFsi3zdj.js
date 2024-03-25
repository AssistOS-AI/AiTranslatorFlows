export class Translate {
    static id = "29SurFsi3zdj";
    static description = "Translates a text using a given personality";
    constructor() {

    }

    async start(context, personality) {
        this.prompt = `Please translate the following text: "${context.text}" in the following language: "${context.language}". ${context.prompt || ""}. You will play the role of this personality: "${personality.name}", which has the following characteristics: "${personality.description}". You will translate the given text in the style of the given personality. Return only the translated text.`;
        await this.execute(context.maxTokens);
    }

    async execute(maxTokens) {
        let translatedText = await this.request(this.prompt, maxTokens);
        this.return(translatedText);
    }
}