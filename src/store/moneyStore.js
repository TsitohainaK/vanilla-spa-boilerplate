import { ref } from "../utils/reactivity.js";
import useConsoStore from "./consoStore.js";

const actual = ref(0);
const todays = ref(0);

export default function useMoneyStore() {
  const consoStore = useConsoStore();

  function setMoney(_money) {
    actual.value = _money.actual;
    todays.value = _money.todays;
  }

  function setActual(_actual) {
    actual.value = _actual;
  }

  function setTodays() {
    const date = new Date();
    const todayFormated = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

    let today = 0;

    if (consoStore.consos.value && consoStore.consos.value !== []) {
      consoStore.consos.value.forEach((conso) => {
        if (conso.formatedDate === todayFormated) {
          today += conso.cost;
        }
      });
    }

    todays.value = today;
  }

  return { setMoney, setActual, setTodays, actual, todays };
}
