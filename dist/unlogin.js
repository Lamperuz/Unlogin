const i = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"];
let o;
const r = (e, t) => {
  clearTimeout(o), o = setTimeout(() => {
    t();
  }, e);
}, d = (e = 6e4, t) => {
  if (window) {
    const s = { passive: !0 };
    for (const n of i)
      window.addEventListener(
        n,
        () => {
          r(e, t);
        },
        s
      );
  }
}, c = {
  initIdle: d
};
export {
  c as default
};
