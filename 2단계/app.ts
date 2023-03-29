type NumberFuncType = (a: number, b?: number) => string;

const 비교: NumberFuncType = (a, b) => {
  const value = a > b ? "> A가 더 큼" : a < b ? "< B가 더 큼" : "= 같음";

  return value;
};
console.log(비교(2, 1));
console.log(비교(1, 2));
console.log(비교(2, 2));

const 시험문제: NumberFuncType = (a, b) => {
  const score =
    90 <= a && 100 >= a
      ? "A 점수높다"
      : 80 <= a
      ? "B 그래도높네"
      : 70 <= a
      ? "C 괜찮은점수"
      : 60 <= a
      ? "D 좀 아쉽지"
      : "F 많이아쉬운데";
  return score;
};
console.log(시험문제(65));

const 시험문제조건문: NumberFuncType = (a, b) => {
  if (90 <= a && 100 <= a) {
    return "점수높네 A";
  } else if (80 <= a) {
    return "그래도높ㄷㅏ B";
  } else if (70 <= a) {
    return "괜찮네 C";
  } else if (60 <= a) {
    return "아쉽네 D";
  } else {
    return "분발해야할듯 F";
  }
};

console.log(시험문제조건문(20));

const 윤년: NumberFuncType = (a) => {
  // 괄호 안 논리연산자가 먼저 이루어진 후 그 다음 논리연산자가 이루어진다
  if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    return "윤년이다 1";
  } else {
    return "윤년아닌데";
  }
};

console.log(윤년(2000));
console.log(윤년(1999));
console.log(윤년(1900));

const 윤년삼항: NumberFuncType = (a) => {
  const 윤년체크 =
    (a % 4 === 0 && a % 100 !== 0) || a % 400 == 0
      ? "윤년이고 1"
      : "윤년 아니고 0";
  return 윤년체크;
};
console.log(윤년삼항(2000));
console.log(윤년삼항(1900));
