// import fs from "fs";
import wordCount from "./services/WordCount";
import characterCount from "./services/CharacterCount";
import noSpecialCharacterCount from "./services/NoSpecialCharacterCount";
import averageWordLength from "./services/AverageWordLength";
import topWords from "./services/TopWords";

// function getText() :string {
//     return fs
//     .readFileSync("./text/text.txt")
//     .toString()
//     .replace("\r", "");
// };

export default (text: string) :object => {

    return ({
        characters: characterCount(text), 
        noSpecialCharacters: noSpecialCharacterCount(text),
        words: wordCount(text),
        averageWordLength: averageWordLength(text)
        })


};