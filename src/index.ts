import fs from "fs";
import wordCount from "./components/WordCount";
import characterCount from "./components/CharacterCount";
import noSpecialCharacterCount from "./components/NoSpecialCharacterCount";
import averageWordLength from "./components/AverageWordLength";
import topWords from "./components/TopWords";

function getText() {
    return fs
    .readFileSync("./text/text.txt")
    .toString()
    .replace("\r", "");
};

function main(){
    let text = getText();

    console.log(
`Characters:  ${characterCount(text)}
Non special chars: ${noSpecialCharacterCount(text)}
Words: ${wordCount(text)}
Average word length: ${averageWordLength(text)}`);
    console.log(topWords(text));

};


main();