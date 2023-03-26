import { select } from "../../../core/virtualDom/index.js";

select("home", (home) => {
  let i = 0;

  select("btn", (btn) => {
    btn.onclick = () => {
      btn.innerHTML = ++i;
    }
  });

});


