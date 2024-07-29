const reverseString = function(sentence) {
    let revSentence = sentence.split("").reverse().join("");
    return revSentence;
};
reverseString("pancit canton");

// Do not edit below this line
module.exports = reverseString;
