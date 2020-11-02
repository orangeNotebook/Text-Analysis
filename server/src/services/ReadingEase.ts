import wordCount from "./WordCount"
import sentanceCount from "./SentanceCount"
import syllableCount from "./SyllableCount"

export default (text: string) :number =>{
    let totalWords = wordCount(text)
    let totalSentances = sentanceCount(text) 
    let allWordsArray = text.split(/\s+/)
    let totalSyllables = 0

    for(let i = 0; i < totalWords; i++){
        totalSyllables += syllableCount(allWordsArray[i])
    }

    let readingEase = (206.835 - (1.015 * (totalWords / totalSentances)) - (84.6 * (totalSyllables / totalWords)))
    
    return readingEase
}