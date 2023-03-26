import useMoneyStore from "../../store/moneyStore.js";
import useConsoStore from "../../store/consoStore.js";
import { storageGet, storageSet } from "../../utils/localStorage.js";
import Consomation from "./consomation.js";
import { ref, watch } from "../../../core/reactivity.js";
import ChangeCurrendBalanceModal from "./changeCurrentBalanceModal.js";

export default function Home() {
  const formater = Intl.NumberFormat("fr");
  const moneyStore = useMoneyStore();
  const consoStore = useConsoStore();

  moneyStore.setTodays();

  function script() {
    const showModal = ref(false);
    const moneyStorage = storageGet("money");
    const consoStorage = storageGet("conso");

    if (moneyStorage) moneyStore.setMoney(moneyStorage);
    if (consoStorage) consoStore.setConso(consoStorage);

    const actualElt = document.getElementById("actual");
    const todaysElt = document.getElementById("todays");
    const consosElt = document.getElementById("consoselt");
    const cardCurrentElt = document.getElementById("cardCurrent");

    cardCurrentElt.addEventListener("click", () => {
      showModal.value = true;
    });

    const renderOverview = (actual = null, todays = null) => {
      actualElt.innerHTML = actual || formater.format(moneyStore.actual.value);
      todaysElt.innerHTML = todays || formater.format(moneyStore.todays.value);
    };
    renderOverview();
    // consosElt.innerHTML = consos;

    
    const renderConsomations = () => {
      consosElt.innerHTML = consoStore.consos.value.map((conso) => Consomation(conso).render()).join("");
      // consoStore.consos.value.map((conso) => Consomation(conso).script(conso));
    };
    renderConsomations();

    consoStore.consos.value
    ? consoStore.consos.value.map((conso) => {
      console.log(conso);
        Consomation(conso).script(conso);
      })
    : null;


    addEventListener("close", (e) => {
      showModal.value = e.detail.showModal;
    });
    addEventListener("editActual", (e) => {
      moneyStore.setActual(e.detail.actual);
      storageSet(
        "money",
        JSON.stringify({ actual: moneyStore.actual.value, todays: moneyStore.todays.value})
      );
    });

    watch(consoStore.consos, ()=>{
      console.log(consoStore.consos.value);
      renderConsomations();
      console.log("test");
      moneyStore.setTodays();
      console.log("watch conso", moneyStore.todays.value);
    });
    watch(showModal, (prev, v) => {
      ChangeCurrendBalanceModal().script(v);
    });
    watch(
      moneyStore.actual,
      (prev, value) => {
        renderOverview();
      }
    );
    watch(
      moneyStore.todays,
      (prev, value) => {
      console.log("watch todays", moneyStore.todays.value);

        storageSet("money",
          JSON.stringify({ actual: moneyStore.actual.value, todays: moneyStore.todays.value})
        )
        renderOverview();
      }
    );
  }

  const render = () =>
    /*html*/
    `
  <div id="content" class="bg-gray h-content p-2 flex flex-col">
    <div class="my-1 uppercase">Overview</div>
    <div class="overview | flex w-full">
      <div class="card w-1/2 " id="cardCurrent" style="cursor:pointer">
        <div class="title">Current balance</div>
        <div class="content">
            <h1 class="text-xlarge font-bolder text-right"><span id="actual">0</span>Ar</h1>
          </div>
      </div>
      <div class="card w-1/2">
        <div class="title">Today's consomation</div>
        <div class="content">
          <h1 class="text-xlarge font-bolder text-right"><span id="todays">0</span>Ar</h1>
        </div>
      </div>
    </div>
    <div class="my-1 uppercase">Consomations</div>
    <div id="consoselt" class="category flex flex-col">${
      consoStore.consos.value ? consoStore.consos.value.map((conso) => Consomation(conso).render()).join("") : ""
    }</div>
  </div>
  `;

  return {
    render,
    script,
  };
}
