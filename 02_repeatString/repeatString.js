const repeatString = function(string, num) {
    let setString = string;
    let stringResult = "";
    for(let i = 0; i < num; i ++){
        stringResult = stringResult.concat(setString); 
    }
    return stringResult;
};
repeatString("hey", 5);
// Do not edit below this line
module.exports = repeatString;
