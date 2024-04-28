// 함수에 타입 지정하는 법 & void 타입
// void : return을 하지 않는 함수에 작성
// ?을 작성하면 undefined을 작성한 union과 같음 number | undefined
function 함수(x? :number | string) :void{
  console.log(x + 3)
}

함수(2)

// 1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력하고 
// 아무것도 입력하지 않고 함수를 사용하면 이름이 없습니다를 출력
function 이름출력(x: string) :void{
  if(x) {
    console.log("안녕하세요" + x)
  } else {
    console.log("이름이 없습니다")
  }
}

// 2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수 제작
// '246'이런 문자를 입력하면 3이 return
function lenChk(x: string | number) :number {
  return lenChk.toString().length
}

lenChk("글자수체크")

// 3. 결혼 가능 확률을 알려주는 함수 제작
// 함수의 파라미터로 월소득(만원단위), 집보유여부, 매력점수(상, 중, 하) 입력해야함
// 월소득은 만원 당 1점, 집 보유시 500점 & 미보유시 0점, 매력점수는 상일 때 100점
function possible(x:number, y:boolean, z:string) :string | void{
  let score :number = 0;
  score += x;
  if(y === true) {
    score += 500
  }
  if(z === '상') {
    score += 100
  }
  if(score >= 600) {
    return "결혼가능"
  }
}
console.log(possible(600, true, "상"))
