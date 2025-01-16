const i = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"];
let o;
const r = (e, t) => {
  clearTimeout(o), o = setTimeout(() => {
    t();
  }, e);
}, c = (e, t = 3e4) => {
  if (window) {
    const n = { passive: !0 };
    for (const s of i)
      window.addEventListener(
        s,
        () => {
          r(t, e);
        },
        n
      );
  }
}, d = {
  initIdle: c
};
export {
  d as default
};
