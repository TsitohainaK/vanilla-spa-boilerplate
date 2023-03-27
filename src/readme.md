# General structure :dart:

`app.js` is the entry point of the application
it only contain the app initialisation with a css import and routes.

```js
/src
| -> app.js // application entry point
| /assets
| | // may contain images files
| /components
| | // may contain reusable components
| /routes
| | -> index.js // containing route object
| /store
| | // may contain stores 
| /styles 
| | // may contain general styling
| /utils
| | // may contain all of your re-usable function and classes
| /views
| | /exemple
| | | exemple_view.js // the exemple page (component)
| | | exemple_script.js // may contain script file
| | | exemple_style.css // may contain style file(s)

```
This is the folder structure, it may change...

## Entry point (app.js) 

```js
import createApp from "../core/index.js";
import routes from "./routes/index.js";
import { css } from "../core/virtualDom/index.js";
css(['src/styles/reset.css','src/styles/base.css']);

createApp('My app', document.getElementById("app"), routes)

```
Your **app name** should be passed in the first argument of the `createApp` function, it will change the page title.
And if you have global style you can import these here by giving the exact path in the array in `css` function.

ps: In case you changed your route object be sure it is correctly imported here and passed in the third argument.
