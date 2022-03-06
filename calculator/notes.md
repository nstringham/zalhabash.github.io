# Personal Notes  

```html
<button type="button">Click Me!</button>
```            
`type="button"` if you had a form tell the form not to submit, but can rm in this situation
### How to record a button press ###
1. `<button onClick="alert('hi')">1</button>` (in (`<body>`)
2. in the script -> `<button id="2">2</button>`
 ```js   
function alert2() {
    alert(2)
}

document.getElementById('2').addEventListener('click', alert2);
```

        
Write code that's easy to read and disregard efficiency if you have a dataset that is less than 10,000 rows wide

### random code chunk (note: this is more complicated than what was actually used)
```js
var z = [{type: "inital", value:5}, {type: "add", value:3}]            
```

Script loads before user clicks button, so it's ok to have .push in the body. If it was in a separate file, default behavior is to wait.

```js 
<script src="index.js" type="text/javascript"></script>
```

### scrict/nonstrict ###
```js
5 == '5' //true   
5 === '5' //false
    
!=
!==
```
typeof always returns a string

## anonymous functions ##
```js
(x) => x + 1

function addOne(x) {
        return x + 1;
}

addOne = (x) => x + 1
```
## binary ##

0000 0101

- 8 is a byte
- 4 is a word
- 1 is a bit

## assorted formatting tips ##
1. shift + alt + F: FIXES YOUR FORMAT

2. If you're putting elements inside of something, use div
unless it's text
if you're not sure, just use div

3. class vs. id:
    - Use class if you think you want other things that act like that
    -  In this project, he would call: class = wrapper, and if id, calculator
*don't want more than one thing with the same id

4. Grid: 2 approaches
    - give everything its particular space, OR
    - let everything go where it wants and fix the ones that are misbehaving
    
5. Don't use transparency unless you have to!

6. NOTE TO SELF research display: flex

Strings in js: immutable (you can't change them) so:
YOU CAN'T DO THIS
```js
str[1]
```
YOU CAN DO THIS
```js
something = str[1]
``` 

js: ways to do the mergenumbers thing since we're switching to using strings

regex: fancy thing for recongnizing patterns in strings
check if when you turn it into integer if it's a NaN
`isNaN()`        typecasts FOR YOU (into a number) yaaay
check for each specific symbol (if statements)
    (or have an array 0-9; array.contains method)

`eval()` -> NOT fast, very cheese

- belong to the browser work in one/two browsers
-- developer scope, works on one website, reserved for you to do anything you want with it

inline style element
            higher specificity
            not useful very often but can be used instead of coming up with a selector

the shortest side of the browser is always 100vmin

BEST OF BOTH WORLDS:
`--button-size: min(15vh, 22vw);`            
            grid: 4 accross, so 22 is slightly less than 100 / 4, and same for the other side

```javascript
element.prototype.click 

let str = "hi"
str.concat()
String.prototype.concat = console.log;
```
prototypal mutation: problematic
don't do it
sometimes when you can use prototype for a class you made
every time you run concat afterwards, will do console.log

## Github  ##
can create a branch to mess around with things without messing up your main website

Standardized ways to name commmits
1. Make small commits

2. Explain what you did

3. Don't use past tense

- Important to have a development system so that you can test things out and run them only on your computer without having to publish anything

- Javascript is a scripting language, and there is no javascript binary, so you need an engine

- Many ways to do this --- we'll use Node

### Licenses ###
1. MIT License (pretty unrestrictive)

2. If you license is too restrictive, not allowed to put your code on GitHub publicly

## Using Windows Powershell b/c for some reason, VS Code terminal not working with node ##
```bash
npm install --global http-server
```

install http-server using node

```bash
npm install --global http-server
```
```bash
http-server -c0 .
```
Available on: 2 of them. First is for other devices; second is for your own device
        
## URL: ##

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL


- http://192.168.128.12:8080

- :80 is assumed for http
- file
- query string: how to interact with that file
- #: point you to a specific element id
- alot of features on the web that only work for https
- caveat: all those features should work on one http (don't need to encrypt if it's yourself)
http://localhost (in our case: http://localhost:8080)

## Lighthouse ##

Got all 100's!

## Web App Manifest ##
- either: manifest.webmanifest or manifest.json
    
https://developer.mozilla.org/en-US/docs/Web/Manifest

- "icons": put in order of what you want the browser to use, and if it doesn't work the browser is supposed to use the next thing down. And put .svg at the top because it's the highest quality.
- "purpose": maskable
    - Android versions before 8, app icons have whatever shape they want
    - Android versions after 8, forced to have an icon shape, so it'll use the maskable version and crop your image to the shape 

## SVG ##
- An svg file is kind of an image
- Describes shapes

Pros:
    - Use it at any resolution you want

Cons:
    - No specific size
    - Every time you display it, you have to do calculations to figure out what each pixel color is; can cause problems with older, slower computers

Things I want to know more about:
    - Raster images

How to make one:

- Rect: x,y: 0,0 is top left of the screen
- Changing border-width by 8, for example, changes the total width of the shape by 8 (the border extends 4 in one direction and 4 in the other)

## Service Worker

https://web.dev/offline-cookbook/

- We want to download the file when the app is installed and update it when the app is updated

- When does it run?
    - Doesn't run in the page, it runs by itself
    - It will run for a little longer after you close the page
    - Sometimes Chrome will wake it up 
- Service worker installed separately 

## The flex end thingy lol ;)

Remnants of an ancient, long-gone function in my code that is lost to history.
flex-end right in eng, left in arabic

## Testing for issue #7
(that one calculator bug where the numbers go off the end of the display)

```javascript
pushAndDisplay("11111111111111111111111111111111")
```
