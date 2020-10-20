const fs = require("fs")
const wordCount = require("./components/WordCount.js")
const characterCount = require("./components/CharacterCount.js")
const noSpecialCharacterCount = require("./components/NoSpecialCharacterCount.js")
  const averageWordLength = require("./components/AverageWordLength.js")
const topWords = require("./components/TopWords.js")

function getText(){
    return fs
    .readFileSync("./text/text.txt")
    .toString()
    .replace("\r", "")
}

function main(){
    let text = getText()

                  console.log(
`Characters:  ${characterCount(text)}
Non special chars: ${noSpecialCharacterCount(text)}
Words: ${wordCount(text)}
Average word length: ${averageWordLength(text)}`)
console.log(topWords(text))

}


main()