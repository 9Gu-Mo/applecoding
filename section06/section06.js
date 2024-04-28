//Literal Types로 만드는 const 변수 유사품
// 변수에 어떤값이 들어올지 모를 때 더 엄격하게 타입 관리 가능
var 이름;
이름 = 123;
var 접니다;
접니다 = '솔로';
function func(a) {
    return 1;
}
function func1(a) {
    return ['가위'];
}
func1('가위');
var 자료 = {
    name: 'kim'
};
console.log(자료.name);
function func2(a) {
}
func2(자료.name);
