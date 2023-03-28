/**
 * a component can be passed for 404 error
 * @param {string | HTMLElement} fallback 
 * @returns 
 */
export const createRoute = (routes, fallback = 'Error: page not found') => {
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
        const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);
        if(valid){
          const target = e.target.getAttribute("target") || "_blank";
          window.open(url,target);
          return;
        }
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
    (e) => {
      e.preventDefault()
      removeOtherScripts();
      cb();
    },
    true
  );

  window.addEventListener(
    "popstate",
    (e) => {
      e.preventDefault()
      removeOtherScripts();
      cb();
    },
    true
  );
}
