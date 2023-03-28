import { createComponent } from "../../../core/component/index.js";
import { e } from "../../../core/virtualDom/index.js";

export default createComponent(() => {

  return e("div", { id: "home" }, [
    e('div',{class:'emoji'}, '🍞️'),
    e('h2',{class:'title'},'Hello world!'),
    e('p',{class:'thanking'},[
      "thanks for downloading this, don't forget to put a star on it on ",
      e('a',{href:'https://github.com/TsitoUw/vanilla-spa-boilerplate',target:'_blank'},"github")
    ])
  ]);
}, "src/views/home/home_script.js", "src/views/home/home_style.css");
