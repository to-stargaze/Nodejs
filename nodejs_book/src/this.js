console.log(this);
console.log(this === module.exports);
console.log(this === exports);
function whatIsThis(){
    console.log('function' , this === exports , this === global);
}
whatIsThis();

//js 최상위 스코프 this 는 module.export or exports 객체
//함수 안의 this global 객체