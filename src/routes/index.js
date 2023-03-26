import Home from "../views/home/home_view.js";
import Test from "../views/test/test_view.js";

const routes =  {
  home: {
    name: "home",
    path: "/",
    element: Home
  },
  test: {
    name: "test",
    path: "/test",
    element: Test,
    title: 'Test page'
  }
}

export default routes;