import { select } from "../../../core/virtualDom/index.js";

select("home", (home) => {
  let i = 0;

  select("count", (btn) => {
    btn.onclick = () => {
      btn.innerHTML = `count: ${++i}`;
    }
  });

});


