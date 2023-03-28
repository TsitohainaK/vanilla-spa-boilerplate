import { createRoute, onRouteChange, routerLink } from "./router/index.js";
import { title } from "./virtualDom/index.js";

export default function createApp(appName,rootElt, routes) {
  const render = () => {
    const route = createRoute(routes);
    if(route.title) title(route.title);
    else title(appName)
    rootElt.innerHTML = '';
    rootElt.append(route.element())
    routerLink();
  };

  render();
  onRouteChange(render);
}
