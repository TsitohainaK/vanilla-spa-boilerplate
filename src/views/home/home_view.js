import { createComponent } from "../../../core/component/index.js";
import { e } from "../../../core/virtualDom/index.js";

export default createComponent(() => {

  return e("h1", { id: "home", class: "flex" }, "This is a demonstration");
}, "src/views/home/home_script.js", "src/views/home/home_style.css");
