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

    let readingAge = ((0.39 * (totalWords / totalSentances)) + (11.8 * (totalSyllables / totalWords)) - 15.59)
    
    return readingAge
}