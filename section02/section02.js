// 타입을 미리 정하기 애매할 때 (union type, any, unknown)
// Union Type : 타입 2개 이상 합친 새로운 타입 선언
var 회원 = 123;
회원 = "회원임";
var 회원들임 = [1, "2", 3];
var 오브젝트 = {
    a: '123',
    b: 123
};
// any type : 모든 타입을 허용해줌. 
// 타입관련 버그가 나도 찾을수가 없기 때문에 일반 js변수로 만들고 싶을 때 사용
var 이름2;
이름2 = 123;
이름2 = "string";
이름2 = true;
// unknown type : 모든 타입을 허용해줌.
// unknown은 다른 타입과 연산이 불가능(any만 가능)
var 이름3;
이름3 = 123;
이름3 = "string";
// 1. 다음 변수 4개에 타입을 지정(단 age변수에는 undefined말고 숫자도 들어오게)
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// 2. 학교 변수에 타입 지정
var 학교 = {
    score: [100, 97, 84],
    teacher: 'phil',
    friend: 'john'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
