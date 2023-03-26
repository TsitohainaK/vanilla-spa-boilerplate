/**
 * a component can be passed for 404 error
 * @param {*} fallback 
 * @returns 
 */
export const createRoute = (routes, fallback = () =>"Error 404 not found") => {
  const path = window.location.pathname;
  const route = Object.values(routes).find((route) => route.path == path);
  return route ? route : {element: fallback};
};

/**
 * history's pushState paired with an event pushstate
 */
const eventedPushState = (url, title = "", state = {}) => {
  const pushChangeEvent = new CustomEvent("pushstate", { detail: { url } });
  history.pushState(state, title, url);
  window.dispatchEvent(pushChangeEvent);
};

/**
 * use div with class link as routerLink to navigate without refreshing
 */
export const routerLink = () => {
  const links = document.querySelectorAll("a");
  const linksArr = Array.from(links);
  if(linksArr){
    linksArr.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const url = e.target.getAttribute("href");
        eventedPushState(url);
      });
    });
  }
};

export const navigateTo = (url) => {
  if(!url) throw new Error("navigateTo need an url");
  eventedPushState(url);
}

const removeOtherScripts = () => {
  //starting at 1 to not remove the app script
  const scripts = document.body.querySelectorAll('script');
  for (let i = 1; i < scripts.length; i++) {
    scripts[i].remove();
  }
}

export const onRouteChange = (cb) => {
  window.addEventListener(
    "pushstate",
    () => {
      removeOtherScripts();
      cb();
    },
    false
  );

  window.addEventListener(
    "popstate",
    () => {
      removeOtherScripts();
      cb();
    },
    false
  );
}
