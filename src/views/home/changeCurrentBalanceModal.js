import { emit } from "../../utils/reactivity.js";

export default function ChangeCurrendBalanceModal() {
  const app = document.getElementById("app");

  function script(showModal) {
    if (!showModal) {
      const modal = document.getElementById("editActual");
      modal ? modal.remove() : null;
    } else {
      const pp = document.createElement("div");
      pp.id = "editActual";
      pp.className = "fixed top-0 left-0 w-screen h-screen bg-black-o-70 z-2 flex items-center justify-center";
      app.appendChild(pp);
      pp.innerHTML = render();

      const close = document.getElementById("close");
      const form = document.getElementById("form");
      const cost = form[0];

      close.onclick = () => {
        emit("close", {
          showModal: false,
        });
      };

      form.onsubmit = (e) => {
        e.preventDefault();
        edit(parseInt(cost.value))
          ? ((cost.value = ""),
            emit("close", {
              showModal: false,
            }))
          : null;
      };
    }
  }

  function edit(cost) {
    if (cost && cost >= 0) {
      emit("editActual", { actual: cost });
      return true;
    } else {
      alert("Balance should be not empty or less than 0");
      return false;
    }
  }

  const render = () =>
    /*html*/
    `
      <div class="card flex flex-col p-1">
        <div class="head flex w-full items-center justify-around">
          <h1 class="title w-2/3">EDIT CURRENT BALANCE</h1>
          <button id="close" class="action-secondary w-1/3 ml-1">&times;</button>
        </div>
        <form class="body | w-full my-1 p-1 flex flex-col" id="form">
          <input type="number" class="w-full p-1" placeholder="balance" autofocus/>
          <button id="save" class="action my-1" type="submit">SAVE</button>
        </form>
      </div>
    `;
  return { render, script };
}
