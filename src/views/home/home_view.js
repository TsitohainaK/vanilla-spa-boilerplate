import { createComponent } from "../../../core/component/index.js";
import { e } from "../../../core/virtualDom/index.js";

export default createComponent(() => {
  return e("div", { id: "Home", class: "flex" }, [e("button", { id: "btn" }, "0"),e('img',{src:""})]);
}, "src/views/home/home_script.js");
