const string = "aabbccdaaa";
let res = "";
let counter = 1;

function transform(string) {
  [...string].forEach((char, index) => {
    if ([...string][index + 1] === char) {
      counter++;
    } else {
      res += char + counter;
      counter = 1;
    }
  });
}

transform(string);
console.log(res);
