export default  (text: string) :number => {
    return text.length - text.replace(/\b[-?(\w+)?]+\b/gi, "").length;
};