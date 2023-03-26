import { createRoute, onRouteChange, routerLink } from "./router/index.js";

export default function createApp(rootElt, routes) {
  const render = () => {
    const route = createRoute(routes);
    rootElt.append(route.render());
    route.script ? route.script() : null;
    routerLink();
  };

  render();
  onRouteChange(render);
}
