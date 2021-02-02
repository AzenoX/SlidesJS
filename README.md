# SlidesJS [![npm version](https://badge.fury.io/js/%40azenox%2Fslidesjs.svg?id=js&type=6&v=1.0.1&x2=0)](https://badge.fury.io/js/%40azenox%2Fslidesjs)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](http://azenox.fr/)

Improved Slides functions from JQuery to pure Javascript

## Getting Started

Demo: [https://dev.alexishayat.me/SlidesJS/demo/demo.html](https://dev.alexishayat.me/SlidesJS/demo/demo.html)

### Install

Get it via NPM
```bash
npm install @azenox/slidesjs
```
```js
import SlidesJS from "@azenox/slidesjs/SlidesJS.module.js";
```

Or just download the file and import it
```html
<script src="path/to/SlideJS.js"></script>
```

<br/>

### Using Class
Here is a basic usage using SlidesJS class.
<br/>

<i>index.html :</i>
```html
<div id="div">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
```

<i>app.js :</i>
```javascript
window.addEventListener('load', () => {
    const div = document.querySelector('#div');
    
    let slides = new SlidesJS(div);
    slides.slideToggleY(400, 'top');
});
```

<br/>

#### Methods


<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 25%;">Name</th>
			<th style="width: 15%">Attributes</th>
			<th style="width: 10%">Default Value</th>
			<th style="width: 25%">Values</th>
			<th style="width: 25%">description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>.slideToggleY()</td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>top</td>
			<td>top, bottom</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>.slideToggleX()</td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>left</td>
			<td>left, right</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>.slideUp()</td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>top</td>
			<td>top, bottom</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>.slideDown()</td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>top</td>
			<td>top, bottom</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>.slideLeft()</td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>left</td>
			<td>left, right</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>.slideRight()</td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>left</td>
			<td>left, right</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
	</tbody>
</table>

<br/>


### Using Functions

You can use it using function too. But you need to use the other file (npm includes it too):
```html
<script src="path/to/SlideJSFunctions.js"></script>
```

Here is the same example with functions:

<br/>

<i>index.html :</i>
```html
<div id="div">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
```

<i>app.js :</i>
```javascript
window.addEventListener('load', () => {
    const div = document.querySelector('#div');

    window.addEventListener('load', () => {
        slideToggleY(div, 400, 'top');
    });
});
```

<br/>

#### Methods


<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 25%;">Name</th>
			<th style="width: 15%">Attributes</th>
			<th style="width: 10%">Default Value</th>
			<th style="width: 25%">Values</th>
			<th style="width: 25%">description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>slideToggleY()</td>
			<td>el</td>
			<td><i>none</i></td>
            <td>A HTML Element</td>
			<td>The target element</td>
		</tr>
		<tr>
			<td></td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>top</td>
			<td>top, bottom</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>slideToggleX()</td>
			<td>el</td>
			<td><i>none</i></td>
            <td>A HTML Element</td>
			<td>The target element</td>
		</tr>
		<tr>
			<td></td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>left</td>
			<td>left, right</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>slideUp()</td>
			<td>el</td>
			<td><i>none</i></td>
            <td>A HTML Element</td>
			<td>The target element</td>
		</tr>
		<tr>
			<td></td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>top</td>
			<td>top, bottom</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>slideDown()</td>
			<td>el</td>
			<td><i>none</i></td>
            <td>A HTML Element</td>
			<td>The target element</td>
		</tr>
		<tr>
			<td></td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>top</td>
			<td>top, bottom</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>slideLeft()</td>
			<td>el</td>
			<td><i>none</i></td>
            <td>A HTML Element</td>
			<td>The target element</td>
		</tr>
		<tr>
			<td></td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>left</td>
			<td>left, right</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
		<tr>
			<td>slideRight()</td>
			<td>el</td>
			<td><i>none</i></td>
            <td>A HTML Element</td>
			<td>The target element</td>
		</tr>
		<tr>
			<td></td>
			<td>duration</td>
			<td>500 (ms)</td>
            <td>0 - Infinity (in ms)</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>origin</td>
			<td>left</td>
			<td>left, right</td>
			<td>Set animation duration</td>
		</tr>
		<tr>
			<td></td>
			<td>from</td>
			<td>0</td>
			<td>Between 0 and 1</td>
			<td>Minimum scale size</td>
		</tr>
		<tr>
			<td></td>
			<td>to</td>
			<td>1</td>
			<td>Between 0 and 1</td>
			<td>Maximum scale size</td>
		</tr>
	</tbody>
</table>

<br/>



## Versions
**Latest version :** [![npm version](https://badge.fury.io/js/%40azenox%2Fslidesjs.svg?id=js&type=6&v=1.0.1&x2=0)](https://badge.fury.io/js/%40azenox%2Fslidesjs)

<br/>
<br/>



