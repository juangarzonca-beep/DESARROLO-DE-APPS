import {
  M,
  r
} from "./chunk-EJL3KWHW.js";

// node_modules/@ionic/core/components/p-ls85vUWB.js
var o = (o2, r2) => {
  const a = "40px", n = "back" === r2.direction, s = r2.leavingEl, e = M(r2.enteringEl), c = e.querySelector("ion-toolbar"), p = r();
  if (p.addElement(e).fill("both").beforeRemoveClass("ion-page-invisible"), n ? p.duration((r2.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)") : p.duration((r2.duration ?? 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${a})`, "translateY(0px)").fromTo("opacity", 0.01, 1), c) {
    const i = r();
    i.addElement(c), p.addAnimation(i);
  }
  if (s && n) {
    p.duration((r2.duration ?? 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
    const o3 = r();
    o3.addElement(M(s)).onFinish(((t) => {
      1 === t && o3.elements.length > 0 && o3.elements[0].style.setProperty("display", "none");
    })).fromTo("transform", "translateY(0px)", `translateY(${a})`).fromTo("opacity", 1, 0), p.addAnimation(o3);
  }
  return p;
};

export {
  o
};
//# sourceMappingURL=chunk-G2ETURLI.js.map
