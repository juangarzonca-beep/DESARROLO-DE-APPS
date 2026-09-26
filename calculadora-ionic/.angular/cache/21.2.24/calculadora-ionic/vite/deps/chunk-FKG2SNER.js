import {
  n
} from "./chunk-IMQNRPZR.js";
import {
  h
} from "./chunk-NQOKWQRU.js";

// node_modules/@ionic/core/components/p-lbvS3btC.js
var r = "ion-content";
var e = ".ion-content-scroll-host";
var n2 = `${r}, ${e}`;
var t = (o) => "ION-CONTENT" === o.tagName;
var a = async (s) => t(s) ? (await new Promise(((r2) => n(s, r2))), s.getScrollElement()) : s;
var i = (o) => o.querySelector(e) || o.querySelector(n2);
var l = (o) => o.closest(n2);
var f = (o) => o.querySelector(e);
var u = (o) => {
  if (t(o)) return o.querySelector("ion-refresher");
  const s = o.closest(r);
  if (null === s) return null;
  const e2 = f(s);
  return null !== e2 && e2.contains(o) ? s.querySelector("ion-refresher") : null;
};
var c = (o, s) => t(o) ? o.scrollToTop(s) : Promise.resolve(o.scrollTo({ top: 0, left: 0, behavior: "smooth" }));
var h2 = (o, s, r2, e2) => t(o) ? o.scrollByPoint(s, r2, e2) : Promise.resolve(o.scrollBy({ top: r2, left: s, behavior: e2 > 0 ? "smooth" : "auto" }));
var m = (o) => h(o, r);
var p = (o) => {
  if (t(o)) {
    const s = o.scrollY;
    return o.scrollY = false, s;
  }
  return o.style.setProperty("overflow", "hidden"), true;
};
var v = (o, s) => {
  t(o) ? o.scrollY = s : o.style.removeProperty("overflow");
};

export {
  r,
  e,
  t,
  a,
  i,
  l,
  f,
  u,
  c,
  h2 as h,
  m,
  p,
  v
};
//# sourceMappingURL=chunk-FKG2SNER.js.map
