import createApp from "../core/index.js";
import routes from "./routes/index.js";
import { css } from "../core/virtualDom/index.js";

css(['src/styles/reset.css','src/styles/base.css']);
createApp('My app', document.getElementById("app"), routes)
