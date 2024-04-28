// 타입스크립트 기본 타입 정리(primitive types)
let 이름 :string = "gu"
let 나이 :number = 29;
let 출생지 :string = "anyang"

let 회원들 :string[]= ['kim', 'park', 'gu']
let 회원들2 :{mem1 : string, mem2 : string} = {
  mem1 : 'kim',
  mem2 : 'park'
}

let 노래 :{song: string, singer: string} = {
  song: 'asd', 
  singer: 'dsa'
}

let project :{member: string[], days: number, started: boolean} = {
  member : ['kim', 'park'],
  days: 30,
  started: true
}