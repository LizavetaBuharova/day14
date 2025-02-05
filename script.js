//Удалить Первый и Последний символ
function removeChar(str) {
  let newStr = "";
  let n = str.length;
  for (let i = 1; i < n - 1; ++i) {
    newStr += str[i];
  }
  return newStr;
}

strRo = removeChar("aabcdd");
console.log(strRo);

//Найдите наименьшее целое число в массиве
function findSmallestInt(arr) {
  compare = (a, b) => (a > b ? 1 : a == b ? 0 : -1);
  arr.sort(compare);
  return arr[0];
}

let arrr = [78, 56, 232, 12, 18];
console.log(findSmallestInt(arrr));

//Посчитать количество присутствующих овец
function countSheeps(sheep) {
  let sheeps = 0;
  sheep.forEach((el) => {
    el && ++sheeps;
  });
  return sheeps;
}
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
);

//
let t = 12356;
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
console.log(digitize(t));
