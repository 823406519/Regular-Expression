let text="<h1>hello world</h1>";
let regxp1=/<.*>/;
let regxp2=/<.*?>/;
console.log(text.match(regxp1));
console.log(text.match(regxp2));