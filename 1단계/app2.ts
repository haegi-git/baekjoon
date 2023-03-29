const 중복이름 = (x: string): string => {
  return `${x}??!`;
};
console.log(중복이름("joonas"));

const 태국년도 = (x: number): number => {
  return x - 543;
};
console.log(태국년도(2541));

const 나머지 = (a: number, b: number, c: number): number[] => {
  let 첫번째 = (a + b) % c;
  let 두번째 = ((a % c) + (b % c)) % c;
  let 세번째 = (a * b) % c;
  let 네번째 = ((a % c) * (b % c)) % c;

  return [첫번째, 두번째, 세번째, 네번째];
};

console.log(나머지(5, 8, 4));

const 곱셈 = (a: number, b: number): number[] => {
  const bStr = String(b); // b로 받아온 숫자를 문자열로 변경
  let newArr = Array.from(bStr).map((i) => Number(i) * a); // 문자열로 변경해준 b를 Array로 만들어줌 과 동시에 map함수를 사용하여
  // 문자열이 들어가있던 배열을 숫자열로 변경함과 동시에 a와 곱해주기
  newArr.reverse().push(a * b);
  // 배열 순서 뒤집고 마지막 최종 결과값도 넣어주기
  return newArr;
};
console.log(곱셈(472, 385));

const 꼬마정민 = (a: number, b: number, c: number): number => {
  return a + b + c;
};
console.log(꼬마정민(77, 77, 7777));

console.log(`\\    /\\
)  ( ')
(  /  )
\(__)|`);

console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`);

// `` 벡틱을 사용한 템플릿 리터럴 문제인듯한데
// \/\ 등 \ 이걸 사용하여 푸는문제인데 헷갈려서 넘어가겠음...
