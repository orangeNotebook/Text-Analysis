const fs = require("fs");

function getText(){
    return fs
    .readFileSync("./text/text.txt")
    .toString()
    .replace("\r", "")
}

function wordCount(text){
    return text.split(" ").length
}

function characterCount(text){
    return text.length
}

function noSpecialCharacterCount(text){
    return text.length - text.replace(/\b[-?(\w+)?]+\b/gi, "").length
}

function averageWordLength(text){
    return noSpecialCharacterCount(text) / wordCount(text)
}

function main(){
    let text = getText()

    console.log(
`Characters:  ${characterCount(text)}
Non special chars: ${noSpecialCharacterCount(text)}
Words: ${wordCount(text)}
Average word length: ${averageWordLength(text)}`)
}

main()