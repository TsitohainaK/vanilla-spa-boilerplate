export function storageGet(key){
    return JSON.parse(localStorage.getItem(key));
  }

export function storageSet(key, value){
    localStorage.setItem(key, value);
  }

export function storageRemove(key){
    localStorage.removeItem(key);
  }
