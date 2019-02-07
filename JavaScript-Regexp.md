
## method
```JavaScript
// test method
// return true or false
// patern.test(string)
let name='my name is liuyaohui';
let testRegxp=/liuyaohui/;
console.log(testRegxp.test(name)); // true

//----------------
// match method
// return the matching string
let name='my name is liuyaohui';
let testRegxp=/liuyaohui/;
console.log(name.match(testRegxp));
// [ 'liuyaohui', index: 11, input: 'my name is liuyaohui' ]
```

## flag
```JavaScript
// ignore case flag
let regxp=/search/i;

// find more than one first
let regxp=/search//g;

```


## example
```JavaScript
// different posibilites
let regxp=/one|two/;

// wildcard character . will match any one character
let regxp=/.abc/;

// single character with multiple posibility
let regxp=/a[bc]bc/;

// use hyphen characer(连字符) to find character set
let regxp=/[a-z]/;

// match letter and numbers
let regxp=/[a-z0-9]/i;

// match sigle character not specified
let regxp=/[^0-9]/; // not a number

// match character accure one or more 
let regxp=/a+/; // a accure one or more time

// match character accure zero or more time
lt regxp=/a*/; // a accrue zero or more time
```

## lazy matching
Regular expressions are by default greedy, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match, lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
```JavaScript
// use ? after the pattern to create lazy match
let text="<h1>hello world</h1>";
let regxp1=/<.*>/;
let regxp2=/<.*?>/;
// <h1>hello world</h1>
console.log(text.match(regxp1));

// <h1>
console.log(text.match(regxp2));

```
