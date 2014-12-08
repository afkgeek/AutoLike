var { MatchPattern } = require("sdk/util/match-pattern");

var pattern = new MatchPattern(/(http|https):\/\/(www\.youtube|youtube).*\/watch.*/);

console.log(pattern.test("https://youtube.com"));
console.log(pattern.test("https://www.youtube.com/watch?v=test"));
console.log(pattern.test("http://www.youtube.bbc.co.uk"));
