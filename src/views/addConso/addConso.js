import Conso from "./conso.js";
import useMoneyStore from "../../store/moneyStore.js";
import useConsoStore from "../../store/consoStore.js";
import { storageSet } from "../../utils/localStorage.js";
import { navigateTo } from "../../routes/router.js";
import { ref } from "../../utils/reactivity.js";

export default function AddConso() {
  const moneyStore = useMoneyStore();
  const consoStore = useConsoStore();
  
  function script() {
    const form = document.getElementById("addConsoForm");
    const inName = form[0];
    const inCost = form[1];
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (inName.value.trim() == "" || inCost.value.trim() == "" || parseInt(inCost.value) <= 0) {
        alert("All field must be filled and cost should be positif number");
        return;
      }
      const conso = new Conso(inName.value, parseInt(inCost.value));
      consoStore.addConso(conso);

      moneyStore.setActual(moneyStore.actual.value - parseInt(inCost.value));
      moneyStore.setTodays();

      storageSet("money", JSON.stringify({actual: moneyStore.actual.value, todays: moneyStore.todays.value}));
      storageSet("conso", JSON.stringify(consoStore.consos.value));

      inName.value = "";
      inCost.value = "";
      navigateTo("/");
    });
  }

  const render = () =>
    /*html*/
    `
  <div id="addConsomation" class="bg-gray flex-col h-content p-2">
    <div class="my-1 uppercase">ADD CONSOMATION</div>
    <form id="addConsoForm" class="card">
      <label for="name">Name</label>
      <input id="name" type="text" class="in-text | w-full" placeholder="name" />
      <label for="cost">Cost</label>
      <input id="cost" type="number" class="in-text | w-full" placeholder="cost" />
      <button id="btnMain" type="submit">ADD</button>
    </form>
  </div>
  `;

  return {
    render,
    script,
  };
}
