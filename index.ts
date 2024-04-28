type myType = string | number;

let name1 :myType= 'gu';
let array1 :string[] = ["kim", "park"];
let obj1 :{name?:string} = {name: 'kim'};

function 함수(e :number) :number {
  return e * 2
}

type Member = [number, boolean];
let john:Member = [123, true];