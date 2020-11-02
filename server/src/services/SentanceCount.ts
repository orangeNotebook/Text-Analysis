export default (text: string) :number => {
    return text.split(".").length - 1;
};