// 타입 확정하기 Narrowing & Assertion
function 내함수(x) {
    // Narrowing
    // if(typeof x === 'string') {
    //   return x + '1'
    // } else {
    //   return x + 1
    // }
    // assertion
    // union type을 한개의 type으로 확정하고 싶을 때 사용
    // 어떤 타입이 들어올지 100% 확실할 때 사용
    var array = [];
    array[0] = x;
    console.log(x);
}
var array2 = [1, "2", 3];
var arrayNum = array2.map(Number);
console.log(arrayNum);
function clear(a) {
    var clearCom = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            clearCom.push(parseFloat(b));
        }
        else {
            clearCom.push(b);
        }
    });
    return clearCom;
}
console.log(clear([123, '4321', 23234]));
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 만들함수(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return '없쪄';
    }
}
console.log(만들함수({ subject: ['english', 'art'] }));
