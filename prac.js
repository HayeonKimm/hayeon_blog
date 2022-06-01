// 시간 출력 테스트

const dayjs = require('dayjs');
let now = dayjs();
let time = now.format();

// console.log(time);
time = time.slice(0, 16).split('T').join(' ');

console.log(time);
