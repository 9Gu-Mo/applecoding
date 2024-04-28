// type 변수 선언 (type & readonly)
// type alias
type Animal = {name : string, age : number}

let 동물 :Animal = {
  name: 'kim',
  age: 20
};

const 출생지1 = {name:'kim', region: 'seoul' }
출생지1.region = 'busan'

// readonly키워드를 사용하면 수정을 막아줌
type GirlFri = {
  name?: string
}

const gf :GirlFri = {
  name: '엠버'
}

gf.name = "유라"

type Name = string;
type Age = number;
type Person = Name | Age

type PositionX = {x:number};
type PositionY = {y:number};
type NewType = PositionX & PositionY

let position :NewType = {x: 10, y:20}