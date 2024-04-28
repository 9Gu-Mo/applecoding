//Literal Types로 만드는 const 변수 유사품
// 변수에 어떤값이 들어올지 모를 때 더 엄격하게 타입 관리 가능
let 이름 : 123;
이름 = 123

let 접니다 : '대머리' | '솔로'
접니다 = '솔로'

function func(a :'hello') :1 | 0{
  return 1
}

function func1(a:'가위' | '바위' | '보') : ('가위' | '바위' | '보')[]{
  return ['가위']
}
func1('가위')

var 자료 = {
  name : 'kim'
} as const


console.log(자료.name)

function func2(a :'kim') {

}

func2(자료.name)