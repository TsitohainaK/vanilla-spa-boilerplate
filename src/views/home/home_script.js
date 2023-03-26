import { select } from "../../../core/virtualDom/index.js";

select("Home", (home) => {
  let i = 0;

  select("btn", (btn) => {
    btn.onclick = () => {
      btn.innerHTML = ++i;
    }
  });

});


