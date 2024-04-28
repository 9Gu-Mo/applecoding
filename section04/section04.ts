// 타입 확정하기 Narrowing & Assertion

function 내함수(x :number|string) {
  // Narrowing
  // if(typeof x === 'string') {
  //   return x + '1'
  // } else {
  //   return x + 1
  // }

  // assertion
  // union type을 한개의 type으로 확정하고 싶을 때 사용
  // 어떤 타입이 들어올지 100% 확실할 때 사용
  let array :number[] = [];
  array[0] = x as number;
  console.log(x)
}

let array2 :(string | number)[] = [1, "2", 3]
let arrayNum :number[] = array2.map(Number);
console.log(arrayNum)

function clear(a :(string | number)[]) {
  let clearCom :number[] = [];

  a.forEach((b)=>{
    if (typeof b === 'string') {
      clearCom.push(parseFloat(b))
    } else {
      clearCom.push(b)
    }
  })

  return clearCom
}

console.log(clear([123, '4321', 23234]))

let 철수쌤 = {subject: 'math'}
let 영희쌤 = {subject: ['science', 'english']}
let 민수쌤 = {subject: ['science', 'art', 'korean']}

function 만들함수 (x :{subject : string | string[]}) {
  if (typeof x.subject === 'string') {
    return x.subject
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1]
  } else {
    return '없쪄'
  }
}

console.log(만들함수({subject:['english','art']}))