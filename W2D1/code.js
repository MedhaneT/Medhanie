function sum(num = []) {
  return num.reduce((x, y) => x + y);

}

function multiples(num = []) {
  return num.reduce((w, z) => w * z);
}

function reverse(str) {
  return str.split("").reduce((r, char) => char + r, '');

}
function filterLongWords(word = [], i) {
  return word.filter(e => e.length > i);
}

// function longestNoSpace(...words) {
//   return words.filter((e) => {
//     return e.indexOf(" ") < 0;
//   })
//     .map((e) => e.length)
//     .reduce((x, y) => {
//       return if (x > y) {
//         return x;
//       } else
//         return y;
//     }, 0)
// }