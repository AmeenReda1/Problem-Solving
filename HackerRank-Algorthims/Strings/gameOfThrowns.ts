function gameOfThrones(s: string): string {
  // Write your code here
  let obj: { [key: string]: number } = {};
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (!obj.hasOwnProperty(s[i])) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]] += 1;
    }
  }
  console.log(obj);
  Object.keys(obj).forEach((key) => {
    let val = obj[key];
    if (val % 2 == 1) {
      res += 1;
    }
  });
  if (res > 1) return "NO";
  else return "YES";
}
console.log(gameOfThrones("aaabbbb"));
