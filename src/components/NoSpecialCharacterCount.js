module.exports = (text) => {
    return text.length - text.replace(/\b[-?(\w+)?]+\b/gi, "").length
}