[0.0]: #Regular-expression
[1.0]: #Uses-of-regular-expression
[2.0]: #How-to-define-a-regular-expression
[3.0]: #^-and-$
[4.0]: #*-and-+-and-?-and-{}
[5.0]: #OR-opeartor
[6.0]: #Bracket
[7.0]: #Character-type
[8.0]: #Grouping
[9.0]: #Back-reference-of-capturing-group
[10.0]: #Positive-lookahead-&-postive-lookbehind
[11.0]: #Greedy-and-lazy-match
[12.0]: #Boundary
[13.0]: #Escape

Thanks to my mother: Meiping He

感谢我的母亲： 何梅平

I will try my best to maintain all my project

我会尽我所能去维护我的项目


# Regular expression
1. [Uses of regular expression][1.0]
2. [How to define a regular expression][2.0]
3. [^ and $][3.0]
4. [* and + and ? and {}][4.0]
5. [OR opeartor][5.0]
6. [Bracket][6.0]
7. [Character type][7.0]
8. [Grouping][8.0]
9. [Back reference of capturing group][9.0]
10. [Positive lookahead & postive lookbehind][10.0]
11. [Greedy and lazy match][11.0]
12. [Boundary][12.0]
13. [Escape][13.0]

## Uses of regular expression 
* Find substring from any text.
* Replace substring in any text.

#### [⬆ Back to top][0.0]

## How to define a regular expression
```
/search-pattern/flag

1. Description： search-pattern must be defined between two /,
                at the end we can defined and flat

2. Flag: [gmi]{1-3}
    g: global, do not return after first match
    
    m: ^ and $ match start/end of each line, not only one line

    i: case sensitive


                
```

#### [⬆ Back to top][0.0]

## ^ and $
```
^liu

1. Description: match string that starts with "liu"

------

hui$

1. Description: match string that ends with "hui"

------

^liuyaohui$

1. Description: exactly(精确地) match string that is "liuyaohui"

-------

liuyaohui

1. DescriptionD: match string that has the string "liuyaohui"

```



#### [⬆ Back to top][0.0]

## * and + and ? and {}
```
abc*

1. Description: match the string that has "ab" followed by zero or more 'c'

------

abc+

1. Description: match the string that has "ab" followed by one or more 'c'

------

abc?
1. Description: match the string that has "ab" followed by zero or one 'c'

------

abc{2}
1. Description: match the string that has "ab" followed by 2 'c'

abc{2, 7}
1. Description: match the string that has "ab" followed by 2 to 7 'c'

------

abc{2,}

1. Description: match the string that has "ab" followed by 2 or more 'c'
```

#### [⬆ Back to top][0.0]

## OR opeartor
```
a(b|c)

a[bc]

1. Description: match the string that has 'a' followed by 'b' or 'c'

```

#### [⬆ Back to top][0.0]

## Bracket
```
[abc]

1. Descrition: match string that  'a' or 'b' or 'c'

------

[a-c]

1. Descrition: match string that has 'a' or 'b' or 'c'

------

[a-zA-Z0-9]

1. Description: match string that has digit and alpha

------

[^0-9] 

1. Decription: amtch strin thtat not has digit.

```

#### [⬆ Back to top][0.0]

## Character type
```
\d
[0-9]
1. Description: match a single character that is a digit.

-------

\w
[a-zA-Z0-9_]

1. Description: match a sigle character that is a digit, alpha or _

-------

\s
[\r\n\t\f\v]

1. Description: match a single character that is a white space character.

--------

.

1. Description: match any character

--------

\D, \W, \S is the negation(否定) with \d, \w, \s

\D 
[^0-9]
1. Descripton: match a sigle character that is not a digit.

\W
[^[a-zA-Z0-9_]
1. Descripton: match a sigle character that is not a digit,alpha or _ 
```


#### [⬆ Back to top][0.0]

## Grouping
```
(abc)

1. Description: in match result, if has "abc", capture(捕获) it as  group

-------

(?:abc)

1. Description: in match result, if has "abc", not capture(捕获) it as a group

-------

(?<group-name>abc)

1. Description: in match result, if has "abc", capture(捕获) it as  group,
                and name it to <group-name>

2. Use: we can use the match result and index to access group value. 
```

#### [⬆ Back to top][0.0]

## Back reference of capturing group
```
([ab])([[cd])\2\1

1. Description: match string that frist later is 'a' or 'b', and capturing it as 
                first group, seconde later is 'c' or 'd' and cauturing it as 
                second group, the third character is same as second group, the
                fourth character is same as frist group.
```

#### [⬆ Back to top][0.0]


## Positive lookahead & postive lookbehind
```
a(?=b)

1. Description: match 'a' that floweded by 'b' and 'b' is not the part of the match

------

(?<=a)b
1. Description: match 'b' that preceded by 'a' and 'a' is not the part of the match

-----------

a(?!b) 

1. Description: match 'a' that not floweded by 'b' and 'b' is not the part of the match

-------

(?<!a)b

1. Description: match 'b' that not preceded by 'a' and 'a' is not the part of the match



```


## Greedy and lazy match
`* + {}` is a greedy opeartor because they match the string as far as they as they can.
```
The string is ->  <p>hello</p>

---------
<.+>

the match is  -> <p>hello</p>

--------
<.+>?
<[^<>]+>

the match1 is -> <p>
the match2 is -> </p>

```


#### [⬆ Back to top][0.0]


## Boundary
```
\babc\b

1. Description: match whole string that is "abc"

-------
\Babc\B

1. Decsription: match whole string that "abc" is surrounded by characters.

```
#### [⬆ Back to top][0.0]

## Escape
Match `^ $ * + ? { | [ . () \` shoulud use `\` as a prefix.


#### [⬆ Back to top][0.0]






