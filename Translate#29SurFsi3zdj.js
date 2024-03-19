export class Translate {
    static id = "29SurFsi3zdj";
    static description = "Translates a text using a given personality";
    constructor() {

    }

    start(text, personalityId, language, prompt, maxTokens) {
        if (personalityId) {
            let personality = system.space.getPersonality(personalityId);
            this.prompt = `Please translate the following text: "${text}" in the following language: "${language}". ${prompt || ""}. You will play the role of this personality: "${personality.name}", which has the following characteristics: "${personality.description}". You will translate the given text in the style of the given personality. Return only the translated text.`;
        } else {
            this.prompt = `Please translate the following text: "${text}" in the following language: "${language}". ${prompt || ""}. Return only the translated text.`;
        }

        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(maxTokens);
    }

    async execute(maxTokens) {
        let translatedText = await this.request(this.prompt, maxTokens);
        this.return(translatedText);
    }
}