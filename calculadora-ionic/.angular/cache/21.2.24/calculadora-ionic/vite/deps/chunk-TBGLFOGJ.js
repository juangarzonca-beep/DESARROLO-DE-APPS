import {
  d,
  n
} from "./chunk-NQOKWQRU.js";
import {
  d as d2
} from "./chunk-FBOO75ZN.js";

// node_modules/@ionic/core/components/p-BXD1texH.js
var o = () => n.get("experimentalCloseWatcher", false) && void 0 !== d2 && "CloseWatcher" in d2;
var i = () => {
  document.addEventListener("backbutton", (() => {
  }));
};
var r = () => {
  const e = document;
  let i2 = false;
  const r2 = () => {
    if (i2) return;
    let t = 0, o2 = [];
    const r3 = new CustomEvent("ionBackButton", { bubbles: false, detail: { register(e2, n2) {
      o2.push({ priority: e2, handler: n2, id: t++ });
    } } });
    e.dispatchEvent(r3);
    const a2 = () => {
      if (o2.length > 0) {
        let t2 = { priority: Number.MIN_SAFE_INTEGER, handler: () => {
        }, id: -1 };
        o2.forEach(((e2) => {
          e2.priority >= t2.priority && (t2 = e2);
        })), i2 = true, o2 = o2.filter(((e2) => e2.id !== t2.id)), (async (t3) => {
          try {
            if (t3?.handler) {
              const e2 = t3.handler(a2);
              null != e2 && await e2;
            }
          } catch (t4) {
            d("[ion-app] - Exception in startHardwareBackButton:", t4);
          }
        })(t2).then((() => i2 = false));
      }
    };
    a2();
  };
  if (o()) {
    let e2;
    const n2 = () => {
      e2?.destroy(), e2 = new d2.CloseWatcher(), e2.onclose = () => {
        r2(), n2();
      };
    };
    n2();
  } else e.addEventListener("backbutton", r2);
};
var a = 100;
var c = 99;

export {
  o,
  i,
  r,
  a,
  c
};
//# sourceMappingURL=chunk-TBGLFOGJ.js.map
