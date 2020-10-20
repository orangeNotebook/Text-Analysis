import noSpecialCharacterCount from "./NoSpecialCharacterCount";
import wordCount from "./WordCount";

export default (text) => {
    return noSpecialCharacterCount(text) / wordCount(text);
};