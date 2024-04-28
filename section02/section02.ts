// 타입을 미리 정하기 애매할 때 (union type, any, unknown)

// Union Type : 타입 2개 이상 합친 새로운 타입 선언
let 회원 :(number | string | string[] | boolean) = 123 
회원 = "회원임"

let 회원들임 :(string | number)[] = [1, "2", 3]
let 오브젝트 :{
  a:(string | number | boolean),
  b:(string | number | boolean)
} = {
  a:'123', 
  b:123
}

// any type : 모든 타입을 허용해줌. 
// 타입관련 버그가 나도 찾을수가 없기 때문에 일반 js변수로 만들고 싶을 때 사용
let 이름2 :any;
이름2 = 123;
이름2 = "string"
이름2 = true

// unknown type : 모든 타입을 허용해줌.
// unknown은 다른 타입과 연산이 불가능(any만 가능)
let 이름3 :unknown;
이름3 = 123;
이름3 = "string"

// 1. 다음 변수 4개에 타입을 지정(단 age변수에는 undefined말고 숫자도 들어오게)
let user :string = 'kim';
let age :number | undefined = undefined
let married :boolean = false
let 철수 :(string | number | undefined | boolean)[] = [user, age, married]

// 2. 학교 변수에 타입 지정
let 학교 :{score:(number | boolean)[] , teacher: string, friend: (string | string[])}= {
  score : [100, 97, 84],
  teacher : 'phil',
  friend : 'john'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
