const { odd, even } = require('../module/var.js');
function checkOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}
module.exports = checkOddOrEven;