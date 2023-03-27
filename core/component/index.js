import { css, s } from "../virtualDom/index.js";

/**
 * 
 * @param {() => HTMLElement | string} elt callback function returning the element creation
 * @param {string?} scriptExactPath 
 * @param {string | string[]?} cssExatPaths 
 * @returns 
 */
export function createComponent(elt,scriptExactPath,cssExatPaths){
  if(scriptExactPath) s(scriptExactPath)
  if(cssExatPaths) css(cssExatPaths)
  return elt();
}