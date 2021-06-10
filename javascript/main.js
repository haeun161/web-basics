
let schedule = [
  { place: "이불 속", behavior: "늦잠자기" },
  { place: "서브웨이", behavior: "냠냠" },
  { place: "줌 속", behavior: "웹 프로그래밍 듣기" },
  { place: "서브웨이", behavior: "30cm 냠냠" },
  { place: "이불 속", behavior: "넷플릭스랑 좋은 시간 보내기" },
  { place: "이불 속", behavior: "쿨쿨" }
];

let result = [];

// ... 여러분의 풀이 ...

console.log(result); // ["늦잠자기", "넷플릭스랑 좋은 시간 보내기", "쿨쿨"]

for (let i = 0; i < schedule.length; i++) {
    if (schedule[i].place === "이불 속") {
      result.push(schedule[i].behavior);
    }
  }
  
  console.log(result); // ["늦잠자기", "넷플릭스랑 좋은 시간 보내기", "쿨쿨"]

  schedule.forEach((el) =>
  el.place === "이불 속" ? result.push(el.behavior) : null
);

console.log(result); // ["늦잠자기", "넷플릭스랑 좋은 시간 보내기", "쿨쿨"]schedule.map((el) => {
    if (el.place === "이불 속") result.push(el.behavior);
    return result;
  });
  
  console.log(result); // ["늦잠자기", "넷플릭스랑 좋은 시간 보내기", "쿨쿨"]