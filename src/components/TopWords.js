module.exports = (text) => {
    let textArray = text.split(/\s+/)
    let topWordsObj = {}
    for(let i = 0; i <= textArray.length; i++){
        if(topWordsObj.hasOwnProperty(textArray[i])){
            topWordsObj[textArray[i]]++
        }else{
            topWordsObj[textArray[i]] = 1
        }
    }
    return topWordsObj
}