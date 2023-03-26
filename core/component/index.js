import { css, s } from "../virtualDom/index.js";

export function createComponent(elt,scriptExactPath,cssExatPaths){
  if(scriptExactPath) s(scriptExactPath)
  if(cssExatPaths) css(cssExatPaths)
  return elt();
}