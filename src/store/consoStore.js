import { ref } from "../../core/reactivity/index.js";

const consos = ref([]);

export default function useConsoStore() {
  function setConso(_conso) {
    consos.value = _conso;
  }

  function addConso(_conso) {
    consos.value.push(_conso);
  }

  function removeConso(_conso) {
    consos.value = consos.value.filter((conso) => {
      return conso.id !== _conso.id;
    });
  }

  return {
    setConso,
    addConso,
    removeConso,
    consos,
  };
}
