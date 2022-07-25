const container = document.querySelector(".container");
const form = document.querySelector("form");
const answerBtn = document.querySelector("#answer-btn");
const input = document.querySelector("input");
const comment = document.querySelector("#comment");

let createNumArr = [];

const createNumber = () => {
  for (i = 0; i < 10; i++) {
    createNumArr.push(i);
  }
};

const answerArr = [];

const createAnswer = () => {
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * createNumArr.length);
    answerArr.push(createNumArr[index]);
    createNumArr.splice(index, 1);
  }
  console.log(answerArr);
};

let checkCount = 10;

const answerCheck = (e) => {
  e.preventDefault();
  const value = input.value;
  const valueArr = value.split("");
  const convertValueArr = valueArr.map((num) => {
    return Number(num);
  });
  console.log(convertValueArr);

  if (value.length < 4) {
    return alert("4자리수를 입력해주세요");
  }

  let ball = 0;
  let strike = 0;

  convertValueArr.forEach((num, i) => {
    if (num === answerArr[i]) {
      strike++;
      return;
    }
    // const indexValue = convertValueArr.indexOf(answerArr[i]);
    const indexValue = answerArr.indexOf(num);
    // answerArr.includes(num);
    if (indexValue != -1) {
      ball++;
    }
  });

  input.value = "";
  checkCount--;

  const div = document.createElement("div");
  div.classList.add("result");
  div.innerText = `입력한값: ${value},  ${strike}스트라이크, ${ball}볼 남은기회: ${checkCount}번`;
  comment.append(div);

  if (strike === 4) {
    alert("홈런!! 정답입니다.");
  }

  if (checkCount <= 0) {
    return alert(`패배!! 정답은 ${answerArr} 입니다.`);
  }
};

const init = () => {
  createNumber();
  createAnswer();
  answerBtn.addEventListener("click", answerCheck);
};

init();

// 게임시작시 0~9까지 숫자를 생성한다.. 정답어레이에 4개의 숫자를 우선 집어 넣는다.
// 정답클릭시 4자리미만이면 알람으로 알려준다.
// 정답과 내가입력한값이 위치랑 숫자가 같으면 스트라이크 위치는다르지만 숫자가 포함되어 있으면 볼
// 내가 입력한 값이랑 정답어레이에 값을 비교한다.
// 4자리중 4자리가 숫자와 위치가 같으면 게임이 끝난다.
