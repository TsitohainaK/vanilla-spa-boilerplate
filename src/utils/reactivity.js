export function watch(refs, onChange, deep = false) {
  function defineProperty(obj, deep) {
    if (deep) {
      function defineProps(obj) {
        for (const k in obj) {
          if (typeof obj[k] === "object" && !Array.isArray(obj[k])) {
            defineProps(obj[k]);
          } else {
            let ov = obj[k];
            Object.defineProperty(obj, k, {
              get: function () {
                return this[`_${k}`] || ov;
              },
              set: function (v) {
                onChange(ov,v);
                this[`_${k}`] = v;
              },
            });
          }
        }
      }
      defineProps(obj);
    } else {
      for (const k in obj) {
        let ov = obj[k];
        Object.defineProperty(obj, k, {
          get: function () {
            return this[`_${k}`] || ov;
          },
          set: function (v) {
            this[`_${k}`] = v;
            onChange(ov,v);
          },
        });
      }
    }
  }

  if (Array.isArray(refs)) {
    refs.forEach((ref) => {
      defineProperty(ref, deep);
    });
    return;
  } else {
    defineProperty(refs, deep);
  }
}

export function ref(v) {
  const i = { value: v };

  return new Proxy(i, {
    get: function (t, k) {
      return t[k];
    },
    set: function (t, k, v) {
      if (k in t) {
        t[k] = v;
      } else {
        throw new Error("Cannot add a new property to a ref");
      }
      return true;
    },
  });
}

export function emit(name, data) {
  const customEvent = new CustomEvent(name, { detail: { ...data } });
  window.dispatchEvent(customEvent);
}
