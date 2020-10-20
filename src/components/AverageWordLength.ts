import noSpecialCharacterCount from "./NoSpecialCharacterCount";
import wordCount from "./WordCount";

export default (text: string) :number => {
    return noSpecialCharacterCount(text) / wordCount(text);
};