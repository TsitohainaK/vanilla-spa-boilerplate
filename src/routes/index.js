import Layout from "../components/layout.js"
import Home from "../views/home/home.js";
import AddConso from "../views/addConso/addConso.js";
export default routes =  {
  home: {
    name: "home",
    path: "/",
    render: Layout(Home()).render,
    script: Layout(Home()).script
  },

  addConso: {
    name: "add consomation",
    path: "/add-conso",
    render: Layout(AddConso()).render,
    script: Layout(AddConso()).script
  },
}