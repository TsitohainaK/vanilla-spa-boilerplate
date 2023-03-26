import TopBar from "./topbar.js";
import { navigateTo } from "../routes/router.js";

export default function Layout(child = null) {
  function script() {
    const btn = document.getElementById("btnAddConso");

    const actualPath = window.location.pathname;

    let destination = "/";
    let actualAction = "+";

    if (actualPath == "/") {
      destination = "/add-conso";
      actualAction = "+";
    } else if (actualPath == "/add-conso") {
      destination = "/";
      actualAction = "<";
    }

    btn.innerHTML = actualAction;

    btn.addEventListener("click", () => {
      navigateTo(destination);
    });
    child ? child.script() : null;
  }

  /*html*/
  const render = () =>
    `
    <div class="tooltipcontainer addConsoCtn">
      <span class="tooltiptext">Add new consomation</span>
      <button id="btnAddConso">+</button>
    </div>
    ${TopBar().render()}
    <div class="content">${child.render()}</div>
  `;

  return {
    script,
    render,
  };
}
