# 4.2.1 React Ecosystem

---

## 🏠Housekeeping: Keys

```
Warning: Each child in a list should have a unique "key" prop.
* common warning we see in react*

Check the render method of `App`.
in SomeComponent (at src/index.js:24)
in App (at src/index.js:31)

eg
//items =["apple", "banana"];
//<ul><li>apple</li><li>banana</li></ul>
const List = ({ items }) => {
  return (
    <div>
    <ul>
    {items.map(items => {
      return (
        <li> {items} <li>
      );
    })};
    <ul>
  );
}
react dosent know how to keep track of changes.
solution = add key attribute : <li key = {item}> {item} </li>
```

---

- try to _not_ use array indices of the element.
  _dosent let react optimise_
- try to use a provided unique identifier (if there is one)
- else, create your own unique _id_ based on the content...

---

### Example

```js
const items = [
    { id: '123', text: 'Item 1' },
    { id: '456', text: 'Item 2' },
]

const Bacon = ({ items }) => (
    {items.map(item => <li>{item.text}</li>)}
);
```

---

## 🏠Housekeeping: Modules

In the last lecture, we saw **default exports**

```js
function Button(props) {
  ✂️
}

export default Button;
```

```js
import Button from "../Button"; *can name it wathever we want*
```

---

There are also **named exports**

```js
// authentication-utils.js
export const signUp = () => { ✂️ };
export const logIn = () => { ✂️ };
export const logOut = () => { ✂️ };
```

```js
*to use them, have to give the same name*
import { logIn, logOut } from "../../authentication-utils.js";
```

---

## A module can have:

- 0 or 1 _default_ exports, _can't have multiple_
- any number of _named_ exports, and
- both types of exports. \*eg export default whatever;
  import whatever, {logIn, logOut} frim '../../authentication-utils.js"}

---

# Exercise

Are the following code snippets correct or incorrect?

Fix them, if incorrect

---

```js
// src/data.js
const data = { hi: 5 };

export default data;
```

```js
// src/index.js
import theBestData from "./data";
```

Correct

---

```js
// src/data.js
export const MAGIC_NUMBER = 123; // dosent have default key words
```

```js
// src/index.js
import MAGIC_NUMBER from "./data";
```

Incorrect - should be `import { MAGIC_NUMBER }`, with squigglies

---

```js
// src/data.js
export const users = [];
export const sessions = [];

const data = { users, sessions };

export default data;
```

```js
// src/index.js
import { data, users } from "./data";
```

Incorrect — `data` is a default export, so it should be `import data, { users }` // data is not a name export

---

```js
// src/data.js
export default const baseball = '⚾️';

```

```js
// src/index.js
import baseball from "./data";
```

Incorrect - for weird reasons, this needs to be:
_export default cant be use on the same line than const_

```js
const baseball = "⚾️";

export default baseball;
```
