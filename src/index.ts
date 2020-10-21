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

export default (text: string) :string => {

    return (
`Characters:  ${characterCount(text)}
Non special chars: ${noSpecialCharacterCount(text)}
Words: ${wordCount(text)}
Average word length: ${averageWordLength(text)}
Top words: ${JSON.stringify(topWords(text))}`)

};