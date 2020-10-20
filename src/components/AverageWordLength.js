const noSpecialCharacterCount = require("./NoSpecialCharacterCount.js")
const wordCount = require("./WordCount.js")

module.exports = (text) => {
    return noSpecialCharacterCount(text) / wordCount(text)
}