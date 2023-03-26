# Views :eyes:

It is suggered to make a folder for each views.

## Creating a view
- create a folder by the name of the view
- create a file named `{name}_view.js`

in the `{name}_view.js` we have just to make an export default of the `createComponent` function in the **core**, and then you can create any element by using `e` function in the **virtualDom**.

It should look like this:

``` js
import { createComponent } from "../../../core/component/index.js";
import { e } from "../../../core/virtualDom/index.js";

export default createComponent(() => {
  return e("h1", { id: "title" }, 'Hello, world');
});

```

### The **createComponent** function
As its name it is for creating component

**the first argument is a callback function** that will return the elements created using `e` or creating it manualy (e.g: using `document.createElement`)

**the second argument take an exact path** it will point to a script file that handle the view's logic, this argument is optional, if we have the third argument but doesn't need a script file, we can just put and empty string on it.

**the third argument is an array or string of exact path** pointing to css file that need to be imported

### The **e** function
`e` stand for element(html) and it is for creating them

It take three (3) arguments **tagName**,**attributes** and **childs**

- **tagName** are for the element tag wich is a string

- **attributes** is an object containing all the element's attribute, can be leaved as an empty object

- **childs** it can be just literal string or another element or even array of elements

here an exemple of all of that:

``` js

export default createComponent(() => {
  return e("nav", { id: "navbar" }, [
    e("h1",{id:'brand'},'Tsito'),
    e("a",{href:'contact'},'Contact me')]
  );
},'src/views/{name}/{name}_script.js','src/views/{name}/{name}.css');

```