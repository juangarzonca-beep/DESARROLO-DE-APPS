import {
  a as a2,
  c as c3,
  o as o4
} from "./chunk-TBGLFOGJ.js";
import {
  o as o5
} from "./chunk-IRAUO644.js";
import {
  i,
  n as n3
} from "./chunk-ESVX6UJY.js";
import {
  r as r3
} from "./chunk-5NF7IPLD.js";
import {
  i as i2,
  l as l2,
  m as m2,
  p as p2,
  t as t2,
  u,
  v
} from "./chunk-FKG2SNER.js";
import {
  Title
} from "./chunk-LSHRPFQO.js";
import {
  NgControl
} from "./chunk-XPUUTE6Y.js";
import {
  HashLocationStrategy,
  LOCATION_INITIALIZED,
  Location,
  LocationStrategy,
  PRECOMMIT_HANDLER_SUPPORTED,
  PathLocationStrategy,
  PlatformLocation,
  PlatformNavigation,
  ViewportScroller
} from "./chunk-QURUQ3Z3.js";
import {
  APP_BOOTSTRAP_LISTENER,
  APP_INITIALIZER,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Compiler,
  Component,
  Console,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  EventEmitter,
  HostAttributeToken,
  HostListener,
  INTERNAL_APPLICATION_ERROR_HANDLER,
  IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
  IS_HYDRATION_DOM_REUSE_ENABLED,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgModuleFactory$1,
  NgZone,
  Observable,
  Optional,
  Output,
  PendingTasksInternal,
  Renderer2,
  RuntimeError,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  Version,
  ViewChild,
  ViewContainerRef,
  __decorate,
  afterNextRender,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  concat,
  concatMap,
  createComponent,
  createEnvironmentInjector,
  defer,
  distinctUntilChanged,
  effect,
  filter,
  finalize,
  first,
  formatRuntimeError,
  from,
  fromEvent,
  inject,
  input,
  isInjectable,
  isNgModule,
  isObservable,
  isPromise,
  isStandalone,
  linkedSignal,
  makeEnvironmentProviders,
  map,
  mergeAll,
  mergeMap,
  of,
  performanceMarkFeature,
  pipe,
  promiseWithResolvers,
  provideAppInitializer,
  reflectComponentType,
  runInInjectionContext,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  untracked,
  ɵɵNgOnChangesFeature,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵviewQuery
} from "./chunk-VJLMFQXN.js";
import {
  U,
  W,
  c as c2,
  l,
  r,
  r2,
  s as s3,
  t
} from "./chunk-EJL3KWHW.js";
import {
  b,
  c,
  d as d3,
  f,
  h,
  m,
  n as n2,
  o as o3,
  p,
  s as s2
} from "./chunk-IMQNRPZR.js";
import {
  A,
  J,
  Jn,
  Lt,
  Pt,
  Qt,
  Rt,
  a,
  d,
  e,
  n,
  o,
  oe,
  qt,
  s
} from "./chunk-NQOKWQRU.js";
import {
  d as d2,
  o as o2
} from "./chunk-FBOO75ZN.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@ionic/angular/dist/common/providers/dom-controller.js
var DomController = class _DomController {
  /**
   * Schedules a task to run during the READ phase of the next frame.
   * This task should only read the DOM, but never modify it.
   */
  read(cb) {
    getQueue().read(cb);
  }
  /**
   * Schedules a task to run during the WRITE phase of the next frame.
   * This task should write the DOM, but never READ it.
   */
  write(cb) {
    getQueue().write(cb);
  }
  /** @nocollapse */
  static ɵfac = function DomController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _DomController,
    factory: _DomController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var getQueue = () => {
  const win = typeof window !== "undefined" ? window : null;
  if (win != null) {
    const Ionic = win.Ionic;
    if (Ionic?.queue) {
      return Ionic.queue;
    }
    return {
      read: (cb) => win.requestAnimationFrame(cb),
      write: (cb) => win.requestAnimationFrame(cb)
    };
  }
  return {
    read: (cb) => cb(),
    write: (cb) => cb()
  };
};

// node_modules/@ionic/angular/dist/common/providers/menu-controller.js
var MenuController = class {
  menuController;
  constructor(menuController) {
    this.menuController = menuController;
  }
  /**
   * Programmatically open the Menu.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu is fully opened
   */
  open(menuId) {
    return this.menuController.open(menuId);
  }
  /**
   * Programmatically close the Menu. If no `menuId` is given as the first
   * argument then it'll close any menu which is open. If a `menuId`
   * is given then it'll close that exact menu.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu is fully closed
   */
  close(menuId) {
    return this.menuController.close(menuId);
  }
  /**
   * Toggle the menu. If it's closed, it will open, and if opened, it
   * will close.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu has been toggled
   */
  toggle(menuId) {
    return this.menuController.toggle(menuId);
  }
  /**
   * Used to enable or disable a menu. For example, there could be multiple
   * left menus, but only one of them should be able to be opened at the same
   * time. If there are multiple menus on the same side, then enabling one menu
   * will also automatically disable all the others that are on the same side.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu, which is useful for chaining.
   */
  enable(shouldEnable, menuId) {
    return this.menuController.enable(shouldEnable, menuId);
  }
  /**
   * Used to enable or disable the ability to swipe open the menu.
   * @param shouldEnable  True if it should be swipe-able, false if not.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu, which is useful for chaining.
   */
  swipeGesture(shouldEnable, menuId) {
    return this.menuController.swipeGesture(shouldEnable, menuId);
  }
  /**
   * @param [menuId] Optionally get the menu by its id, or side.
   * @return Returns true if the specified menu is currently open, otherwise false.
   * If the menuId is not specified, it returns true if ANY menu is currenly open.
   */
  isOpen(menuId) {
    return this.menuController.isOpen(menuId);
  }
  /**
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns true if the menu is currently enabled, otherwise false.
   */
  isEnabled(menuId) {
    return this.menuController.isEnabled(menuId);
  }
  /**
   * Used to get a menu instance. If a `menuId` is not provided then it'll
   * return the first menu found. If a `menuId` is `left` or `right`, then
   * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
   * provided, then it'll try to find the menu using the menu's `id`
   * property. If a menu is not found then it'll return `null`.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu if found, otherwise `null`.
   */
  get(menuId) {
    return this.menuController.get(menuId);
  }
  /**
   * @return Returns the instance of the menu already opened, otherwise `null`.
   */
  getOpen() {
    return this.menuController.getOpen();
  }
  /**
   * @return Returns an array of all menu instances.
   */
  getMenus() {
    return this.menuController.getMenus();
  }
  registerAnimation(name, animation) {
    return this.menuController.registerAnimation(name, animation);
  }
  isAnimating() {
    return this.menuController.isAnimating();
  }
  _getOpenSync() {
    return this.menuController._getOpenSync();
  }
  _createAnimation(type, menuCmp) {
    return this.menuController._createAnimation(type, menuCmp);
  }
  _register(menu) {
    return this.menuController._register(menu);
  }
  _unregister(menu) {
    return this.menuController._unregister(menu);
  }
  _setOpen(menu, shouldOpen, animated) {
    return this.menuController._setOpen(menu, shouldOpen, animated);
  }
};

// node_modules/@angular/router/fesm2022/_router-chunk.mjs
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
var ParamsAsMap = class {
  params;
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v4 = this.params[name];
      return Array.isArray(v4) ? v4[0] : v4;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v4 = this.params[name];
      return Array.isArray(v4) ? v4 : [v4];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function matchParts(routeParts, urlSegments, posParams) {
  for (let i5 = 0; i5 < routeParts.length; i5++) {
    const part = routeParts[i5];
    const segment = urlSegments[i5];
    const isParameter = part[0] === ":";
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return false;
    }
  }
  return true;
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  const wildcardIndex = parts.indexOf("**");
  if (wildcardIndex === -1) {
    if (parts.length > segments.length) {
      return null;
    }
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
      return null;
    }
    const posParams2 = {};
    const consumed = segments.slice(0, parts.length);
    if (!matchParts(parts, consumed, posParams2)) {
      return null;
    }
    return {
      consumed,
      posParams: posParams2
    };
  }
  if (wildcardIndex !== parts.lastIndexOf("**")) {
    return null;
  }
  const pre = parts.slice(0, wildcardIndex);
  const post = parts.slice(wildcardIndex + 1);
  if (pre.length + post.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && segmentGroup.hasChildren() && route.path !== "**") {
    return null;
  }
  const posParams = {};
  if (!matchParts(pre, segments.slice(0, pre.length), posParams)) {
    return null;
  }
  if (!matchParts(post, segments.slice(segments.length - post.length), posParams)) {
    return null;
  }
  return {
    consumed: segments,
    posParams
  };
}
function firstValueFrom(source) {
  return new Promise((resolve, reject) => {
    source.pipe(first()).subscribe({
      next: (value) => resolve(value),
      error: (err) => reject(err)
    });
  });
}
function shallowEqualArrays(a6, b5) {
  if (a6.length !== b5.length) return false;
  for (let i5 = 0; i5 < a6.length; ++i5) {
    if (!shallowEqual(a6[i5], b5[i5])) return false;
  }
  return true;
}
function shallowEqual(a6, b5) {
  const k1 = a6 ? getDataKeys(a6) : void 0;
  const k2 = b5 ? getDataKeys(b5) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i5 = 0; i5 < k1.length; i5++) {
    key = k1[i5];
    if (!equalArraysOrString(a6[key], b5[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a6, b5) {
  if (Array.isArray(a6) && Array.isArray(b5)) {
    if (a6.length !== b5.length) return false;
    const aSorted = [...a6].sort();
    const bSorted = [...b5].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a6 === b5;
  }
}
function last(a6) {
  return a6.length > 0 ? a6[a6.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
function wrapIntoPromise(value) {
  if (isObservable(value)) {
    return firstValueFrom(value);
  }
  return Promise.resolve(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
function isActive(url, router, matchOptions) {
  const urlTree = url instanceof UrlTree ? url : router.parseUrl(url);
  return computed(() => containsTree(router.lastSuccessfulNavigation()?.finalUrl ?? new UrlTree(), urlTree, __spreadValues(__spreadValues({}, subsetMatchOptions), matchOptions)));
}
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments)) return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren) return false;
  for (const c9 in containee.children) {
    if (!container.children[c9]) return false;
    if (!equalSegmentGroups(container.children[c9], containee.children[c9], matrixParams)) return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams)) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams)) return false;
    for (const c9 in containee.children) {
      if (!container.children[c9]) return false;
      if (!containsSegmentGroup(container.children[c9], containee.children[c9], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams)) return false;
    if (!container.children[PRIMARY_OUTLET]) return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i5) => {
    return paramCompareMap[options](containerPaths[i5].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  root;
  queryParams;
  fragment;
  _queryParamMap;
  constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  segments;
  children;
  parent = null;
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    Object.values(children).forEach((v4) => v4.parent = this);
  }
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  path;
  parameters;
  _parameterMap;
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    this._parameterMap ??= convertToParamMap(this.parameters);
    return this._parameterMap;
  }
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a6, i5) => shallowEqual(a6.parameters, bs[i5].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every((a6, i5) => a6.path === bs[i5].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var UrlSerializer = class _UrlSerializer {
  static ɵfac = function UrlSerializer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlSerializer)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _UrlSerializer,
    factory: () => (() => new DefaultUrlSerializer())(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new DefaultUrlSerializer()
    }]
  }], null, null);
})();
var DefaultUrlSerializer = class {
  parse(url) {
    const p6 = new UrlParser(url);
    return new UrlTree(p6.parseRootSegment(), p6.parseQueryParams(), p6.parseFragment());
  }
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p6) => serializePath(p6)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k2, v4]) => {
      if (k2 !== PRIMARY_OUTLET) {
        children.push(`${k2}:${serializeSegment(v4, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v4, k2) => {
      if (k2 === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k2}:${serializeSegment(v4, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s6) {
  return encodeURIComponent(s6).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s6) {
  return encodeUriString(s6).replace(/%3B/gi, ";");
}
function encodeUriFragment(s6) {
  return encodeURI(s6);
}
function encodeUriSegment(s6) {
  return encodeUriString(s6).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s6) {
  return decodeURIComponent(s6);
}
function decodeQuery(s6) {
  return decode(s6.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v4) => `${encodeUriQuery(name)}=${encodeUriQuery(v4)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s6) => s6);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SLOW_ELEMENTS_SENTINEL = 1073741824;
function setUrlDerivedKey(target, key, value) {
  if (Number(key) >= 32 && !Object.hasOwn(target, SLOW_ELEMENTS_SENTINEL)) {
    target[SLOW_ELEMENTS_SENTINEL] = value;
    delete target[SLOW_ELEMENTS_SENTINEL];
  }
  target[key] = value;
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  url;
  remaining;
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    while (this.consumeOptional("/")) {
    }
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren(depth = 0) {
    if (depth > 50) {
      throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && "URL is too deep");
    }
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true, depth);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false, depth);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    setUrlDerivedKey(params, decode(key), decode(value));
  }
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  parseParens(allowPrimary, depth) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren(depth + 1);
      const child = Object.keys(children).length === 1 && children[PRIMARY_OUTLET] ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      setUrlDerivedKey(segments, outletName ?? PRIMARY_OUTLET, child);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        setUrlDerivedKey(newChildren, grandChildOutlet, grandChild);
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      setUrlDerivedKey(newChildren, childOutlet, childCandidate);
    }
  }
  const s6 = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s6);
}
function mergeTrivialChildren(s6) {
  if (s6.numberOfChildren === 1 && s6.children[PRIMARY_OUTLET]) {
    const c9 = s6.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s6.segments.concat(c9.segments), c9.children);
  }
  return s6;
}
function isUrlTree(v4) {
  return v4 instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null, urlSerializer = new DefaultUrlSerializer()) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment, urlSerializer);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment, urlSerializer) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment, urlSerializer);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment, urlSerializer);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment, urlSerializer);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function normalizeQueryParams(k2, v4, urlSerializer) {
  k2 ||= "ɵ";
  const tree2 = new UrlTree();
  tree2.queryParams = {
    [k2]: v4
  };
  return urlSerializer.parse(urlSerializer.serialize(tree2)).queryParams[k2];
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment, urlSerializer) {
  const qp = {};
  for (const [key, value] of Object.entries(queryParams ?? {})) {
    qp[key] = Array.isArray(value) ? value.map((v4) => normalizeQueryParams(key, v4, urlSerializer)) : normalizeQueryParams(key, value, urlSerializer);
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c9]) => {
    if (c9 === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c9, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") ;
        else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  segmentGroup;
  processChildren;
  index;
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g3 = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g3 = g3.parent;
    if (!g3) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g3.segments.length;
  }
  return new Position(g3, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m5 = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m5.commandIndex);
  if (m5.match && m5.pathIndex < segmentGroup.segments.length) {
    const g3 = new UrlSegmentGroup(segmentGroup.segments.slice(0, m5.pathIndex), {});
    g3.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m5.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g3, 0, slicedCommands);
  } else if (m5.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m5.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m5.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o12) => o12 !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length) return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0) break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path)) return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path)) return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i5 = 0;
  while (i5 < commands.length) {
    const command = commands[i5];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i5 === 0 && isMatrixParams(commands[0])) {
      const p6 = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p6.path, stringify(commands[0])));
      i5++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i5 < commands.length - 1 ? commands[i5 + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i5 += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i5++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k2, v4]) => res[k2] = `${v4}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var EventType;
(function(EventType2) {
  EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
  EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
  EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
  EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
  EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
  EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
  EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
  EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
  EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
  EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
  EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
  EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
  EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
  EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
  EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
  EventType2[EventType2["Scroll"] = 15] = "Scroll";
  EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
})(EventType || (EventType = {}));
var RouterEvent = class {
  id;
  url;
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  type = EventType.NavigationStart;
  navigationTrigger;
  restoredState;
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  urlAfterRedirects;
  type = EventType.NavigationEnd;
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
  }
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancellationCode;
(function(NavigationCancellationCode2) {
  NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
  NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
  NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
  NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
  NavigationCancellationCode2[NavigationCancellationCode2["Aborted"] = 4] = "Aborted";
})(NavigationCancellationCode || (NavigationCancellationCode = {}));
var NavigationSkippedCode;
(function(NavigationSkippedCode2) {
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
})(NavigationSkippedCode || (NavigationSkippedCode = {}));
var NavigationCancel = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationCancel;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
function isRedirectingEvent(event) {
  return event instanceof NavigationCancel && (event.code === NavigationCancellationCode.Redirect || event.code === NavigationCancellationCode.SupersededByNewNavigation);
}
var NavigationSkipped = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationSkipped;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
};
var NavigationError = class extends RouterEvent {
  error;
  target;
  type = EventType.NavigationError;
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
  }
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.RoutesRecognized;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.GuardsCheckStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  shouldActivate;
  type = EventType.GuardsCheckEnd;
  constructor(id, url, urlAfterRedirects, state, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveEnd;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  route;
  type = EventType.RouteConfigLoadStart;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  route;
  type = EventType.RouteConfigLoadEnd;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  snapshot;
  type = EventType.ChildActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  snapshot;
  type = EventType.ChildActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  snapshot;
  type = EventType.ActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  snapshot;
  type = EventType.ActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var Scroll = class {
  routerEvent;
  position;
  anchor;
  scrollBehavior;
  type = EventType.Scroll;
  constructor(routerEvent, position, anchor, scrollBehavior) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
    this.scrollBehavior = scrollBehavior;
  }
  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
};
var BeforeActivateRoutes = class {
};
var BeforeRoutesRecognized = class {
};
var RedirectRequest = class {
  url;
  navigationBehaviorOptions;
  constructor(url, navigationBehaviorOptions) {
    this.url = url;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
function isPublicRouterEvent(e4) {
  return !(e4 instanceof BeforeActivateRoutes) && !(e4 instanceof RedirectRequest) && !(e4 instanceof BeforeRoutesRecognized);
}
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case EventType.ActivationEnd:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ActivationStart:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationEnd:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationStart:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.GuardsCheckEnd:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case EventType.GuardsCheckStart:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.NavigationCancel:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationSkipped:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationEnd:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case EventType.NavigationError:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case EventType.NavigationStart:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.ResolveEnd:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.ResolveStart:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.RouteConfigLoadEnd:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case EventType.RouteConfigLoadStart:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case EventType.RoutesRecognized:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.Scroll:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}
var OutletContext = class {
  rootInjector;
  outlet = null;
  route = null;
  children;
  attachRef = null;
  get injector() {
    return this.route?.snapshot._environmentInjector ?? this.rootInjector;
  }
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
    this.children = new ChildrenOutletContexts(this.rootInjector);
  }
};
var ChildrenOutletContexts = class _ChildrenOutletContexts {
  rootInjector;
  contexts = /* @__PURE__ */ new Map();
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
  }
  onChildOutletCreated(childName, outlet) {
    const context = this.getOrCreateContext(childName);
    context.outlet = outlet;
    this.contexts.set(childName, context);
  }
  onChildOutletDestroyed(childName) {
    const context = this.getContext(childName);
    if (context) {
      context.outlet = null;
      context.attachRef = null;
    }
  }
  onOutletDeactivated() {
    const contexts = this.contexts;
    this.contexts = /* @__PURE__ */ new Map();
    return contexts;
  }
  onOutletReAttached(contexts) {
    this.contexts = contexts;
  }
  getOrCreateContext(childName) {
    let context = this.getContext(childName);
    if (!context) {
      context = new OutletContext(this.rootInjector);
      this.contexts.set(childName, context);
    }
    return context;
  }
  getContext(childName) {
    return this.contexts.get(childName) || null;
  }
  static ɵfac = function ChildrenOutletContexts_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChildrenOutletContexts)(ɵɵinject(EnvironmentInjector));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ChildrenOutletContexts,
    factory: _ChildrenOutletContexts.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenOutletContexts, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var Tree = class {
  _root;
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  parent(t7) {
    const p6 = this.pathFromRoot(t7);
    return p6.length > 1 ? p6[p6.length - 2] : null;
  }
  children(t7) {
    const n7 = findNode(t7, this._root);
    return n7 ? n7.children.map((t8) => t8.value) : [];
  }
  firstChild(t7) {
    const n7 = findNode(t7, this._root);
    return n7 && n7.children.length > 0 ? n7.children[0].value : null;
  }
  siblings(t7) {
    const p6 = findPath(t7, this._root);
    if (p6.length < 2) return [];
    const c9 = p6[p6.length - 2].children.map((c10) => c10.value);
    return c9.filter((cc) => cc !== t7);
  }
  pathFromRoot(t7) {
    return findPath(t7, this._root).map((s6) => s6.value);
  }
};
function findNode(value, node) {
  if (value === node.value) return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2) return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value) return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  value;
  children;
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  snapshot;
  constructor(root, snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(rootComponent, injector) {
  const snapshot = createEmptyStateSnapshot(rootComponent, injector);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent, injector) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {}, injector);
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d6) => d6[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= this.params.pipe(map((p6) => convertToParamMap(p6)));
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= this.queryParams.pipe(map((p6) => convertToParamMap(p6)));
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || routeConfig?.path === "" || !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  url;
  params;
  queryParams;
  fragment;
  data;
  outlet;
  component;
  routeConfig;
  _resolve;
  _resolvedData;
  _routerState;
  _paramMap;
  _queryParamMap;
  _environmentInjector;
  get title() {
    return this.data?.[RouteTitleKey];
  }
  constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve, environmentInjector) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
    this._environmentInjector = environmentInjector;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= convertToParamMap(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  url;
  constructor(url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c9) => setRouterState(state, c9));
}
function serializeNode(node) {
  const c9 = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c9}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a6, b5) {
  const equalUrlParams = shallowEqual(a6.params, b5.params) && equalSegments(a6.url, b5.url);
  const parentsMismatch = !a6.parent !== !b5.parent;
  return equalUrlParams && !parentsMismatch && (!a6.parent || equalParamsAndUrlSegments(a6.parent, b5.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var ROUTER_OUTLET_DATA = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "RouterOutlet data" : "");
var RouterOutlet = class _RouterOutlet {
  activated = null;
  get activatedComponentRef() {
    return this.activated;
  }
  _activatedRoute = null;
  name = PRIMARY_OUTLET;
  activateEvents = new EventEmitter();
  deactivateEvents = new EventEmitter();
  attachEvents = new EventEmitter();
  detachEvents = new EventEmitter();
  routerOutletData = input(...ngDevMode ? [void 0, {
    debugName: "routerOutletData"
  }] : []);
  parentContexts = inject(ChildrenOutletContexts);
  location = inject(ViewContainerRef);
  changeDetector = inject(ChangeDetectorRef);
  inputBinder = inject(INPUT_BINDER, {
    optional: true
  });
  supportsBindingToComponentInputs = true;
  ngOnChanges(changes) {
    if (changes["name"]) {
      const {
        firstChange,
        previousValue
      } = changes["name"];
      if (firstChange) {
        return;
      }
      if (this.isTrackedInParentContexts(previousValue)) {
        this.deactivate();
        this.parentContexts.onChildOutletDestroyed(previousValue);
      }
      this.initializeOutletWithName();
    }
  }
  ngOnDestroy() {
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  isTrackedInParentContexts(outletName) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }
  ngOnInit() {
    this.initializeOutletWithName();
  }
  initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        this.attach(context.attachRef, context.route);
      } else {
        this.activateWith(context.route, context.injector);
      }
    }
  }
  get isActivated() {
    return !!this.activated;
  }
  get component() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  detach() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    this.location.detach();
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    this.detachEvents.emit(cmp.instance);
    return cmp;
  }
  attach(ref, activatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.location.insert(ref.hostView);
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.attachEvents.emit(ref.instance);
  }
  deactivate() {
    if (this.activated) {
      const c9 = this.component;
      this.activated.destroy();
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c9);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component;
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(activatedRoute, childContexts, location.injector, this.routerOutletData);
    this.activated = location.createComponent(component, {
      index: location.length,
      injector,
      environmentInjector
    });
    this.changeDetector.markForCheck();
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activateEvents.emit(this.activated.instance);
  }
  static ɵfac = function RouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterOutlet)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RouterOutlet,
    selectors: [["router-outlet"]],
    inputs: {
      name: "name",
      routerOutletData: [1, "routerOutletData"]
    },
    outputs: {
      activateEvents: "activate",
      deactivateEvents: "deactivate",
      attachEvents: "attach",
      detachEvents: "detach"
    },
    exportAs: ["outlet"],
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterOutlet, [{
    type: Directive,
    args: [{
      selector: "router-outlet",
      exportAs: "outlet"
    }]
  }], null, {
    name: [{
      type: Input
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }],
    attachEvents: [{
      type: Output,
      args: ["attach"]
    }],
    detachEvents: [{
      type: Output,
      args: ["detach"]
    }],
    routerOutletData: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "routerOutletData",
        required: false
      }]
    }]
  });
})();
var OutletInjector = class {
  route;
  childContexts;
  parent;
  outletData;
  constructor(route, childContexts, parent, outletData) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
    this.outletData = outletData;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    if (token === ROUTER_OUTLET_DATA) {
      return this.outletData;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Router Input Binder" : "");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  outletDataSubscriptions = /* @__PURE__ */ new Map();
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  static ɵfac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
var ɵEmptyOutletComponent = class _ɵEmptyOutletComponent {
  static ɵfac = function ɵEmptyOutletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ɵEmptyOutletComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ɵEmptyOutletComponent,
    selectors: [["ng-component"]],
    exportAs: ["emptyRouterOutlet"],
    decls: 1,
    vars: 0,
    template: function _EmptyOutletComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "router-outlet");
      }
    },
    dependencies: [RouterOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵEmptyOutletComponent, [{
    type: Component,
    args: [{
      template: `<router-outlet />`,
      imports: [RouterOutlet],
      exportAs: "emptyRouterOutlet",
      changeDetection: ChangeDetectionStrategy.Eager
    }]
  }], null, null);
})();
function standardizeConfig(r9) {
  const children = r9.children && r9.children.map(standardizeConfig);
  const c9 = children ? __spreadProps(__spreadValues({}, r9), {
    children
  }) : __spreadValues({}, r9);
  if (!c9.component && !c9.loadComponent && (children || c9.loadChildren) && c9.outlet && c9.outlet !== PRIMARY_OUTLET) {
    c9.component = ɵEmptyOutletComponent;
  }
  return c9;
}
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c9) => createNode(routeReuseStrategy, c9));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c9) => createNode(routeReuseStrategy, c9));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p6 of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p6.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p6);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c9) {
  return new ActivatedRoute(new BehaviorSubject(c9.url), new BehaviorSubject(c9.params), new BehaviorSubject(c9.queryParams), new BehaviorSubject(c9.fragment), new BehaviorSubject(c9.data), c9.outlet, c9.component, c9);
}
var RedirectCommand = class {
  redirectTo;
  navigationBehaviorOptions;
  constructor(redirectTo, navigationBehaviorOptions) {
    this.redirectTo = redirectTo;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
var warnedAboutUnsupportedInputBinding = false;
var ActivateRoutes = class {
  routeReuseStrategy;
  futureState;
  currState;
  forwardEvent;
  inputBindingEnabled;
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v4) => {
      this.deactivateRouteAndItsChildren(v4, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c9) => {
      this.activateRoutes(c9, children[c9.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c9.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          context.attachRef = null;
          context.route = future;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  path;
  route;
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  component;
  route;
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p6) {
  const canActivateChild = p6.routeConfig ? p6.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0) return null;
  return {
    node: p6,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = /* @__PURE__ */ Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c9) => {
    getRouteGuards(c9, prevChildren[c9.value.outlet], contexts, futurePath.concat([c9.value]), checks);
    delete prevChildren[c9.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k2, v4]) => deactivateRouteAndItsChildren(v4, contexts.getContext(k2), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return runInInjectionContext(future._environmentInjector, () => mode(curr, future));
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r9 = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r9.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r9.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r9));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r9));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r9));
  }
}
function isFunction(v4) {
  return typeof v4 === "function";
}
function isBoolean(v4) {
  return typeof v4 === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e4) {
  return e4 instanceof EmptyError || e4?.name === "EmptyError";
}
var INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o12) => o12.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || isRedirect(result)) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function isRedirect(val) {
  return isUrlTree(val) || val instanceof RedirectCommand;
}
function abortSignalToObservable(signal2) {
  if (signal2.aborted) {
    return of(void 0).pipe(take(1));
  }
  return new Observable((subscriber) => {
    const handler = () => {
      subscriber.next();
      subscriber.complete();
    };
    signal2.addEventListener("abort", handler);
    return () => signal2.removeEventListener("abort", handler);
  });
}
function takeUntilAbort(signal2) {
  return takeUntil(abortSignalToObservable(signal2));
}
function checkGuards(forwardEvent) {
  return mergeMap((t7) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t7;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t7), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t7), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path), runCanActivate(futureSnapshot, check.route));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0) return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = futureARS._environmentInjector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p6) => getCanActivateChild(p6)).filter((_4) => _4 !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d6) => {
    return defer(() => {
      const guardsMapped = d6.guards.map((canActivateChild) => {
        const closestInjector = d6.node._environmentInjector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0) return of(true);
  const canDeactivateObservables = canDeactivate.map((c9) => {
    const closestInjector = currARS._environmentInjector;
    const guard = getTokenOrFunctionIdentity(c9, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer, abortSignal) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    const obs$ = wrapIntoObservable(guardVal);
    return abortSignal ? obs$.pipe(takeUntilAbort(abortSignal)) : obs$;
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (typeof result === "boolean") return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer, currentSnapshot, abortSignal) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0) return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments, currentSnapshot) : runInInjectionContext(injector, () => guard(route, segments, currentSnapshot));
    return wrapIntoObservable(guardVal).pipe(takeUntilAbort(abortSignal));
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class _NoMatch extends Error {
  segmentGroup;
  constructor(segmentGroup) {
    super();
    this.segmentGroup = segmentGroup || null;
    Object.setPrototypeOf(this, _NoMatch.prototype);
  }
};
var AbsoluteRedirect = class _AbsoluteRedirect extends Error {
  urlTree;
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
    Object.setPrototypeOf(this, _AbsoluteRedirect.prototype);
  }
};
function namedOutletsRedirect(redirectTo) {
  throw new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`);
}
function canLoadFails(route) {
  throw navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected);
}
var ApplyRedirects = class {
  urlSerializer;
  urlTree;
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  async lineralizeSegments(route, urlTree) {
    let res = [];
    let c9 = urlTree.root;
    while (true) {
      res = res.concat(c9.segments);
      if (c9.numberOfChildren === 0) {
        return res;
      }
      if (c9.numberOfChildren > 1 || !c9.children[PRIMARY_OUTLET]) {
        throw namedOutletsRedirect(`${route.redirectTo}`);
      }
      c9 = c9.children[PRIMARY_OUTLET];
    }
  }
  async applyRedirectCommands(segments, redirectTo, posParams, currentSnapshot, injector) {
    const redirect = await getRedirectResult(redirectTo, currentSnapshot, injector);
    if (redirect instanceof UrlTree) {
      throw new AbsoluteRedirect(redirect);
    }
    const newTree = this.applyRedirectCreateUrlTree(redirect, this.urlSerializer.parse(redirect), segments, posParams);
    if (redirect[0] === "/") {
      throw new AbsoluteRedirect(newTree);
    }
    return newTree;
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k2, v4]) => {
      const copySourceValue = typeof v4 === "string" && v4[0] === ":";
      if (copySourceValue) {
        const sourceName = v4.substring(1);
        res[k2] = actualParams[sourceName];
      } else {
        res[k2] = v4;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s6) => s6.path[0] === ":" ? this.findPosParam(redirectTo, s6, posParams) : this.findOrReturn(s6, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos) throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s6 of actualSegments) {
      if (s6.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s6;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
function getRedirectResult(redirectTo, currentSnapshot, injector) {
  if (typeof redirectTo === "string") {
    return Promise.resolve(redirectTo);
  }
  const redirectToFn = redirectTo;
  return firstValueFrom(wrapIntoObservable(runInInjectionContext(injector, () => redirectToFn(currentSnapshot))));
}
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i5 = 0; i5 < config.length; i5++) {
    const route = config[i5];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo) {
      if (route.component || route.loadComponent) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
      }
      if (route.canMatch || route.canActivate) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and ${route.canMatch ? "canMatch" : "canActivate"} cannot be used together.Redirects happen before guards are executed.`);
      }
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes, outletName) {
  const sortedConfig = routes.filter((r9) => getOutlet(r9) === outletName);
  sortedConfig.push(...routes.filter((r9) => getOutlet(r9) !== outletName));
  return sortedConfig;
}
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function createPreMatchRouteSnapshot(snapshot) {
  return {
    routeConfig: snapshot.routeConfig,
    url: snapshot.url,
    params: snapshot.params,
    queryParams: snapshot.queryParams,
    fragment: snapshot.fragment,
    data: snapshot.data,
    outlet: snapshot.outlet,
    title: snapshot.title,
    paramMap: snapshot.paramMap,
    queryParamMap: snapshot.queryParamMap
  };
}
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer, createSnapshot, abortSignal) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  const currentSnapshot = createPreMatchRouteSnapshot(createSnapshot(result));
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer, currentSnapshot, abortSignal).pipe(map((v4) => v4 === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res) return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k2, v4]) => {
    posParams[k2] = v4.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config, outlet) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config, outlet)) {
    const s7 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s7,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s7 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s7,
      slicedSegments
    };
  }
  const s6 = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s6,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
  const res = {};
  for (const r9 of routes) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r9) && !children[getOutlet(r9)]) {
      const s6 = new UrlSegmentGroup([], {});
      res[getOutlet(r9)] = s6;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r9 of routes) {
    if (r9.path === "" && getOutlet(r9) !== PRIMARY_OUTLET) {
      const s6 = new UrlSegmentGroup([], {});
      res[getOutlet(r9)] = s6;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes, outlet) {
  return routes.some((r9) => {
    const matchesEmpty = emptyPathMatch(segmentGroup, slicedSegments, r9);
    if (!matchesEmpty) return false;
    const isNamedOutlet = getOutlet(r9) !== PRIMARY_OUTLET;
    if (!isNamedOutlet) return false;
    const isSelfEvaluating = outlet !== void 0 && getOutlet(r9) === outlet;
    return !isSelfEvaluating;
  });
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
  return routes.some((r9) => emptyPathMatch(segmentGroup, slicedSegments, r9));
}
function emptyPathMatch(segmentGroup, slicedSegments, r9) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r9.pathMatch === "full") {
    return false;
  }
  return r9.path === "";
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
async function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly", abortSignal) {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer, abortSignal).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  injector;
  configLoader;
  rootComponentType;
  config;
  urlTree;
  paramsInheritanceStrategy;
  urlSerializer;
  abortSignal;
  applyRedirects;
  absoluteRedirectCount = 0;
  allowRedirects = true;
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer, abortSignal) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.abortSignal = abortSignal;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
  }
  noMatchError(e4) {
    return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e4.segmentGroup}'` : `'${e4.segmentGroup}'`);
  }
  async recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    const {
      children,
      rootSnapshot
    } = await this.match(rootSegmentGroup);
    const rootNode = new TreeNode(rootSnapshot, children);
    const routeState = new RouterStateSnapshot("", rootNode);
    const tree2 = createUrlTreeFromSnapshot(rootSnapshot, [], this.urlTree.queryParams, this.urlTree.fragment);
    tree2.queryParams = this.urlTree.queryParams;
    routeState.url = this.urlSerializer.serialize(tree2);
    return {
      state: routeState,
      tree: tree2
    };
  }
  async match(rootSegmentGroup) {
    const rootSnapshot = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), PRIMARY_OUTLET, this.rootComponentType, null, {}, this.injector);
    try {
      const children = await this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET, rootSnapshot);
      return {
        children,
        rootSnapshot
      };
    } catch (e4) {
      if (e4 instanceof AbsoluteRedirect) {
        this.urlTree = e4.urlTree;
        return this.match(e4.urlTree.root);
      }
      if (e4 instanceof NoMatch) {
        throw this.noMatchError(e4);
      }
      throw e4;
    }
  }
  async processSegmentGroup(injector, config, segmentGroup, outlet, parentRoute) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup, parentRoute);
    }
    const child = await this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true, parentRoute);
    return child instanceof TreeNode ? [child] : [];
  }
  async processChildren(injector, config, segmentGroup, parentRoute) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    let children = [];
    for (const childOutlet of childOutlets) {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      const outletChildren = await this.processSegmentGroup(injector, sortedConfig, child, childOutlet, parentRoute);
      children.push(...outletChildren);
    }
    const mergedChildren = mergeEmptyPathMatches(children);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkOutletNameUniqueness(mergedChildren);
    }
    sortActivatedRouteSnapshots(mergedChildren);
    return mergedChildren;
  }
  async processSegment(injector, routes, segmentGroup, segments, outlet, allowRedirects, parentRoute) {
    for (const r9 of routes) {
      try {
        return await this.processSegmentAgainstRoute(r9._injector ?? injector, routes, r9, segmentGroup, segments, outlet, allowRedirects, parentRoute);
      } catch (e4) {
        if (e4 instanceof NoMatch || isEmptyError(e4)) {
          continue;
        }
        throw e4;
      }
    }
    if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
      return new NoLeftoversInUrl();
    }
    throw new NoMatch(segmentGroup);
  }
  async processSegmentAgainstRoute(injector, routes, route, rawSegment, segments, outlet, allowRedirects, parentRoute) {
    if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
      throw new NoMatch(rawSegment);
    }
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes, route, segments, outlet, parentRoute);
    }
    throw new NoMatch(rawSegment);
  }
  async expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet, parentRoute) {
    const {
      matched,
      parameters,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = match(segmentGroup, route, segments);
    if (!matched) throw new NoMatch(segmentGroup);
    if (typeof route.redirectTo === "string" && route.redirectTo[0] === "/") {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const currentSnapshot = this.createSnapshot(injector, route, segments, parameters, parentRoute);
    if (this.abortSignal.aborted) {
      throw new Error(this.abortSignal.reason);
    }
    const newTree = await this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments, createPreMatchRouteSnapshot(currentSnapshot), injector);
    const newSegments = await this.applyRedirects.lineralizeSegments(route, newTree);
    return this.processSegment(injector, routes, segmentGroup, newSegments.concat(remainingSegments), outlet, false, parentRoute);
  }
  createSnapshot(injector, route, segments, parameters, parentRoute) {
    const snapshot = new ActivatedRouteSnapshot(segments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route), injector);
    const inherited = getInherited(snapshot, parentRoute, this.paramsInheritanceStrategy);
    snapshot.params = Object.freeze(inherited.params);
    snapshot.data = Object.freeze(inherited.data);
    return snapshot;
  }
  async matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute) {
    if (this.abortSignal.aborted) {
      throw new Error(this.abortSignal.reason);
    }
    const createSnapshot = (result2) => this.createSnapshot(injector, route, result2.consumedSegments, result2.parameters, parentRoute);
    const result = await firstValueFrom(matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer, createSnapshot, this.abortSignal));
    if (route.path === "**") {
      rawSegment.children = {};
    }
    if (!result?.matched) {
      throw new NoMatch(rawSegment);
    }
    injector = route._injector ?? injector;
    const {
      routes: childConfig
    } = await this.getChildConfig(injector, route, segments);
    const childInjector = route._loadedInjector ?? injector;
    const {
      parameters,
      consumedSegments,
      remainingSegments
    } = result;
    const snapshot = this.createSnapshot(injector, route, consumedSegments, parameters, parentRoute);
    const {
      segmentGroup,
      slicedSegments
    } = split(rawSegment, consumedSegments, remainingSegments, childConfig, outlet);
    if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
      const children = await this.processChildren(childInjector, childConfig, segmentGroup, snapshot);
      return new TreeNode(snapshot, children);
    }
    if (childConfig.length === 0 && slicedSegments.length === 0) {
      return new TreeNode(snapshot, []);
    }
    const matchedOnOutlet = getOutlet(route) === outlet;
    const child = await this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true, snapshot);
    return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
  }
  async getChildConfig(injector, route, segments) {
    if (route.children) {
      return {
        routes: route.children,
        injector
      };
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        const ngModuleFactory = route._loadedNgModuleFactory;
        if (ngModuleFactory && !route._loadedInjector) {
          route._loadedInjector = ngModuleFactory.create(injector).injector;
        }
        return {
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        };
      }
      if (this.abortSignal.aborted) {
        throw new Error(this.abortSignal.reason);
      }
      const shouldLoadResult = await firstValueFrom(runCanLoadGuards(injector, route, segments, this.urlSerializer, this.abortSignal));
      if (shouldLoadResult) {
        const cfg = await this.configLoader.loadChildren(injector, route);
        route._loadedRoutes = cfg.routes;
        route._loadedInjector = cfg.injector;
        route._loadedNgModuleFactory = cfg.factory;
        return cfg;
      }
      throw canLoadFails(route);
    }
    return {
      routes: [],
      injector
    };
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a6, b5) => {
    if (a6.value.outlet === PRIMARY_OUTLET) return -1;
    if (b5.value.outlet === PRIMARY_OUTLET) return 1;
    return a6.value.outlet.localeCompare(b5.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n7) => !mergedNodes.has(n7));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n7) => {
    const routeWithSameOutletName = names[n7.value.outlet];
    if (routeWithSameOutletName) {
      const p6 = routeWithSameOutletName.url.map((s6) => s6.toString()).join("/");
      const c9 = n7.value.url.map((s6) => s6.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p6}' and '${c9}'.`);
    }
    names[n7.value.outlet] = n7.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy, abortSignal) {
  return mergeMap(async (t7) => {
    const {
      state: targetSnapshot,
      tree: urlAfterRedirects
    } = await recognize$1(injector, configLoader, rootComponentType, config, t7.extractedUrl, serializer, paramsInheritanceStrategy, abortSignal);
    return __spreadProps(__spreadValues({}, t7), {
      targetSnapshot,
      urlAfterRedirects
    });
  });
}
function resolveData(paramsInheritanceStrategy) {
  return mergeMap((t7) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t7;
    if (!canActivateChecks.length) {
      return of(t7);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_4) => routesProcessed === routesNeedingDataUpdates.size ? of(t7) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return defer(() => {
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return resolveNode(resolve, futureARS, futureRSS).pipe(map((resolvedData) => {
      futureARS._resolvedData = resolvedData;
      futureARS.data = __spreadValues(__spreadValues({}, futureARS.data), resolvedData);
      return null;
    }));
  });
}
function resolveNode(resolve, futureARS, futureRSS) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS).pipe(first(), tap((value) => {
    if (value instanceof RedirectCommand) {
      throw redirectingNavigationError(new DefaultUrlSerializer(), value);
    }
    data[key] = value;
  }))), takeLast(1), map(() => data), catchError((e4) => isEmptyError(e4) ? EMPTY : throwError(e4)));
}
function getResolver(injectionToken, futureARS, futureRSS) {
  const closestInjector = futureARS._environmentInjector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v4) => {
    const nextResult = next(v4);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v4));
    }
    return of(v4);
  });
}
var TitleStrategy = class _TitleStrategy {
  buildTitle(snapshot) {
    let pageTitle;
    let route = snapshot.root;
    while (route !== void 0) {
      pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
      route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
    }
    return pageTitle;
  }
  getResolvedTitleForRoute(snapshot) {
    return snapshot.data[RouteTitleKey];
  }
  static ɵfac = function TitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TitleStrategy)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TitleStrategy,
    factory: () => (() => inject(DefaultTitleStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultTitleStrategy)
    }]
  }], null, null);
})();
var DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
  title;
  constructor(title) {
    super();
    this.title = title;
  }
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
  static ɵfac = function DefaultTitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultTitleStrategy)(ɵɵinject(Title));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DefaultTitleStrategy,
    factory: _DefaultTitleStrategy.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Title
  }], null);
})();
var ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  factory: () => ({})
});
var ROUTES = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "ROUTES" : "");
var RouterConfigLoader = class _RouterConfigLoader {
  componentLoaders = /* @__PURE__ */ new WeakMap();
  childrenLoaders = /* @__PURE__ */ new WeakMap();
  onLoadStartListener;
  onLoadEndListener;
  compiler = inject(Compiler);
  async loadComponent(injector, route) {
    if (this.componentLoaders.get(route)) {
      return this.componentLoaders.get(route);
    } else if (route._loadedComponent) {
      return Promise.resolve(route._loadedComponent);
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loader = (async () => {
      try {
        const loaded = await wrapIntoPromise(runInInjectionContext(injector, () => route.loadComponent()));
        const component = await maybeResolveResources(maybeUnwrapDefaultExport(loaded));
        if (this.onLoadEndListener) {
          this.onLoadEndListener(route);
        }
        (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
        route._loadedComponent = component;
        return component;
      } finally {
        this.componentLoaders.delete(route);
      }
    })();
    this.componentLoaders.set(route, loader);
    return loader;
  }
  loadChildren(parentInjector, route) {
    if (this.childrenLoaders.get(route)) {
      return this.childrenLoaders.get(route);
    } else if (route._loadedRoutes) {
      return Promise.resolve({
        routes: route._loadedRoutes,
        injector: route._loadedInjector
      });
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loader = (async () => {
      try {
        const result = await loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
        route._loadedRoutes = result.routes;
        route._loadedInjector = result.injector;
        route._loadedNgModuleFactory = result.factory;
        return result;
      } finally {
        this.childrenLoaders.delete(route);
      }
    })();
    this.childrenLoaders.set(route, loader);
    return loader;
  }
  static ɵfac = function RouterConfigLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterConfigLoader)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RouterConfigLoader,
    factory: _RouterConfigLoader.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterConfigLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
async function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  const loaded = await wrapIntoPromise(runInInjectionContext(parentInjector, () => route.loadChildren()));
  const t7 = await maybeResolveResources(maybeUnwrapDefaultExport(loaded));
  let factoryOrRoutes;
  if (t7 instanceof NgModuleFactory$1 || Array.isArray(t7)) {
    factoryOrRoutes = t7;
  } else {
    factoryOrRoutes = await compiler.compileModuleAsync(t7);
  }
  if (onLoadEndListener) {
    onLoadEndListener(route);
  }
  let injector;
  let rawRoutes;
  let requireStandaloneComponents = false;
  let factory = void 0;
  if (Array.isArray(factoryOrRoutes)) {
    rawRoutes = factoryOrRoutes;
    requireStandaloneComponents = true;
  } else {
    injector = factoryOrRoutes.create(parentInjector).injector;
    factory = factoryOrRoutes;
    rawRoutes = injector.get(ROUTES, [], {
      optional: true,
      self: true
    }).flat();
  }
  const routes = rawRoutes.map(standardizeConfig);
  (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes, route.path, requireStandaloneComponents);
  return {
    routes,
    injector,
    factory
  };
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input2) {
  return isWrappedDefaultExport(input2) ? input2["default"] : input2;
}
async function maybeResolveResources(value) {
  if (false) {
    try {
      await resolveComponentResources(fetch);
    } catch (error) {
      console.error(error);
    }
  }
  return value;
}
var UrlHandlingStrategy = class _UrlHandlingStrategy {
  static ɵfac = function UrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlHandlingStrategy)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _UrlHandlingStrategy,
    factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultUrlHandlingStrategy)
    }]
  }], null, null);
})();
var DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
  shouldProcessUrl(url) {
    return true;
  }
  extract(url) {
    return url;
  }
  merge(newUrlPart, wholeUrl) {
    return newUrlPart;
  }
  static ɵfac = function DefaultUrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultUrlHandlingStrategy)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DefaultUrlHandlingStrategy,
    factory: _DefaultUrlHandlingStrategy.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultUrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CREATE_VIEW_TRANSITION = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "view transition options" : "");
function createViewTransition(injector, from2, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document2 = injector.get(DOCUMENT);
  if (!document2.startViewTransition || transitionOptions.skipNextTransition) {
    transitionOptions.skipNextTransition = false;
    return new Promise((resolve) => setTimeout(resolve));
  }
  let resolveViewTransitionStarted;
  const viewTransitionStarted = new Promise((resolve) => {
    resolveViewTransitionStarted = resolve;
  });
  const transition = document2.startViewTransition(() => {
    resolveViewTransitionStarted();
    return createRenderPromise(injector);
  });
  transition.updateCallbackDone.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  transition.ready.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  transition.finished.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  const {
    onViewTransitionCreated
  } = transitionOptions;
  if (onViewTransitionCreated) {
    runInInjectionContext(injector, () => onViewTransitionCreated({
      transition,
      from: from2,
      to
    }));
  }
  return viewTransitionStarted;
}
function createRenderPromise(injector) {
  return new Promise((resolve) => {
    afterNextRender({
      read: () => setTimeout(resolve)
    }, {
      injector
    });
  });
}
var noop = () => {
};
var NAVIGATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "navigation error handler" : "");
var NavigationTransitions = class _NavigationTransitions {
  currentNavigation = signal(null, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "currentNavigation"
  } : {}), {
    equal: () => false
  }));
  currentTransition = null;
  lastSuccessfulNavigation = signal(null, ...ngDevMode ? [{
    debugName: "lastSuccessfulNavigation"
  }] : []);
  events = new Subject();
  transitionAbortWithErrorSubject = new Subject();
  configLoader = inject(RouterConfigLoader);
  environmentInjector = inject(EnvironmentInjector);
  destroyRef = inject(DestroyRef);
  urlSerializer = inject(UrlSerializer);
  rootContexts = inject(ChildrenOutletContexts);
  location = inject(Location);
  inputBindingEnabled = inject(INPUT_BINDER, {
    optional: true
  }) !== null;
  titleStrategy = inject(TitleStrategy);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  createViewTransition = inject(CREATE_VIEW_TRANSITION, {
    optional: true
  });
  navigationErrorHandler = inject(NAVIGATION_ERROR_HANDLER, {
    optional: true
  });
  navigationId = 0;
  get hasRequestedNavigation() {
    return this.navigationId !== 0;
  }
  transitions;
  afterPreactivation = () => of(void 0);
  rootComponentType = null;
  destroyed = false;
  constructor() {
    const onLoadStart = (r9) => this.events.next(new RouteConfigLoadStart(r9));
    const onLoadEnd = (r9) => this.events.next(new RouteConfigLoadEnd(r9));
    this.configLoader.onLoadEndListener = onLoadEnd;
    this.configLoader.onLoadStartListener = onLoadStart;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  complete() {
    this.transitions?.complete();
  }
  handleNavigationRequest(request) {
    const id = ++this.navigationId;
    untracked(() => {
      this.transitions?.next(__spreadProps(__spreadValues({}, request), {
        extractedUrl: this.urlHandlingStrategy.extract(request.rawUrl),
        targetSnapshot: null,
        targetRouterState: null,
        guards: {
          canActivateChecks: [],
          canDeactivateChecks: []
        },
        guardsResult: null,
        id,
        routesRecognizeHandler: {},
        beforeActivateHandler: {}
      }));
    });
  }
  setupNavigations(router) {
    this.transitions = new BehaviorSubject(null);
    return this.transitions.pipe(filter((t7) => t7 !== null), switchMap((overallTransitionState) => {
      let completedOrAborted = false;
      const abortController = new AbortController();
      const shouldContinueNavigation = () => {
        return !completedOrAborted && this.currentTransition?.id === overallTransitionState.id;
      };
      return of(overallTransitionState).pipe(switchMap((t7) => {
        if (this.navigationId > overallTransitionState.id) {
          const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
          this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
          return EMPTY;
        }
        this.currentTransition = overallTransitionState;
        const lastSuccessfulNavigation = this.lastSuccessfulNavigation();
        this.currentNavigation.set({
          id: t7.id,
          initialUrl: t7.rawUrl,
          extractedUrl: t7.extractedUrl,
          targetBrowserUrl: typeof t7.extras.browserUrl === "string" ? this.urlSerializer.parse(t7.extras.browserUrl) : t7.extras.browserUrl,
          trigger: t7.source,
          extras: t7.extras,
          previousNavigation: !lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, lastSuccessfulNavigation), {
            previousNavigation: null
          }),
          abort: () => abortController.abort(),
          routesRecognizeHandler: t7.routesRecognizeHandler,
          beforeActivateHandler: t7.beforeActivateHandler
        });
        const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
        const onSameUrlNavigation = t7.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
        if (!urlTransition && onSameUrlNavigation !== "reload") {
          const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t7.rawUrl} was ignored because it is the same as the current Router URL.` : "";
          this.events.next(new NavigationSkipped(t7.id, this.urlSerializer.serialize(t7.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
          t7.resolve(false);
          return EMPTY;
        }
        if (this.urlHandlingStrategy.shouldProcessUrl(t7.rawUrl)) {
          return of(t7).pipe(switchMap((t8) => {
            this.events.next(new NavigationStart(t8.id, this.urlSerializer.serialize(t8.extractedUrl), t8.source, t8.restoredState));
            if (t8.id !== this.navigationId) {
              return EMPTY;
            }
            return Promise.resolve(t8);
          }), recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy, abortController.signal), tap((t8) => {
            overallTransitionState.targetSnapshot = t8.targetSnapshot;
            overallTransitionState.urlAfterRedirects = t8.urlAfterRedirects;
            this.currentNavigation.update((nav) => {
              nav.finalUrl = t8.urlAfterRedirects;
              return nav;
            });
            this.events.next(new BeforeRoutesRecognized());
          }), switchMap((value) => from(overallTransitionState.routesRecognizeHandler.deferredHandle ?? of(void 0)).pipe(map(() => value))), tap(() => {
            const routesRecognized = new RoutesRecognized(t7.id, this.urlSerializer.serialize(t7.extractedUrl), this.urlSerializer.serialize(t7.urlAfterRedirects), t7.targetSnapshot);
            this.events.next(routesRecognized);
          }));
        } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t7.currentRawUrl)) {
          const {
            id,
            extractedUrl,
            source,
            restoredState,
            extras
          } = t7;
          const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
          this.events.next(navStart);
          const targetSnapshot = createEmptyState(this.rootComponentType, this.environmentInjector).snapshot;
          this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t7), {
            targetSnapshot,
            urlAfterRedirects: extractedUrl,
            extras: __spreadProps(__spreadValues({}, extras), {
              skipLocationChange: false,
              replaceUrl: false
            })
          });
          this.currentNavigation.update((nav) => {
            nav.finalUrl = extractedUrl;
            return nav;
          });
          return of(overallTransitionState);
        } else {
          const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t7.currentRawUrl} nor target URL ${t7.rawUrl} should be processed.` : "";
          this.events.next(new NavigationSkipped(t7.id, this.urlSerializer.serialize(t7.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
          t7.resolve(false);
          return EMPTY;
        }
      }), map((t7) => {
        const guardsStart = new GuardsCheckStart(t7.id, this.urlSerializer.serialize(t7.extractedUrl), this.urlSerializer.serialize(t7.urlAfterRedirects), t7.targetSnapshot);
        this.events.next(guardsStart);
        this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t7), {
          guards: getAllRouteGuards(t7.targetSnapshot, t7.currentSnapshot, this.rootContexts)
        });
        return overallTransitionState;
      }), checkGuards((evt) => this.events.next(evt)), switchMap((t7) => {
        overallTransitionState.guardsResult = t7.guardsResult;
        if (t7.guardsResult && typeof t7.guardsResult !== "boolean") {
          throw redirectingNavigationError(this.urlSerializer, t7.guardsResult);
        }
        const guardsEnd = new GuardsCheckEnd(t7.id, this.urlSerializer.serialize(t7.extractedUrl), this.urlSerializer.serialize(t7.urlAfterRedirects), t7.targetSnapshot, !!t7.guardsResult);
        this.events.next(guardsEnd);
        if (!shouldContinueNavigation()) {
          return EMPTY;
        }
        if (!t7.guardsResult) {
          this.cancelNavigationTransition(t7, "", NavigationCancellationCode.GuardRejected);
          return EMPTY;
        }
        if (t7.guards.canActivateChecks.length === 0) {
          return of(t7);
        }
        const resolveStart = new ResolveStart(t7.id, this.urlSerializer.serialize(t7.extractedUrl), this.urlSerializer.serialize(t7.urlAfterRedirects), t7.targetSnapshot);
        this.events.next(resolveStart);
        if (!shouldContinueNavigation()) {
          return EMPTY;
        }
        let dataResolved = false;
        return of(t7).pipe(resolveData(this.paramsInheritanceStrategy), tap({
          next: () => {
            dataResolved = true;
            const resolveEnd = new ResolveEnd(t7.id, this.urlSerializer.serialize(t7.extractedUrl), this.urlSerializer.serialize(t7.urlAfterRedirects), t7.targetSnapshot);
            this.events.next(resolveEnd);
          },
          complete: () => {
            if (!dataResolved) {
              this.cancelNavigationTransition(t7, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
            }
          }
        }));
      }), switchTap((t7) => {
        const loadComponents = (route) => {
          const loaders2 = [];
          if (route.routeConfig?._loadedComponent) {
            route.component = route.routeConfig?._loadedComponent;
          } else if (route.routeConfig?.loadComponent) {
            const injector = route._environmentInjector;
            loaders2.push(this.configLoader.loadComponent(injector, route.routeConfig).then((loadedComponent) => {
              route.component = loadedComponent;
            }));
          }
          for (const child of route.children) {
            loaders2.push(...loadComponents(child));
          }
          return loaders2;
        };
        const loaders = loadComponents(t7.targetSnapshot.root);
        return loaders.length === 0 ? of(t7) : from(Promise.all(loaders).then(() => t7));
      }), switchTap(() => this.afterPreactivation()), switchMap(() => {
        const {
          currentSnapshot,
          targetSnapshot
        } = overallTransitionState;
        const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
        return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
      }), take(1), switchMap((t7) => {
        const targetRouterState = createRouterState(router.routeReuseStrategy, t7.targetSnapshot, t7.currentRouterState);
        this.currentTransition = overallTransitionState = t7 = __spreadProps(__spreadValues({}, t7), {
          targetRouterState
        });
        this.currentNavigation.update((nav) => {
          nav.targetRouterState = targetRouterState;
          return nav;
        });
        this.events.next(new BeforeActivateRoutes());
        const deferred = overallTransitionState.beforeActivateHandler.deferredHandle;
        return deferred ? from(deferred.then(() => t7)) : of(t7);
      }), tap((t7) => {
        new ActivateRoutes(router.routeReuseStrategy, overallTransitionState.targetRouterState, overallTransitionState.currentRouterState, (evt) => this.events.next(evt), this.inputBindingEnabled).activate(this.rootContexts);
        if (!shouldContinueNavigation()) {
          return;
        }
        completedOrAborted = true;
        this.currentNavigation.update((nav) => {
          nav.abort = noop;
          return nav;
        });
        this.lastSuccessfulNavigation.set(untracked(this.currentNavigation));
        this.events.next(new NavigationEnd(t7.id, this.urlSerializer.serialize(t7.extractedUrl), this.urlSerializer.serialize(t7.urlAfterRedirects)));
        this.titleStrategy?.updateTitle(t7.targetRouterState.snapshot);
        t7.resolve(true);
      }), takeUntil(abortSignalToObservable(abortController.signal).pipe(filter(() => !completedOrAborted && !overallTransitionState.targetRouterState), tap(() => {
        this.cancelNavigationTransition(overallTransitionState, abortController.signal.reason + "", NavigationCancellationCode.Aborted);
      }))), tap({
        complete: () => {
          completedOrAborted = true;
        }
      }), takeUntil(this.transitionAbortWithErrorSubject.pipe(tap((err) => {
        throw err;
      }))), finalize(() => {
        abortController.abort();
        if (!completedOrAborted) {
          const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
          this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
        }
        if (this.currentTransition?.id === overallTransitionState.id) {
          this.currentNavigation.set(null);
          this.currentTransition = null;
        }
      }), catchError((e4) => {
        completedOrAborted = true;
        if (this.destroyed) {
          overallTransitionState.resolve(false);
          return EMPTY;
        }
        if (isNavigationCancelingError(e4)) {
          this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e4.message, e4.cancellationCode));
          if (!isRedirectingNavigationCancelingError(e4)) {
            overallTransitionState.resolve(false);
          } else {
            this.events.next(new RedirectRequest(e4.url, e4.navigationBehaviorOptions));
          }
        } else {
          const navigationError = new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e4, overallTransitionState.targetSnapshot ?? void 0);
          try {
            const navigationErrorHandlerResult = runInInjectionContext(this.environmentInjector, () => this.navigationErrorHandler?.(navigationError));
            if (navigationErrorHandlerResult instanceof RedirectCommand) {
              const {
                message,
                cancellationCode
              } = redirectingNavigationError(this.urlSerializer, navigationErrorHandlerResult);
              this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), message, cancellationCode));
              this.events.next(new RedirectRequest(navigationErrorHandlerResult.redirectTo, navigationErrorHandlerResult.navigationBehaviorOptions));
            } else {
              this.events.next(navigationError);
              throw e4;
            }
          } catch (ee2) {
            if (this.options.resolveNavigationPromiseOnError) {
              overallTransitionState.resolve(false);
            } else {
              overallTransitionState.reject(ee2);
            }
          }
        }
        return EMPTY;
      }));
    }));
  }
  cancelNavigationTransition(t7, reason, code) {
    const navCancel = new NavigationCancel(t7.id, this.urlSerializer.serialize(t7.extractedUrl), reason, code);
    this.events.next(navCancel);
    t7.resolve(false);
  }
  isUpdatingInternalState() {
    return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
  }
  isUpdatedBrowserUrl() {
    const currentBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
    const currentNavigation = untracked(this.currentNavigation);
    const targetBrowserUrl = currentNavigation?.targetBrowserUrl ?? currentNavigation?.extractedUrl;
    return currentBrowserUrl.toString() !== targetBrowserUrl?.toString() && !currentNavigation?.extras.skipLocationChange;
  }
  static ɵfac = function NavigationTransitions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationTransitions)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NavigationTransitions,
    factory: _NavigationTransitions.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationTransitions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var ROUTE_INJECTOR_CLEANUP = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "RouteInjectorCleanup" : "");
var RouteReuseStrategy = class _RouteReuseStrategy {
  static ɵfac = function RouteReuseStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouteReuseStrategy)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RouteReuseStrategy,
    factory: () => (() => inject(DefaultRouteReuseStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultRouteReuseStrategy)
    }]
  }], null, null);
})();
var BaseRouteReuseStrategy = class {
  shouldDetach(route) {
    return false;
  }
  store(route, detachedTree) {
  }
  shouldAttach(route) {
    return false;
  }
  retrieve(route) {
    return null;
  }
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
  shouldDestroyInjector(route) {
    return true;
  }
};
var DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDefaultRouteReuseStrategy_BaseFactory;
    return function DefaultRouteReuseStrategy_Factory(__ngFactoryType__) {
      return (ɵDefaultRouteReuseStrategy_BaseFactory || (ɵDefaultRouteReuseStrategy_BaseFactory = ɵɵgetInheritedFactory(_DefaultRouteReuseStrategy)))(__ngFactoryType__ || _DefaultRouteReuseStrategy);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _DefaultRouteReuseStrategy,
    factory: _DefaultRouteReuseStrategy.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StateManager = class _StateManager {
  urlSerializer = inject(UrlSerializer);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  currentUrlTree = new UrlTree();
  getCurrentUrlTree() {
    return this.currentUrlTree;
  }
  rawUrlTree = this.currentUrlTree;
  getRawUrlTree() {
    return this.rawUrlTree;
  }
  createBrowserPath({
    finalUrl,
    initialUrl,
    targetBrowserUrl
  }) {
    const rawUrl = finalUrl !== void 0 ? this.urlHandlingStrategy.merge(finalUrl, initialUrl) : initialUrl;
    const url = targetBrowserUrl ?? rawUrl;
    const path = url instanceof UrlTree ? this.urlSerializer.serialize(url) : url;
    return path;
  }
  routerUrlState(navigation) {
    if (navigation?.targetBrowserUrl === void 0 || navigation?.finalUrl === void 0) {
      return {};
    }
    return {
      ɵrouterUrl: this.urlSerializer.serialize(navigation.finalUrl)
    };
  }
  commitTransition({
    targetRouterState,
    finalUrl,
    initialUrl
  }) {
    if (finalUrl && targetRouterState) {
      this.currentUrlTree = finalUrl;
      this.rawUrlTree = this.urlHandlingStrategy.merge(finalUrl, initialUrl);
      this.routerState = targetRouterState;
    } else {
      this.rawUrlTree = initialUrl;
    }
  }
  routerState = createEmptyState(null, inject(EnvironmentInjector));
  getRouterState() {
    return this.routerState;
  }
  _stateMemento = this.createStateMemento();
  get stateMemento() {
    return this._stateMemento;
  }
  updateStateMemento() {
    this._stateMemento = this.createStateMemento();
  }
  createStateMemento() {
    return {
      rawUrlTree: this.rawUrlTree,
      currentUrlTree: this.currentUrlTree,
      routerState: this.routerState
    };
  }
  restoredState() {
    return this.location.getState();
  }
  static ɵfac = function StateManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StateManager)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _StateManager,
    factory: () => (() => inject(HistoryStateManager))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(HistoryStateManager)
    }]
  }], null, null);
})();
var HistoryStateManager = class _HistoryStateManager extends StateManager {
  currentPageId = 0;
  lastSuccessfulId = -1;
  get browserPageId() {
    if (this.canceledNavigationResolution !== "computed") {
      return this.currentPageId;
    }
    return this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    return this.location.subscribe((event) => {
      if (event["type"] === "popstate") {
        setTimeout(() => {
          listener(event["url"], event.state, "popstate", {
            replaceUrl: true
          });
        });
      }
    });
  }
  handleRouterEvent(e4, currentTransition) {
    if (e4 instanceof NavigationStart) {
      this.updateStateMemento();
    } else if (e4 instanceof NavigationSkipped) {
      this.commitTransition(currentTransition);
    } else if (e4 instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager") {
        if (!currentTransition.extras.skipLocationChange) {
          this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
        }
      }
    } else if (e4 instanceof BeforeActivateRoutes) {
      this.commitTransition(currentTransition);
      if (this.urlUpdateStrategy === "deferred" && !currentTransition.extras.skipLocationChange) {
        this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
      }
    } else if (e4 instanceof NavigationCancel && !isRedirectingEvent(e4)) {
      this.restoreHistory(currentTransition);
    } else if (e4 instanceof NavigationError) {
      this.restoreHistory(currentTransition, true);
    } else if (e4 instanceof NavigationEnd) {
      this.lastSuccessfulId = e4.id;
      this.currentPageId = this.browserPageId;
    }
  }
  setBrowserUrl(path, navigation) {
    const {
      extras,
      id
    } = navigation;
    const {
      replaceUrl,
      state
    } = extras;
    if (this.location.isCurrentPathEqualTo(path) || !!replaceUrl) {
      const currentBrowserPageId = this.browserPageId;
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, currentBrowserPageId, navigation));
      this.location.replaceState(path, "", newState);
    } else {
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, this.browserPageId + 1, navigation));
      this.location.go(path, "", newState);
    }
  }
  restoreHistory(navigation, restoringFromCaughtError = false) {
    if (this.canceledNavigationResolution === "computed") {
      const currentBrowserPageId = this.browserPageId;
      const targetPagePosition = this.currentPageId - currentBrowserPageId;
      if (targetPagePosition !== 0) {
        this.location.historyGo(targetPagePosition);
      } else if (this.getCurrentUrlTree() === navigation.finalUrl && targetPagePosition === 0) {
        this.resetInternalState(navigation);
        this.resetUrlToCurrentUrlTree();
      } else ;
    } else if (this.canceledNavigationResolution === "replace") {
      if (restoringFromCaughtError) {
        this.resetInternalState(navigation);
      }
      this.resetUrlToCurrentUrlTree();
    }
  }
  resetInternalState({
    finalUrl
  }) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
  }
  resetUrlToCurrentUrlTree() {
    this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
  }
  generateNgRouterState(navigationId, routerPageId, navigation) {
    if (this.canceledNavigationResolution === "computed") {
      return __spreadValues({
        navigationId,
        ɵrouterPageId: routerPageId
      }, this.routerUrlState(navigation));
    }
    return __spreadValues({
      navigationId
    }, this.routerUrlState(navigation));
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵHistoryStateManager_BaseFactory;
    return function HistoryStateManager_Factory(__ngFactoryType__) {
      return (ɵHistoryStateManager_BaseFactory || (ɵHistoryStateManager_BaseFactory = ɵɵgetInheritedFactory(_HistoryStateManager)))(__ngFactoryType__ || _HistoryStateManager);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _HistoryStateManager,
    factory: _HistoryStateManager.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e4) => e4 instanceof NavigationEnd || e4 instanceof NavigationCancel || e4 instanceof NavigationError || e4 instanceof NavigationSkipped), map((e4) => {
    if (e4 instanceof NavigationEnd || e4 instanceof NavigationSkipped) {
      return 0;
    }
    const redirecting = e4 instanceof NavigationCancel ? e4.code === NavigationCancellationCode.Redirect || e4.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? 2 : 1;
  }), filter((result) => result !== 2), take(1)).subscribe(() => {
    action();
  });
}
var Router = class _Router {
  get currentUrlTree() {
    return this.stateManager.getCurrentUrlTree();
  }
  get rawUrlTree() {
    return this.stateManager.getRawUrlTree();
  }
  disposed = false;
  nonRouterCurrentEntryChangeSubscription;
  console = inject(Console);
  stateManager = inject(StateManager);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  pendingTasks = inject(PendingTasksInternal);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  navigationTransitions = inject(NavigationTransitions);
  urlSerializer = inject(UrlSerializer);
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  injector = inject(EnvironmentInjector);
  _events = new Subject();
  get events() {
    return this._events;
  }
  get routerState() {
    return this.stateManager.getRouterState();
  }
  navigated = false;
  routeReuseStrategy = inject(RouteReuseStrategy);
  injectorCleanup = inject(ROUTE_INJECTOR_CLEANUP, {
    optional: true
  });
  onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
  config = inject(ROUTES, {
    optional: true
  })?.flat() ?? [];
  componentInputBindingEnabled = !!inject(INPUT_BINDER, {
    optional: true
  });
  currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
  constructor() {
    this.resetConfig(this.config);
    this.navigationTransitions.setupNavigations(this).subscribe({
      error: (e4) => {
      }
    });
    this.subscribeToNavigationEvents();
  }
  eventsSubscription = new Subscription();
  subscribeToNavigationEvents() {
    const subscription = this.navigationTransitions.events.subscribe((e4) => {
      try {
        const currentTransition = this.navigationTransitions.currentTransition;
        const currentNavigation = untracked(this.navigationTransitions.currentNavigation);
        if (currentTransition !== null && currentNavigation !== null) {
          this.stateManager.handleRouterEvent(e4, currentNavigation);
          if (e4 instanceof NavigationCancel && e4.code !== NavigationCancellationCode.Redirect && e4.code !== NavigationCancellationCode.SupersededByNewNavigation) {
            this.navigated = true;
          } else if (e4 instanceof NavigationEnd) {
            this.navigated = true;
            this.injectorCleanup?.(this.routeReuseStrategy, this.routerState, this.config);
          } else if (e4 instanceof RedirectRequest) {
            const opts = e4.navigationBehaviorOptions;
            const mergedTree = this.urlHandlingStrategy.merge(e4.url, currentTransition.currentRawUrl);
            const extras = __spreadValues({
              scroll: currentTransition.extras.scroll,
              browserUrl: currentTransition.extras.browserUrl,
              info: currentTransition.extras.info,
              skipLocationChange: currentTransition.extras.skipLocationChange,
              replaceUrl: currentTransition.extras.replaceUrl || this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
            }, opts);
            this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
              resolve: currentTransition.resolve,
              reject: currentTransition.reject,
              promise: currentTransition.promise
            });
          }
        }
        if (isPublicRouterEvent(e4)) {
          this._events.next(e4);
        }
      } catch (e5) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(e5);
      }
    });
    this.eventsSubscription.add(subscription);
  }
  resetRootComponentType(rootComponentType) {
    this.routerState.root.component = rootComponentType;
    this.navigationTransitions.rootComponentType = rootComponentType;
  }
  initialNavigation() {
    this.setUpLocationChangeListener();
    if (!this.navigationTransitions.hasRequestedNavigation) {
      this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState(), {
        replaceUrl: true
      });
    }
  }
  setUpLocationChangeListener() {
    this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state, source, extras) => {
      this.navigateToSyncWithBrowser(url, source, state, extras);
    });
  }
  navigateToSyncWithBrowser(url, source, state, extras) {
    const restoredState = state?.navigationId ? state : null;
    const routerUrl = state?.ɵrouterUrl ?? url;
    if (state?.ɵrouterUrl) {
      extras = __spreadProps(__spreadValues({}, extras), {
        browserUrl: url
      });
    }
    if (state) {
      const stateCopy = __spreadValues({}, state);
      delete stateCopy.navigationId;
      delete stateCopy.ɵrouterPageId;
      delete stateCopy.ɵrouterUrl;
      if (Object.keys(stateCopy).length !== 0) {
        extras.state = stateCopy;
      }
    }
    const urlTree = this.parseUrl(routerUrl);
    this.scheduleNavigation(urlTree, source, restoredState, extras).catch((e4) => {
      if (this.disposed) {
        return;
      }
      this.injector.get(INTERNAL_APPLICATION_ERROR_HANDLER)(e4);
    });
  }
  get url() {
    return this.serializeUrl(this.currentUrlTree);
  }
  getCurrentNavigation() {
    return untracked(this.navigationTransitions.currentNavigation);
  }
  get lastSuccessfulNavigation() {
    return this.navigationTransitions.lastSuccessfulNavigation;
  }
  resetConfig(config) {
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
    this.config = config.map(standardizeConfig);
    this.navigated = false;
  }
  ngOnDestroy() {
    this.dispose();
  }
  dispose() {
    this._events.unsubscribe();
    this.navigationTransitions.complete();
    this.nonRouterCurrentEntryChangeSubscription?.unsubscribe();
    this.nonRouterCurrentEntryChangeSubscription = void 0;
    this.disposed = true;
    this.eventsSubscription.unsubscribe();
  }
  createUrlTree(commands, navigationExtras = {}) {
    const {
      relativeTo,
      queryParams,
      fragment,
      queryParamsHandling,
      preserveFragment
    } = navigationExtras;
    const f5 = preserveFragment ? this.currentUrlTree.fragment : fragment;
    let q4 = null;
    switch (queryParamsHandling ?? this.options.defaultQueryParamsHandling) {
      case "merge":
        q4 = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
        break;
      case "preserve":
        q4 = this.currentUrlTree.queryParams;
        break;
      default:
        q4 = queryParams || null;
    }
    if (q4 !== null) {
      q4 = this.removeEmptyProps(q4);
    }
    let relativeToUrlSegmentGroup;
    try {
      const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
      relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
    } catch (e4) {
      if (typeof commands[0] !== "string" || commands[0][0] !== "/") {
        commands = [];
      }
      relativeToUrlSegmentGroup = this.currentUrlTree.root;
    }
    return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q4, f5 ?? null, this.urlSerializer);
  }
  navigateByUrl(url, extras = {
    skipLocationChange: false
  }) {
    const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
    const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
    return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
  }
  navigate(commands, extras = {
    skipLocationChange: false
  }) {
    validateCommands(commands);
    return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
  }
  serializeUrl(url) {
    return this.urlSerializer.serialize(url);
  }
  parseUrl(url) {
    try {
      return this.urlSerializer.parse(url);
    } catch (e4) {
      this.console.warn(formatRuntimeError(4018, ngDevMode && `Error parsing URL ${url}. Falling back to '/' instead. 
` + e4));
      return this.urlSerializer.parse("/");
    }
  }
  isActive(url, matchOptions) {
    let options;
    if (matchOptions === true) {
      options = __spreadValues({}, exactMatchOptions);
    } else if (matchOptions === false) {
      options = __spreadValues({}, subsetMatchOptions);
    } else {
      options = __spreadValues(__spreadValues({}, subsetMatchOptions), matchOptions);
    }
    if (isUrlTree(url)) {
      return containsTree(this.currentUrlTree, url, options);
    }
    const urlTree = this.parseUrl(url);
    return containsTree(this.currentUrlTree, urlTree, options);
  }
  removeEmptyProps(params) {
    return Object.entries(params).reduce((result, [key, value]) => {
      if (value !== null && value !== void 0) {
        result[key] = value;
      }
      return result;
    }, {});
  }
  scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
    if (this.disposed) {
      return Promise.resolve(false);
    }
    let resolve;
    let reject;
    let promise;
    if (priorPromise) {
      resolve = priorPromise.resolve;
      reject = priorPromise.reject;
      promise = priorPromise.promise;
    } else {
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    }
    const taskId = this.pendingTasks.add();
    afterNextNavigation(this, () => {
      queueMicrotask(() => this.pendingTasks.remove(taskId));
    });
    this.navigationTransitions.handleNavigationRequest({
      source,
      restoredState,
      currentUrlTree: this.currentUrlTree,
      currentRawUrl: this.currentUrlTree,
      rawUrl,
      extras,
      resolve,
      reject,
      promise,
      currentSnapshot: this.routerState.snapshot,
      currentRouterState: this.routerState
    });
    return promise.catch(Promise.reject.bind(Promise));
  }
  static ɵfac = function Router_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Router)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _Router,
    factory: _Router.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Router, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function validateCommands(commands) {
  for (let i5 = 0; i5 < commands.length; i5++) {
    const cmd = commands[i5];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i5}`);
    }
  }
}

// node_modules/@angular/router/fesm2022/_router_module-chunk.mjs
var ReactiveRouterState = class _ReactiveRouterState {
  router = inject(Router);
  stateManager = inject(StateManager);
  fragment = signal("", ...ngDevMode ? [{
    debugName: "fragment"
  }] : []);
  queryParams = signal({}, ...ngDevMode ? [{
    debugName: "queryParams"
  }] : []);
  path = signal("", ...ngDevMode ? [{
    debugName: "path"
  }] : []);
  serializer = inject(UrlSerializer);
  constructor() {
    this.updateState();
    this.router.events?.subscribe((e4) => {
      if (e4 instanceof NavigationEnd) {
        this.updateState();
      }
    });
  }
  updateState() {
    const {
      fragment,
      root,
      queryParams
    } = this.stateManager.getCurrentUrlTree();
    this.fragment.set(fragment);
    this.queryParams.set(queryParams);
    this.path.set(this.serializer.serialize(new UrlTree(root)));
  }
  static ɵfac = function ReactiveRouterState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveRouterState)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ReactiveRouterState,
    factory: _ReactiveRouterState.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveRouterState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var RouterLink = class _RouterLink {
  router;
  route;
  tabIndexAttribute;
  renderer;
  el;
  locationStrategy;
  hrefAttributeValue = inject(new HostAttributeToken("href"), {
    optional: true
  });
  reactiveHref = linkedSignal(() => {
    if (!this.isAnchorElement) {
      return this.hrefAttributeValue;
    }
    return this.computeHref(this._urlTree());
  }, ...ngDevMode ? [{
    debugName: "reactiveHref"
  }] : []);
  get href() {
    return untracked(this.reactiveHref);
  }
  set href(value) {
    this.reactiveHref.set(value);
  }
  set target(value) {
    this._target.set(value);
  }
  get target() {
    return untracked(this._target);
  }
  _target = signal(void 0, ...ngDevMode ? [{
    debugName: "_target"
  }] : []);
  set queryParams(value) {
    this._queryParams.set(value);
  }
  get queryParams() {
    return untracked(this._queryParams);
  }
  _queryParams = signal(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_queryParams"
  } : {}), {
    equal: () => false
  }));
  set fragment(value) {
    this._fragment.set(value);
  }
  get fragment() {
    return untracked(this._fragment);
  }
  _fragment = signal(void 0, ...ngDevMode ? [{
    debugName: "_fragment"
  }] : []);
  set queryParamsHandling(value) {
    this._queryParamsHandling.set(value);
  }
  get queryParamsHandling() {
    return untracked(this._queryParamsHandling);
  }
  _queryParamsHandling = signal(void 0, ...ngDevMode ? [{
    debugName: "_queryParamsHandling"
  }] : []);
  set state(value) {
    this._state.set(value);
  }
  get state() {
    return untracked(this._state);
  }
  _state = signal(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_state"
  } : {}), {
    equal: () => false
  }));
  set info(value) {
    this._info.set(value);
  }
  get info() {
    return untracked(this._info);
  }
  _info = signal(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_info"
  } : {}), {
    equal: () => false
  }));
  set relativeTo(value) {
    this._relativeTo.set(value);
  }
  get relativeTo() {
    return untracked(this._relativeTo);
  }
  _relativeTo = signal(void 0, ...ngDevMode ? [{
    debugName: "_relativeTo"
  }] : []);
  set preserveFragment(value) {
    this._preserveFragment.set(value);
  }
  get preserveFragment() {
    return untracked(this._preserveFragment);
  }
  _preserveFragment = signal(false, ...ngDevMode ? [{
    debugName: "_preserveFragment"
  }] : []);
  set skipLocationChange(value) {
    this._skipLocationChange.set(value);
  }
  get skipLocationChange() {
    return untracked(this._skipLocationChange);
  }
  _skipLocationChange = signal(false, ...ngDevMode ? [{
    debugName: "_skipLocationChange"
  }] : []);
  set replaceUrl(value) {
    this._replaceUrl.set(value);
  }
  get replaceUrl() {
    return untracked(this._replaceUrl);
  }
  _replaceUrl = signal(false, ...ngDevMode ? [{
    debugName: "_replaceUrl"
  }] : []);
  isAnchorElement;
  onChanges = new Subject();
  applicationErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  });
  reactiveRouterState = inject(ReactiveRouterState);
  constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
    this.router = router;
    this.route = route;
    this.tabIndexAttribute = tabIndexAttribute;
    this.renderer = renderer;
    this.el = el;
    this.locationStrategy = locationStrategy;
    const tagName = el.nativeElement.tagName?.toLowerCase();
    this.isAnchorElement = tagName === "a" || tagName === "area" || !!(typeof customElements === "object" && customElements.get(tagName)?.observedAttributes?.includes?.("href"));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      effect(() => {
        if (isUrlTree(this.routerLinkInput()) && (this._fragment() !== void 0 || this._queryParams() || this._queryParamsHandling() || this._preserveFragment() || this._relativeTo())) {
          throw new RuntimeError(4017, "Cannot configure queryParams or fragment when using a UrlTree as the routerLink input value.");
        }
      });
    }
  }
  setTabIndexIfNotOnNativeEl(newTabIndex) {
    if (this.tabIndexAttribute != null || this.isAnchorElement) {
      return;
    }
    this.applyAttributeValue("tabindex", newTabIndex);
  }
  ngOnChanges(changes) {
    this.onChanges.next(this);
  }
  routerLinkInput = signal(null, ...ngDevMode ? [{
    debugName: "routerLinkInput"
  }] : []);
  set routerLink(commandsOrUrlTree) {
    if (commandsOrUrlTree == null) {
      this.routerLinkInput.set(null);
      this.setTabIndexIfNotOnNativeEl(null);
    } else {
      if (isUrlTree(commandsOrUrlTree)) {
        this.routerLinkInput.set(commandsOrUrlTree);
      } else {
        this.routerLinkInput.set(Array.isArray(commandsOrUrlTree) ? commandsOrUrlTree : [commandsOrUrlTree]);
      }
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
    const urlTree = this._urlTree();
    if (urlTree === null) {
      return true;
    }
    if (this.isAnchorElement) {
      if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
        return true;
      }
      if (typeof this.target === "string" && this.target != "_self") {
        return true;
      }
    }
    const extras = {
      skipLocationChange: this.skipLocationChange,
      replaceUrl: this.replaceUrl,
      state: this.state,
      info: this.info
    };
    this.router.navigateByUrl(urlTree, extras)?.catch((e4) => {
      this.applicationErrorHandler(e4);
    });
    return !this.isAnchorElement;
  }
  ngOnDestroy() {
  }
  applyAttributeValue(attrName, attrValue) {
    const renderer = this.renderer;
    const nativeElement = this.el.nativeElement;
    if (attrValue !== null) {
      renderer.setAttribute(nativeElement, attrName, attrValue);
    } else {
      renderer.removeAttribute(nativeElement, attrName);
    }
  }
  _urlTree = computed(() => {
    this.reactiveRouterState.path();
    if (this._preserveFragment()) {
      this.reactiveRouterState.fragment();
    }
    const shouldTrackParams = (handling) => handling === "preserve" || handling === "merge";
    if (shouldTrackParams(this._queryParamsHandling()) || shouldTrackParams(this.options?.defaultQueryParamsHandling)) {
      this.reactiveRouterState.queryParams();
    }
    const routerLinkInput = this.routerLinkInput();
    if (routerLinkInput === null || !this.router.createUrlTree) {
      return null;
    } else if (isUrlTree(routerLinkInput)) {
      return routerLinkInput;
    }
    return this.router.createUrlTree(routerLinkInput, {
      relativeTo: this._relativeTo() !== void 0 ? this._relativeTo() : this.route,
      queryParams: this._queryParams(),
      fragment: this._fragment(),
      queryParamsHandling: this._queryParamsHandling(),
      preserveFragment: this._preserveFragment()
    });
  }, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "_urlTree"
  } : {}), {
    equal: (a6, b5) => this.computeHref(a6) === this.computeHref(b5)
  }));
  get urlTree() {
    return untracked(this._urlTree);
  }
  computeHref(urlTree) {
    return urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(urlTree)) ?? "" : null;
  }
  static ɵfac = function RouterLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLink)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵinjectAttribute("tabindex"), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocationStrategy));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLink,
    selectors: [["", "routerLink", ""]],
    hostVars: 2,
    hostBindings: function RouterLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RouterLink_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
        });
      }
      if (rf & 2) {
        ɵɵattribute("href", ctx.reactiveHref(), ɵɵsanitizeUrlOrResourceUrl)("target", ctx._target());
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      state: "state",
      info: "info",
      relativeTo: "relativeTo",
      preserveFragment: [2, "preserveFragment", "preserveFragment", booleanAttribute],
      skipLocationChange: [2, "skipLocationChange", "skipLocationChange", booleanAttribute],
      replaceUrl: [2, "replaceUrl", "replaceUrl", booleanAttribute],
      routerLink: "routerLink"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLink, [{
    type: Directive,
    args: [{
      selector: "[routerLink]",
      host: {
        "[attr.href]": "reactiveHref()",
        "[attr.target]": "_target()"
      }
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    relativeTo: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    skipLocationChange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    replaceUrl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    routerLink: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.shiftKey", "$event.altKey", "$event.metaKey"]]
    }]
  });
})();
var RouterLinkActive = class _RouterLinkActive {
  router;
  element;
  renderer;
  cdr;
  links;
  classes = [];
  routerEventsSubscription;
  linkInputChangesSubscription;
  _isActive = false;
  get isActive() {
    return this._isActive;
  }
  routerLinkActiveOptions = {
    exact: false
  };
  ariaCurrentWhenActive;
  isActiveChange = new EventEmitter();
  link = inject(RouterLink, {
    optional: true
  });
  constructor(router, element, renderer, cdr) {
    this.router = router;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.routerEventsSubscription = router.events.subscribe((s6) => {
      if (s6 instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  ngAfterContentInit() {
    of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_4) => {
      this.update();
      this.subscribeToEachLinkOnChanges();
    });
  }
  subscribeToEachLinkOnChanges() {
    this.linkInputChangesSubscription?.unsubscribe();
    const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
    this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
      if (this._isActive !== this.isLinkActive(this.router)(link)) {
        this.update();
      }
    });
  }
  set routerLinkActive(data) {
    const classes = Array.isArray(data) ? data : data.split(" ");
    this.classes = classes.filter((c9) => !!c9);
  }
  ngOnChanges(changes) {
    this.update();
  }
  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
    this.linkInputChangesSubscription?.unsubscribe();
  }
  update() {
    if (!this.links || !this.router.navigated) return;
    queueMicrotask(() => {
      const hasActiveLinks = this.hasActiveLinks();
      this.classes.forEach((c9) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c9);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c9);
        }
      });
      if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
      }
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.cdr.markForCheck();
        this.isActiveChange.emit(hasActiveLinks);
      }
    });
  }
  isLinkActive(router) {
    const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact ?? false ? __spreadValues({}, exactMatchOptions) : __spreadValues({}, subsetMatchOptions);
    return (link) => {
      const urlTree = link.urlTree;
      return urlTree ? untracked(isActive(urlTree, router, options)) : false;
    };
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
  }
  static ɵfac = function RouterLinkActive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkActive)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkActive,
    selectors: [["", "routerLinkActive", ""]],
    contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, RouterLink, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.links = _t);
      }
    },
    inputs: {
      routerLinkActiveOptions: "routerLinkActiveOptions",
      ariaCurrentWhenActive: "ariaCurrentWhenActive",
      routerLinkActive: "routerLinkActive"
    },
    outputs: {
      isActiveChange: "isActiveChange"
    },
    exportAs: ["routerLinkActive"],
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkActive, [{
    type: Directive,
    args: [{
      selector: "[routerLinkActive]",
      exportAs: "routerLinkActive"
    }]
  }], () => [{
    type: Router
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    links: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }],
    routerLinkActiveOptions: [{
      type: Input
    }],
    ariaCurrentWhenActive: [{
      type: Input
    }],
    isActiveChange: [{
      type: Output
    }],
    routerLinkActive: [{
      type: Input
    }]
  });
})();
function isActiveMatchOptions(options) {
  const o12 = options;
  return !!(o12.paths || o12.matrixParams || o12.queryParams || o12.fragment);
}
var PreloadingStrategy = class {
};
var PreloadAllModules = class _PreloadAllModules {
  preload(route, fn) {
    return fn().pipe(catchError(() => of(null)));
  }
  static ɵfac = function PreloadAllModules_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreloadAllModules)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PreloadAllModules,
    factory: _PreloadAllModules.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadAllModules, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NoPreloading = class _NoPreloading {
  preload(route, fn) {
    return of(null);
  }
  static ɵfac = function NoPreloading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoPreloading)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NoPreloading,
    factory: _NoPreloading.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPreloading, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RouterPreloader = class _RouterPreloader {
  router;
  injector;
  preloadingStrategy;
  loader;
  subscription;
  constructor(router, injector, preloadingStrategy, loader) {
    this.router = router;
    this.injector = injector;
    this.preloadingStrategy = preloadingStrategy;
    this.loader = loader;
  }
  setUpPreloading() {
    this.subscription = this.router.events.pipe(filter((e4) => e4 instanceof NavigationEnd), concatMap(() => this.preload())).subscribe(() => {
    });
  }
  preload() {
    return this.processRoutes(this.injector, this.router.config);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  processRoutes(injector, routes) {
    const res = [];
    for (const route of routes) {
      if (route.providers && !route._injector) {
        route._injector = createEnvironmentInjector(route.providers, injector, typeof ngDevMode === "undefined" || ngDevMode ? `Route: ${route.path}` : "");
      }
      const injectorForCurrentRoute = route._injector ?? injector;
      if (route._loadedNgModuleFactory && !route._loadedInjector) {
        route._loadedInjector = route._loadedNgModuleFactory.create(injectorForCurrentRoute).injector;
      }
      const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
      if (route.loadChildren && !route._loadedRoutes && route.canLoad === void 0 || route.loadComponent && !route._loadedComponent) {
        res.push(this.preloadConfig(injectorForCurrentRoute, route));
      }
      if (route.children || route._loadedRoutes) {
        res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
      }
    }
    return from(res).pipe(mergeAll());
  }
  preloadConfig(injector, route) {
    return this.preloadingStrategy.preload(route, () => {
      if (injector.destroyed) {
        return of(null);
      }
      let loadedChildren$;
      if (route.loadChildren && route.canLoad === void 0) {
        loadedChildren$ = from(this.loader.loadChildren(injector, route));
      } else {
        loadedChildren$ = of(null);
      }
      const recursiveLoadChildren$ = loadedChildren$.pipe(mergeMap((config) => {
        if (config === null) {
          return of(void 0);
        }
        route._loadedRoutes = config.routes;
        route._loadedInjector = config.injector;
        route._loadedNgModuleFactory = config.factory;
        return this.processRoutes(config.injector ?? injector, config.routes);
      }));
      if (route.loadComponent && !route._loadedComponent) {
        const loadComponent$ = this.loader.loadComponent(injector, route);
        return from([recursiveLoadChildren$, loadComponent$]).pipe(mergeAll());
      } else {
        return recursiveLoadChildren$;
      }
    });
  }
  static ɵfac = function RouterPreloader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterPreloader)(ɵɵinject(Router), ɵɵinject(EnvironmentInjector), ɵɵinject(PreloadingStrategy), ɵɵinject(RouterConfigLoader));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RouterPreloader,
    factory: _RouterPreloader.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterPreloader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: EnvironmentInjector
  }, {
    type: PreloadingStrategy
  }, {
    type: RouterConfigLoader
  }], null);
})();
var ROUTER_SCROLLER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Router Scroller" : "");
var RouterScroller = class _RouterScroller {
  options;
  routerEventsSubscription;
  scrollEventsSubscription;
  lastId = 0;
  lastSource = IMPERATIVE_NAVIGATION;
  restoredId = 0;
  store = {};
  isHydrating = inject(IS_HYDRATION_DOM_REUSE_ENABLED, {
    optional: true
  }) ?? false;
  urlSerializer = inject(UrlSerializer);
  zone = inject(NgZone);
  viewportScroller = inject(ViewportScroller);
  transitions = inject(NavigationTransitions);
  constructor(options) {
    this.options = options;
    this.options.scrollPositionRestoration ||= "disabled";
    this.options.anchorScrolling ||= "disabled";
    if (this.isHydrating) {
      inject(ApplicationRef).whenStable().then(() => {
        this.isHydrating = false;
      });
    }
  }
  init() {
    if (this.options.scrollPositionRestoration !== "disabled") {
      this.viewportScroller.setHistoryScrollRestoration("manual");
    }
    this.routerEventsSubscription = this.createScrollEvents();
    this.scrollEventsSubscription = this.consumeScrollEvents();
  }
  createScrollEvents() {
    return this.transitions.events.subscribe((e4) => {
      if (e4 instanceof NavigationStart) {
        this.store[this.lastId] = this.viewportScroller.getScrollPosition();
        this.lastSource = e4.navigationTrigger;
        this.restoredId = e4.restoredState ? e4.restoredState.navigationId : 0;
      } else if (e4 instanceof NavigationEnd) {
        this.lastId = e4.id;
        this.scheduleScrollEvent(e4, this.urlSerializer.parse(e4.urlAfterRedirects).fragment);
      } else if (e4 instanceof NavigationSkipped && e4.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        this.lastSource = void 0;
        this.restoredId = 0;
        this.scheduleScrollEvent(e4, this.urlSerializer.parse(e4.url).fragment);
      }
    });
  }
  consumeScrollEvents() {
    return this.transitions.events.subscribe((e4) => {
      if (!(e4 instanceof Scroll) || e4.scrollBehavior === "manual") return;
      const instantScroll = {
        behavior: "instant"
      };
      if (e4.position) {
        if (this.options.scrollPositionRestoration === "top") {
          this.viewportScroller.scrollToPosition([0, 0], instantScroll);
        } else if (this.options.scrollPositionRestoration === "enabled") {
          this.viewportScroller.scrollToPosition(e4.position, instantScroll);
        }
      } else {
        if (e4.anchor && this.options.anchorScrolling === "enabled") {
          this.viewportScroller.scrollToAnchor(e4.anchor);
        } else if (this.options.scrollPositionRestoration !== "disabled") {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
  scheduleScrollEvent(routerEvent, anchor) {
    if (this.isHydrating) return;
    const scroll = untracked(this.transitions.currentNavigation)?.extras.scroll;
    this.zone.runOutsideAngular(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve);
        if (typeof requestAnimationFrame !== "undefined") {
          requestAnimationFrame(resolve);
        }
      });
      this.zone.run(() => {
        this.transitions.events.next(new Scroll(routerEvent, this.lastSource === "popstate" ? this.store[this.restoredId] : null, anchor, scroll));
      });
    });
  }
  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this.scrollEventsSubscription?.unsubscribe();
  }
  static ɵfac = function RouterScroller_Factory(__ngFactoryType__) {
    ɵɵinvalidFactory();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RouterScroller,
    factory: _RouterScroller.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterScroller, [{
    type: Injectable
  }], () => [{
    type: void 0
  }], null);
})();
var NavigationStateManager = class _NavigationStateManager extends StateManager {
  injector = inject(EnvironmentInjector);
  navigation = inject(PlatformNavigation);
  inMemoryScrollingEnabled = inject(ROUTER_SCROLLER, {
    optional: true
  }) !== null;
  base = new URL(inject(PlatformLocation).href).origin;
  appRootURL = new URL(this.location.prepareExternalUrl?.("/") ?? "/", this.base).href;
  precommitHandlerSupported = inject(PRECOMMIT_HANDLER_SUPPORTED);
  activeHistoryEntry = this.navigation.currentEntry;
  currentNavigation = {};
  nonRouterCurrentEntryChangeSubject = new Subject();
  nonRouterEntryChangeListener;
  get registered() {
    return this.nonRouterEntryChangeListener !== void 0 && !this.nonRouterEntryChangeListener.closed;
  }
  constructor() {
    super();
    const navigateListener = (event) => {
      this.handleNavigate(event);
    };
    this.navigation.addEventListener("navigate", navigateListener);
    inject(DestroyRef).onDestroy(() => this.navigation.removeEventListener("navigate", navigateListener));
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    this.activeHistoryEntry = this.navigation.currentEntry;
    this.nonRouterEntryChangeListener = this.nonRouterCurrentEntryChangeSubject.subscribe(({
      path,
      state
    }) => {
      listener(path, state, "popstate", !this.precommitHandlerSupported ? {
        replaceUrl: true
      } : {});
    });
    return this.nonRouterEntryChangeListener;
  }
  async handleRouterEvent(e4, transition) {
    this.currentNavigation = __spreadProps(__spreadValues({}, this.currentNavigation), {
      routerTransition: transition
    });
    if (e4 instanceof NavigationStart) {
      this.updateStateMemento();
      if (this.precommitHandlerSupported) {
        this.maybeCreateNavigationForTransition(transition);
      }
    } else if (e4 instanceof NavigationSkipped) {
      this.finishNavigation();
      this.commitTransition(transition);
    } else if (e4 instanceof BeforeRoutesRecognized) {
      transition.routesRecognizeHandler.deferredHandle = new Promise(async (resolve) => {
        if (this.urlUpdateStrategy === "eager") {
          try {
            this.maybeCreateNavigationForTransition(transition);
            await this.currentNavigation.commitUrl?.();
          } catch {
            return;
          }
        }
        resolve();
      });
    } else if (e4 instanceof BeforeActivateRoutes) {
      transition.beforeActivateHandler.deferredHandle = new Promise(async (resolve) => {
        if (this.urlUpdateStrategy === "deferred") {
          try {
            this.maybeCreateNavigationForTransition(transition);
            await this.currentNavigation.commitUrl?.();
          } catch {
            return;
          }
        }
        this.commitTransition(transition);
        resolve();
      });
    } else if (e4 instanceof NavigationCancel || e4 instanceof NavigationError) {
      const redirectingBeforeUrlCommit = e4 instanceof NavigationCancel && e4.code === NavigationCancellationCode.Redirect && !!this.currentNavigation.commitUrl;
      if (redirectingBeforeUrlCommit) {
        return;
      }
      void this.cancel(transition, e4);
    } else if (e4 instanceof NavigationEnd) {
      const {
        resolveHandler,
        removeAbortListener
      } = this.currentNavigation;
      this.currentNavigation = {};
      removeAbortListener?.();
      this.activeHistoryEntry = this.navigation.currentEntry;
      afterNextRender({
        read: () => resolveHandler?.()
      }, {
        injector: this.injector
      });
    }
  }
  maybeCreateNavigationForTransition(transition) {
    const {
      navigationEvent,
      commitUrl
    } = this.currentNavigation;
    if (commitUrl || navigationEvent && navigationEvent.navigationType === "traverse" && this.eventAndRouterDestinationsMatch(navigationEvent, transition)) {
      return;
    }
    this.currentNavigation.removeAbortListener?.();
    const path = this.createBrowserPath(transition);
    this.navigate(path, transition);
  }
  navigate(internalPath, transition) {
    const path = transition.extras.skipLocationChange ? this.navigation.currentEntry.url : this.location.prepareExternalUrl(internalPath);
    const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition));
    const info = {
      ɵrouterInfo: {
        intercept: true
      }
    };
    if (!this.navigation.transition && this.currentNavigation.navigationEvent) {
      transition.extras.replaceUrl = false;
    }
    const history = this.location.isCurrentPathEqualTo(path) || transition.extras.replaceUrl || transition.extras.skipLocationChange ? "replace" : "push";
    handleResultRejections(this.navigation.navigate(path, {
      state,
      history,
      info
    }));
  }
  finishNavigation() {
    this.currentNavigation.commitUrl?.();
    this.currentNavigation?.resolveHandler?.();
    this.currentNavigation = {};
  }
  async cancel(transition, cause) {
    this.currentNavigation.rejectNavigateEvent?.();
    const clearedState = {};
    this.currentNavigation = clearedState;
    if (isRedirectingEvent(cause)) {
      return;
    }
    const isTraversalReset = this.canceledNavigationResolution === "computed" && this.navigation.currentEntry.key !== this.activeHistoryEntry.key;
    this.resetInternalState(transition.finalUrl, isTraversalReset);
    if (this.navigation.currentEntry.id === this.activeHistoryEntry.id) {
      return;
    }
    if (cause instanceof NavigationCancel && cause.code === NavigationCancellationCode.Aborted) {
      await Promise.resolve();
      if (this.currentNavigation !== clearedState) {
        return;
      }
    }
    if (isTraversalReset) {
      handleResultRejections(this.navigation.traverseTo(this.activeHistoryEntry.key, {
        info: {
          ɵrouterInfo: {
            intercept: false
          }
        }
      }));
    } else {
      const internalPath = this.urlSerializer.serialize(this.getCurrentUrlTree());
      const pathOrUrl = this.location.prepareExternalUrl(internalPath);
      handleResultRejections(this.navigation.navigate(pathOrUrl, {
        state: this.activeHistoryEntry.getState(),
        history: "replace",
        info: {
          ɵrouterInfo: {
            intercept: false
          }
        }
      }));
    }
  }
  resetInternalState(finalUrl, traversalReset) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = traversalReset ? this.stateMemento.rawUrlTree : this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
  }
  handleNavigate(event) {
    if (!event.canIntercept || event.navigationType === "reload") {
      return;
    }
    const routerInfo = event?.info?.ɵrouterInfo;
    if (routerInfo && !routerInfo.intercept) {
      return;
    }
    const isTriggeredByRouterTransition = !!routerInfo;
    if (!isTriggeredByRouterTransition) {
      this.currentNavigation.routerTransition?.abort();
      if (!this.registered) {
        this.finishNavigation();
        return;
      }
    }
    this.currentNavigation = __spreadValues({}, this.currentNavigation);
    this.currentNavigation.navigationEvent = event;
    const abortHandler = () => {
      this.currentNavigation.routerTransition?.abort();
    };
    event.signal.addEventListener("abort", abortHandler);
    this.currentNavigation.removeAbortListener = () => event.signal.removeEventListener("abort", abortHandler);
    let scroll = this.inMemoryScrollingEnabled ? "manual" : this.currentNavigation.routerTransition?.extras.scroll ?? "after-transition";
    const interceptOptions = {
      scroll
    };
    const {
      promise: handlerPromise,
      resolve: resolveHandler,
      reject: rejectHandler
    } = promiseWithResolvers();
    const {
      promise: precommitHandlerPromise,
      resolve: resolvePrecommitHandler,
      reject: rejectPrecommitHandler
    } = promiseWithResolvers();
    this.currentNavigation.rejectNavigateEvent = () => {
      event.signal.removeEventListener("abort", abortHandler);
      rejectPrecommitHandler();
      rejectHandler();
    };
    this.currentNavigation.resolveHandler = () => {
      this.currentNavigation.removeAbortListener?.();
      resolveHandler();
    };
    handlerPromise.catch(() => {
    });
    precommitHandlerPromise.catch(() => {
    });
    interceptOptions.handler = () => handlerPromise;
    if (this.deferredCommitSupported(event)) {
      const redirect = new Promise((resolve) => {
        interceptOptions.precommitHandler = (controller) => {
          if (this.navigation.transition?.navigationType === "traverse") {
            resolve(() => {
            });
          } else {
            resolve(controller.redirect.bind(controller));
          }
          return precommitHandlerPromise;
        };
      });
      this.currentNavigation.commitUrl = async () => {
        this.currentNavigation.commitUrl = void 0;
        const transition = this.currentNavigation.routerTransition;
        if (transition && !transition.extras.skipLocationChange) {
          const internalPath = this.createBrowserPath(transition);
          const history = this.location.isCurrentPathEqualTo(internalPath) || !!transition.extras.replaceUrl ? "replace" : "push";
          const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition));
          const pathOrUrl = this.location.prepareExternalUrl(internalPath);
          (await redirect)(pathOrUrl, {
            state,
            history
          });
        }
        resolvePrecommitHandler();
        return await this.navigation.transition?.committed;
      };
    }
    event.intercept(interceptOptions);
    if (!isTriggeredByRouterTransition) {
      this.handleNavigateEventTriggeredOutsideRouterAPIs(event);
    }
  }
  handleNavigateEventTriggeredOutsideRouterAPIs(event) {
    const path = event.destination.url.substring(this.appRootURL.length - 1);
    const state = event.destination.getState();
    this.nonRouterCurrentEntryChangeSubject.next({
      path,
      state
    });
  }
  eventAndRouterDestinationsMatch(navigateEvent, transition) {
    const internalPath = this.createBrowserPath(transition);
    const eventDestination = new URL(navigateEvent.destination.url);
    const routerDestination = this.location.prepareExternalUrl(internalPath);
    return new URL(routerDestination, eventDestination.origin).href === eventDestination.href;
  }
  generateNgRouterState(transition) {
    return __spreadProps(__spreadValues({}, this.routerUrlState(transition)), {
      navigationId: transition.id
    });
  }
  deferredCommitSupported(event) {
    return this.precommitHandlerSupported && event.cancelable;
  }
  static ɵfac = function NavigationStateManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationStateManager)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NavigationStateManager,
    factory: _NavigationStateManager.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function handleResultRejections(result) {
  result.finished?.catch(() => {
  });
  result.committed?.catch(() => {
  });
  return result;
}
function rootRoute() {
  return inject(Router).routerState.root;
}
function routerFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
var ROUTER_IS_PROVIDED = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Router is provided" : "", {
  factory: () => false
});
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, {
      optional: true
    })?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, {
      optional: true
    })?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  factory: () => 1
});
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
    useValue: true
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 0
  }, provideAppInitializer(() => {
    const injector = inject(Injector);
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
    return locationInitialized.then(() => {
      return new Promise((resolve) => {
        const router = injector.get(Router);
        const bootstrapDone = injector.get(BOOTSTRAP_DONE);
        afterNextNavigation(router, () => {
          resolve(true);
        });
        injector.get(NavigationTransitions).afterPreactivation = () => {
          resolve(true);
          return bootstrapDone.closed ? of(void 0) : bootstrapDone;
        };
        router.initialNavigation();
      });
    });
  })];
  return routerFeature(2, providers);
}
function withDisabledInitialNavigation() {
  const providers = [provideAppInitializer(() => {
    inject(Router).setUpLocationChangeListener();
  }), {
    provide: INITIAL_NAVIGATION,
    useValue: 2
  }];
  return routerFeature(3, providers);
}
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    providers = [{
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = inject(Router);
        return () => router.events.subscribe((e4) => {
          console.group?.(`Router Event: ${e4.constructor.name}`);
          console.log(stringifyEvent(e4));
          console.log(e4);
          console.groupEnd?.();
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1, providers);
}
var ROUTER_PRELOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}
function withViewTransitions(options) {
  performanceMarkFeature("NgRouterViewTransitions");
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: __spreadValues({
      skipNextTransition: !!options?.skipInitialTransition
    }, options)
  }];
  return routerFeature(9, providers);
}
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, ɵEmptyOutletComponent];
var ROUTER_FORROOT_GUARD = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router duplicate forRoot guard" : "");
var ROUTER_PROVIDERS = [Location, {
  provide: UrlSerializer,
  useClass: DefaultUrlSerializer
}, Router, ChildrenOutletContexts, {
  provide: ActivatedRoute,
  useFactory: rootRoute
}, RouterConfigLoader, typeof ngDevMode === "undefined" || ngDevMode ? {
  provide: ROUTER_IS_PROVIDED,
  useValue: true
} : []];
var RouterModule = class _RouterModule {
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      inject(ROUTER_FORROOT_GUARD, {
        optional: true
      });
    }
  }
  static forRoot(routes, config) {
    return {
      ngModule: _RouterModule,
      providers: [ROUTER_PROVIDERS, typeof ngDevMode === "undefined" || ngDevMode ? config?.enableTracing ? withDebugTracing().ɵproviders : [] : [], {
        provide: ROUTES,
        multi: true,
        useValue: routes
      }, typeof ngDevMode === "undefined" || ngDevMode ? {
        provide: ROUTER_FORROOT_GUARD,
        useFactory: provideForRootGuard
      } : [], config?.errorHandler ? {
        provide: NAVIGATION_ERROR_HANDLER,
        useValue: config.errorHandler
      } : [], {
        provide: ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).ɵproviders : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().ɵproviders : [], config?.enableViewTransitions ? withViewTransitions().ɵproviders : [], provideRouterInitializer()]
    };
  }
  static forChild(routes) {
    return {
      ngModule: _RouterModule,
      providers: [{
        provide: ROUTES,
        multi: true,
        useValue: routes
      }]
    };
  }
  static ɵfac = function RouterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RouterModule,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, ɵEmptyOutletComponent],
    exports: [RouterOutlet, RouterLink, RouterLinkActive, ɵEmptyOutletComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterModule, [{
    type: NgModule,
    args: [{
      imports: ROUTER_DIRECTIVES,
      exports: ROUTER_DIRECTIVES
    }]
  }], () => [], null);
})();
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = inject(ViewportScroller);
      const config = inject(ROUTER_CONFIGURATION);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(config);
    }
  };
}
function provideHashLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  };
}
function providePathLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  };
}
function provideForRootGuard() {
  const router = inject(Router, {
    optional: true,
    skipSelf: true
  });
  if (router) {
    throw new RuntimeError(4007, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return "guarded";
}
function provideInitialNavigation(config) {
  return [config.initialNavigation === "disabled" ? withDisabledInitialNavigation().ɵproviders : [], config.initialNavigation === "enabledBlocking" ? withEnabledBlockingInitialNavigation().ɵproviders : []];
}
var ROUTER_INITIALIZER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Router Initializer" : "");
function provideRouterInitializer() {
  return [{
    provide: ROUTER_INITIALIZER,
    useFactory: getBootstrapListener
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useExisting: ROUTER_INITIALIZER
  }];
}

// node_modules/@angular/router/fesm2022/router.mjs
var VERSION = new Version("21.2.24");

// node_modules/@ionic/core/components/p-hHmYLOfE.js
var t3 = (t7, M6, r9, n7, e4) => h2(t7[1], M6[1], r9[1], n7[1], e4).map(((h6) => a3(t7[0], M6[0], r9[0], n7[0], h6)));
var a3 = (t7, a6, h6, M6, r9) => r9 * (3 * a6 * Math.pow(r9 - 1, 2) + r9 * (-3 * h6 * r9 + 3 * h6 + M6 * r9)) - t7 * Math.pow(r9 - 1, 3);
var h2 = (t7, a6, h6, r9, n7) => M((r9 -= n7) - 3 * (h6 -= n7) + 3 * (a6 -= n7) - (t7 -= n7), 3 * h6 - 6 * a6 + 3 * t7, 3 * a6 - 3 * t7, t7).filter(((t8) => t8 >= 0 && t8 <= 1));
var M = (t7, a6, h6, M6) => {
  if (0 === t7) return ((t8, a7, h7) => {
    const M7 = a7 * a7 - 4 * t8 * h7;
    return M7 < 0 ? [] : [(-a7 + Math.sqrt(M7)) / (2 * t8), (-a7 - Math.sqrt(M7)) / (2 * t8)];
  })(a6, h6, M6);
  const r9 = (3 * (h6 /= t7) - (a6 /= t7) * a6) / 3, n7 = (2 * a6 * a6 * a6 - 9 * a6 * h6 + 27 * (M6 /= t7)) / 27;
  if (0 === r9) return [Math.pow(-n7, 1 / 3)];
  if (0 === n7) return [Math.sqrt(-r9), -Math.sqrt(-r9)];
  const e4 = Math.pow(n7 / 2, 2) + Math.pow(r9 / 3, 3);
  if (0 === e4) return [Math.pow(n7 / 2, 0.5) - a6 / 3];
  if (e4 > 0) return [Math.pow(-n7 / 2 + Math.sqrt(e4), 1 / 3) - Math.pow(n7 / 2 + Math.sqrt(e4), 1 / 3) - a6 / 3];
  const u5 = Math.sqrt(Math.pow(-r9 / 3, 3)), o12 = Math.acos(-n7 / (2 * Math.sqrt(Math.pow(-r9 / 3, 3)))), s6 = 2 * Math.pow(u5, 1 / 3);
  return [s6 * Math.cos(o12 / 3) - a6 / 3, s6 * Math.cos((o12 + 2 * Math.PI) / 3) - a6 / 3, s6 * Math.cos((o12 + 4 * Math.PI) / 3) - a6 / 3];
};

// node_modules/@ionic/core/components/p-DF5FRPZh.js
var a4 = (o12) => c4(o12);
var d4 = (o12, i5) => ("string" == typeof o12 && (i5 = o12, o12 = void 0), a4(o12).includes(i5));
var c4 = (o12 = window) => {
  if (void 0 === o12) return [];
  o12.Ionic = o12.Ionic || {};
  let i5 = o12.Ionic.platforms;
  return null == i5 && (i5 = o12.Ionic.platforms = p3(o12), i5.forEach(((i6) => o12.document.documentElement.classList.add(`plt-${i6}`)))), i5;
};
var p3 = (i5) => {
  const t7 = n.get("platform");
  return Object.keys(g).filter(((o12) => {
    const e4 = t7?.[o12];
    return "function" == typeof e4 ? e4(i5) : g[o12](i5);
  }));
};
var m3 = (o12) => !!b2(o12, /iPad/i) || !(!b2(o12, /Macintosh/i) || !f2(o12));
var l3 = (o12) => b2(o12, /android|sink/i);
var f2 = (o12) => y(o12, "(any-pointer:coarse)");
var u2 = (o12) => h3(o12) || w(o12);
var h3 = (o12) => !!(o12.cordova || o12.phonegap || o12.PhoneGap);
var w = (o12) => {
  const i5 = o12.Capacitor;
  return !!i5?.isNativePlatform?.();
};
var b2 = (o12, i5) => i5.test(o12.navigator.userAgent);
var y = (o12, i5) => o12.matchMedia?.(i5).matches;
var g = { ipad: m3, iphone: (o12) => b2(o12, /iPhone/i), ios: (o12) => b2(o12, /iPhone|iPod/i) || m3(o12), android: l3, phablet: (o12) => {
  const i5 = o12.innerWidth, t7 = o12.innerHeight, e4 = Math.min(i5, t7), n7 = Math.max(i5, t7);
  return e4 > 390 && e4 < 520 && n7 > 620 && n7 < 800;
}, tablet: (o12) => {
  const i5 = o12.innerWidth, t7 = o12.innerHeight, e4 = Math.min(i5, t7), n7 = Math.max(i5, t7);
  return m3(o12) || ((o13) => l3(o13) && !b2(o13, /mobile/i))(o12) || e4 > 460 && e4 < 820 && n7 > 780 && n7 < 1400;
}, cordova: h3, capacitor: w, electron: (o12) => b2(o12, /electron/i), pwa: (o12) => !(!o12.matchMedia?.("(display-mode: standalone)").matches && !o12.navigator.standalone), mobile: f2, mobileweb: (o12) => f2(o12) && !u2(o12), desktop: (o12) => !f2(o12), hybrid: u2 };
var M2;
var v2 = (o12) => o12 && qt(o12) || M2;
var P = (n7 = {}) => {
  if ("undefined" == typeof window) return;
  const a6 = window.document, p6 = window, m5 = p6.Ionic = p6.Ionic || {}, l7 = __spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, e(p6)), { persistConfig: false }), m5.config), s(p6)), n7);
  n.reset(l7), n.getBoolean("persistConfig") && o(p6, l7), c4(p6), m5.config = n, m5.mode = M2 = n.get("mode", a6.documentElement.getAttribute("mode") || (d4(p6, "ios") ? "ios" : "md")), n.set("mode", M2), a6.documentElement.setAttribute("mode", M2), a6.documentElement.classList.add(M2), n.getBoolean("_testing") && n.set("animated", false);
  const f5 = (o12) => o12.tagName?.startsWith("ION-"), u5 = (o12) => ["ios", "md"].includes(o12);
  Pt(((o12) => {
    for (; o12; ) {
      const i5 = o12.mode || o12.getAttribute("mode");
      if (i5) {
        if (u5(i5)) return i5;
        f5(o12) && a('Invalid ionic mode: "' + i5 + '", expected: "ios" or "md"');
      }
      o12 = o12.parentElement;
    }
    return M2;
  }));
};

// node_modules/@ionic/core/components/p-DTo_pxeB.js
var o6 = (o12) => {
  try {
    if (o12 instanceof h4) return o12.value;
    if (!r4() || "string" != typeof o12 || "" === o12) return o12;
    if (/onload\s*=/i.test(o12)) return a("sanitizeDOMString - Content was discarded because it appears to contain an onload handler:", o12.substring(0, 100)), "";
    const e4 = document.createDocumentFragment(), n7 = document.createElement("div");
    e4.appendChild(n7), n7.innerHTML = o12, y2.forEach(((t7) => {
      const o13 = e4.querySelectorAll(t7);
      for (let t8 = o13.length - 1; t8 >= 0; t8--) {
        const n8 = o13[t8];
        n8.parentNode ? n8.parentNode.removeChild(n8) : e4.removeChild(n8);
        const r9 = i3(n8);
        for (let t9 = 0; t9 < r9.length; t9++) s4(r9[t9], c5);
      }
    }));
    const a6 = i3(e4);
    for (let t7 = 0; t7 < a6.length; t7++) s4(a6[t7], c5);
    const l7 = document.createElement("div");
    l7.appendChild(e4);
    const d6 = l7.querySelector("div");
    return null !== d6 ? d6.innerHTML : l7.innerHTML;
  } catch (t7) {
    return d("sanitizeDOMString", t7), "";
  }
};
var n4 = (t7) => {
  r4() && (y2.forEach(((e4) => {
    const o12 = t7.querySelectorAll(e4);
    for (let t8 = o12.length - 1; t8 >= 0; t8--) o12[t8].remove();
  })), s4(t7, l4, d5));
};
var s4 = (t7, e4, o12 = []) => {
  if (t7.nodeType && 1 !== t7.nodeType) return;
  if ("undefined" != typeof NamedNodeMap && !(t7.attributes instanceof NamedNodeMap)) return void t7.remove();
  t7.removeAttribute("style");
  for (let n8 = t7.attributes.length - 1; n8 >= 0; n8--) {
    const s6 = t7.attributes.item(n8), i5 = s6.name, r9 = i5.toLowerCase();
    if (!f3(r9, e4, o12)) {
      t7.removeAttribute(i5);
      continue;
    }
    const a6 = s6.value;
    if (null == a6) continue;
    const c9 = a6.replace(p4, "").toLowerCase();
    (c9.includes("javascript:") || c9.includes("vbscript:") || u3.includes(r9) && c9.startsWith("data:") && !m4.test(c9)) && t7.removeAttribute(i5);
  }
  const n7 = i3(t7);
  for (let t8 = 0; t8 < n7.length; t8++) s4(n7[t8], e4, o12);
};
var i3 = (t7) => null != t7.children ? t7.children : t7.childNodes;
var r4 = () => {
  const t7 = window, e4 = t7?.Ionic?.config;
  return !e4 || (e4.get ? e4.get("sanitizerEnabled", true) : true === e4.sanitizerEnabled || void 0 === e4.sanitizerEnabled);
};
var a5 = (t7) => {
  const e4 = [];
  t7.tagName in b3 && e4.push(t7);
  for (const o12 of Object.keys(b3)) e4.push(...Array.from(t7.querySelectorAll(o12.toLowerCase())));
  for (const t8 of e4) {
    if (!(t8.tagName in b3)) continue;
    const e5 = b3[t8.tagName];
    for (const o12 of e5) {
      const e6 = t8[o12];
      "string" == typeof e6 && e6.length > 0 && !t8.hasAttribute(o12) && t8.setAttribute(o12, e6);
    }
  }
};
var c5 = ["class", "id", "href", "src", "name", "slot"];
var l4 = ["class", "id", "slot", "name", "title", "alt", "lang", "dir", "role", "type", "value", "disabled", "width", "height", "href", "src", "color", "size", "shape", "fill", "expand", "mode", "theme", "icon", "label", "label-placement", "justify", "inset", "lines", "ios", "md", "xmlns", "viewbox", "preserveaspectratio", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "stroke-opacity", "stroke-dasharray", "fill-rule", "fill-opacity", "clip-rule", "d", "points", "cx", "cy", "r", "rx", "ry", "x", "y", "x1", "y1", "x2", "y2", "transform", "opacity"];
var d5 = ["aria-", "data-"];
var f3 = (t7, e4, o12) => !!e4.includes(t7) || o12.some(((e5) => t7.startsWith(e5)));
var p4 = /[\u0000-\u0020\u007f-\u00a0]/g;
var u3 = ["href", "src"];
var m4 = /^data:image\/(?:png|jpe?g|gif|webp|bmp|avif|x-icon|vnd\.microsoft\.icon)[;,]/;
var y2 = ["script", "style", "iframe", "meta", "link", "object", "embed", "base"];
var b3 = { "ION-ICON": ["icon", "name", "src", "ios", "md"] };
var h4 = class {
  constructor(t7) {
    this.value = t7;
  }
};

// node_modules/@ionic/core/components/p-DWCzVL3Y.js
var s5 = false;

// node_modules/@ionic/core/components/p-byZM6qHV.js
var n5 = (n7, o12) => null !== o12.closest(n7);
var o7 = (n7, o12) => "string" == typeof n7 && n7.length > 0 ? __spreadValues({ "ion-color": true, [`ion-color-${n7}`]: true }, o12) : o12;
var r5 = (n7) => {
  const o12 = {};
  return ((n8) => void 0 !== n8 ? (Array.isArray(n8) ? n8 : n8.split(" ")).filter(((n9) => null != n9)).map(((n9) => n9.trim())).filter(((n9) => "" !== n9)) : [])(n7).forEach(((n8) => o12[n8] = true)), o12;
};
var t4 = /^[a-z][a-z0-9+\-.]*:/;
var l5 = async (n7, o12, r9, l7) => {
  if (null != n7 && "#" !== n7[0] && !t4.test(n7)) {
    const t7 = document.querySelector("ion-router");
    if (t7) return null != o12 && o12.preventDefault(), t7.push(n7, r9, l7);
  }
  return false;
};

// node_modules/@ionic/core/components/p-CtMgk_1c.js
var o8 = (t7) => r().duration(t7 ? 400 : 300);
var i4 = (t7) => {
  let e4, n7;
  const r9 = t7.width + 8, i5 = r(), u5 = r();
  t7.isEndSide ? (e4 = r9 + "px", n7 = "0px") : (e4 = -r9 + "px", n7 = "0px"), i5.addElement(t7.menuInnerEl).fromTo("transform", `translateX(${e4})`, `translateX(${n7})`);
  const c9 = "ios" === v2(t7), p6 = c9 ? 0.2 : 0.25;
  return u5.addElement(t7.backdropEl).fromTo("opacity", 0.01, p6), o8(c9).addAnimation([i5, u5]);
};
var u4 = (t7) => {
  let e4, n7;
  const r9 = v2(t7), i5 = t7.width;
  t7.isEndSide ? (e4 = -i5 + "px", n7 = i5 + "px") : (e4 = i5 + "px", n7 = -i5 + "px");
  const u5 = r().addElement(t7.menuInnerEl).fromTo("transform", `translateX(${n7})`, "translateX(0px)"), c9 = r().addElement(t7.contentEl).fromTo("transform", "translateX(0px)", `translateX(${e4})`), p6 = r().addElement(t7.backdropEl).fromTo("opacity", 0.01, 0.32);
  return o8("ios" === r9).addAnimation([u5, c9, p6]);
};
var c6 = (t7) => {
  const e4 = v2(t7), n7 = t7.width * (t7.isEndSide ? -1 : 1) + "px", r9 = r().addElement(t7.contentEl).fromTo("transform", "translateX(0px)", `translateX(${n7})`);
  return o8("ios" === e4).addAnimation(r9);
};
var p5 = (() => {
  const s6 = /* @__PURE__ */ new Map(), a6 = [], o12 = async (t7, e4 = false) => {
    if (await d6(), "start" === t7 || "end" === t7) {
      const r9 = a6.filter(((e5) => e5.side === t7 && !e5.disabled));
      if (r9.length >= 1) return r9.length > 1 && e4 && a(`menuController queried for a menu on the "${t7}" side, but ${r9.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, r9.map(((t8) => t8.el))), r9[0].el;
      const s7 = a6.filter(((e5) => e5.side === t7));
      if (s7.length >= 1) return s7.length > 1 && e4 && a(`menuController queried for a menu on the "${t7}" side, but ${s7.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, s7.map(((t8) => t8.el))), s7[0].el;
    } else if (null != t7) return w3(((e5) => e5.menuId === t7));
    return w3(((t8) => !t8.disabled)) || (a6.length > 0 ? a6[0].el : void 0);
  }, p6 = async () => (await d6(), f5()), m5 = (t7, e4) => {
    s6.set(t7, e4);
  }, f5 = () => w3(((t7) => t7._isOpen)), l7 = () => a6.some(((t7) => t7.isAnimating)), w3 = (t7) => {
    const e4 = a6.find(t7);
    if (void 0 !== e4) return e4.el;
  }, d6 = () => Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(((t7) => new Promise(((e4) => n2(t7, e4))))));
  return m5("reveal", c6), m5("push", u4), m5("overlay", i4), o2?.addEventListener("ionBackButton", ((t7) => {
    const n7 = f5();
    n7 && t7.detail.register(c3, (() => n7.close()));
  })), { registerAnimation: m5, get: o12, getMenus: async () => (await d6(), a6.map(((t7) => t7.el))), getOpen: p6, isEnabled: async (t7) => {
    const e4 = await o12(t7);
    return !!e4 && !e4.disabled;
  }, swipeGesture: async (t7, e4) => {
    const n7 = await o12(e4);
    return n7 && (n7.swipeGesture = t7), n7;
  }, isAnimating: async () => (await d6(), l7()), isOpen: async (t7) => {
    if (null != t7) {
      const e4 = await o12(t7);
      return void 0 !== e4 && e4.isOpen();
    }
    return void 0 !== await p6();
  }, enable: async (t7, e4) => {
    const n7 = await o12(e4);
    return n7 && (n7.disabled = !t7), n7;
  }, toggle: async (t7) => {
    const e4 = await o12(t7, true);
    return !!e4 && e4.toggle();
  }, close: async (t7) => {
    const e4 = await (void 0 !== t7 ? o12(t7, true) : p6());
    return void 0 !== e4 && e4.close();
  }, open: async (t7) => {
    const e4 = await o12(t7, true);
    return !!e4 && e4.open();
  }, _getOpenSync: f5, _createAnimation: (t7, e4) => {
    const n7 = s6.get(t7);
    if (!n7) throw new Error("animation not registered");
    return n7(e4);
  }, _register: (t7) => {
    a6.indexOf(t7) < 0 && a6.push(t7);
  }, _unregister: (t7) => {
    const e4 = a6.indexOf(t7);
    e4 > -1 && a6.splice(e4, 1);
  }, _setOpen: async (t7, e4, n7, r9) => {
    if (l7()) return false;
    if (e4) {
      const e5 = await p6();
      e5 && t7.el !== e5 && await e5.setOpen(false, false);
    }
    return t7._setOpen(e4, n7, r9);
  } };
})();

// node_modules/@ionic/core/components/p-TsPC4TcB.js
var t5 = async (t7, o12, r9, n7, i5, s6) => {
  if (t7) return t7.attachViewToDom(o12, r9, i5, n7);
  if (!(s6 || "string" == typeof r9 || r9 instanceof HTMLElement)) throw new Error("framework delegate is missing");
  const a6 = "string" == typeof r9 ? o12.ownerDocument?.createElement(r9) : r9;
  return n7 && n7.forEach(((e4) => a6.classList.add(e4))), i5 && Object.assign(a6, i5), o12.appendChild(a6), await new Promise(((t8) => n2(a6, t8))), a6;
};
var o9 = (e4, t7) => {
  if (t7) {
    if (e4) return e4.removeViewFromDom(t7.parentElement, t7);
    t7.remove();
  }
  return Promise.resolve();
};
var r6 = () => {
  let t7, o12;
  return { attachViewToDom: async (r9, n7, i5 = {}, s6 = []) => {
    let a6;
    if (t7 = r9, n7) {
      const o13 = "string" == typeof n7 ? t7.ownerDocument?.createElement(n7) : n7;
      s6.forEach(((e4) => o13.classList.add(e4))), Object.assign(o13, i5), t7.appendChild(o13), a6 = o13, await new Promise(((t8) => n2(o13, t8)));
    } else if (t7.children.length > 0 && ("ION-MODAL" === t7.tagName || "ION-POPOVER" === t7.tagName) && !(a6 = t7.children[0]).classList.contains("ion-delegate-host")) {
      const e4 = t7.ownerDocument?.createElement("div");
      e4.classList.add("ion-delegate-host"), s6.forEach(((t8) => e4.classList.add(t8))), e4.append(...t7.children), t7.appendChild(e4), a6 = e4;
    }
    const c9 = document.querySelector("ion-app") || document.body;
    return o12 = document.createComment("ionic teleport"), t7.parentNode.insertBefore(o12, t7), c9.appendChild(t7), a6 ?? t7;
  }, removeViewFromDom: () => (t7 && o12 && (o12.parentNode.insertBefore(t7, o12), o12.remove()), Promise.resolve()) };
};

// node_modules/@ionic/core/components/p-CVNoHMcR.js
var f4 = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';
var h5 = (n7, e4) => {
  const o12 = n7.querySelector(f4);
  b4(o12, e4 ?? n7);
};
var v3 = (n7, e4) => {
  const o12 = Array.from(n7.querySelectorAll(f4));
  b4(o12.length > 0 ? o12[o12.length - 1] : null, e4 ?? n7);
};
var b4 = (n7, o12) => {
  let t7 = n7;
  const i5 = n7?.shadowRoot;
  if (i5 && (t7 = i5.querySelector(f4) || n7), t7) {
    const n8 = t7.closest("ion-radio-group");
    n8 ? n8.setFocus() : b(t7);
  } else o12.focus();
};
var w2 = 0;
var y3 = 0;
var g2 = /* @__PURE__ */ new WeakMap();
var x = (n7) => "ION-TOAST" !== n7.tagName && false !== n7.focusTrap && ((n8) => false !== n8.showBackdrop && !((n8.backdropBreakpoint ?? 0) > 0))(n7);
var k = (n7) => ({ create: (e4) => I(n7, e4), dismiss: (e4, o12, t7) => N(document, e4, o12, n7, t7), getTop: async () => E(document, n7) });
var T = k("ion-alert");
var O = k("ion-action-sheet");
var j = k("ion-loading");
var B = k("ion-modal");
var D = k("ion-popover");
var C = k("ion-toast");
var A2 = (n7) => {
  "undefined" != typeof document && F(document);
  const e4 = w2++;
  n7.overlayIndex = e4;
};
var P2 = (n7) => (n7.hasAttribute("id") || (n7.id = "ion-overlay-" + ++y3), n7.id);
var I = (n7, e4) => "undefined" != typeof window && void 0 !== window.customElements ? window.customElements.whenDefined(n7).then((() => {
  const t7 = document.createElement(n7);
  return t7.classList.add("overlay-hidden"), Object.assign(t7, __spreadProps(__spreadValues({}, e4), { hasController: true })), q(document).appendChild(t7), new Promise(((n8) => n2(t7, n8)));
})) : Promise.resolve();
var S = (n7, o12) => {
  let t7 = n7;
  const i5 = n7?.shadowRoot;
  i5 && (t7 = i5.querySelector(f4) || n7), t7 ? b(t7) : o12.focus();
};
var F = (n7) => {
  0 === w2 && (w2 = 1, n7.addEventListener("focus", ((e4) => {
    ((n8, e5) => {
      const o12 = E(e5, "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-popover"), i5 = n8.target;
      o12 && i5 && (o12.classList.contains(dn) || (o12.shadowRoot ? (() => {
        if (o12.contains(i5)) o12.lastFocus = i5;
        else if ("ION-TOAST" === i5.tagName) S(o12.lastFocus, o12);
        else {
          const n9 = o12.lastFocus;
          h5(o12), n9 === e5.activeElement && v3(o12), o12.lastFocus = e5.activeElement;
        }
      })() : (() => {
        if (o12 === i5) o12.lastFocus = void 0;
        else if ("ION-TOAST" === i5.tagName) S(o12.lastFocus, o12);
        else {
          const n9 = m(o12);
          if (!n9.contains(i5)) return;
          const a6 = n9.querySelector(".ion-overlay-wrapper");
          if (!a6) return;
          if (a6.contains(i5) || i5 === n9.querySelector("ion-backdrop")) o12.lastFocus = i5;
          else {
            const n10 = o12.lastFocus;
            h5(a6, o12), n10 === e5.activeElement && v3(a6, o12), o12.lastFocus = e5.activeElement;
          }
        }
      })()));
    })(e4, n7);
  }), true), n7.addEventListener("ionBackButton", ((e4) => {
    const o12 = E(n7);
    o12?.backdropDismiss && e4.detail.register(a2, (() => {
      o12.dismiss(void 0, en);
    }));
  })), o4() || n7.addEventListener("keydown", ((e4) => {
    if ("Escape" === e4.key) {
      const e5 = E(n7);
      e5?.backdropDismiss && e5.dismiss(void 0, en);
    }
  })));
};
var N = (n7, e4, o12, t7, i5) => {
  const a6 = E(n7, t7, i5);
  return a6 ? a6.dismiss(e4, o12) : Promise.reject("overlay does not exist");
};
var Z = (n7, e4) => ((n8, e5) => (void 0 === e5 && (e5 = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-popover,ion-toast"), Array.from(n8.querySelectorAll(e5)).filter(((n9) => n9.overlayIndex > 0))))(n7, e4).filter(((n8) => !n8.classList.contains("overlay-hidden")));
var E = (n7, e4, o12) => {
  const t7 = Z(n7, e4);
  return (void 0 === o12 ? t7 : t7.filter(((n8) => n8.id === o12))).slice(-1)[0];
};
var L = () => q(document).querySelector("ion-router-outlet, #ion-view-container-root");
var M3 = (n7 = false) => {
  const e4 = L();
  e4 && (n7 ? e4.setAttribute("aria-hidden", "true") : e4.removeAttribute("aria-hidden"));
};
var $ = () => {
  "undefined" != typeof document && (Z(document).some(((n7) => x(n7))) || (M3(false), document.body.classList.remove(i)));
};
var G = (n7) => {
  L()?.contains(n7) || M3(true), document.body.classList.add(i);
};
var J2 = (n7) => {
  if ("undefined" == typeof document) return;
  const e4 = n7;
  x(e4) && G(e4);
};
var V = async (n7, e4, o12, i5, a6) => {
  if (n7.presented) return;
  "ION-TOAST" !== n7.el.tagName && X(n7.el);
  const s6 = n7.el, d6 = x(s6);
  n7.presented = true, n7.willPresent.emit(), d6 && G(s6), n7.willPresentShorthand?.emit();
  const c9 = v2(n7), l7 = n7.enterAnimation ? n7.enterAnimation : n.get(e4, "ios" === c9 ? o12 : i5);
  if (await z(n7, l7, n7.el, a6) && (n7.didPresent.emit(), n7.didPresentShorthand?.emit()), n7.keyboardClose && (null === document.activeElement || !n7.el.contains(document.activeElement))) {
    const e5 = m(n7.el).querySelector('[role="dialog"][tabindex]') ?? n7.el;
    try {
      e5.focus({ preventScroll: true });
    } catch {
      e5.focus();
    }
  }
  n7.el.removeAttribute("aria-hidden"), n7.el.removeAttribute("inert");
};
var X = async (n7) => {
  let e4 = document.activeElement;
  if (!e4) return;
  e4.blur();
  const o12 = e4?.shadowRoot;
  o12 && (e4 = o12.querySelector(f4) || e4), await n7.onDidDismiss(), null !== document.activeElement && document.activeElement !== document.body || e4.focus();
};
var _ = async (e4, o12, t7, i5, a6, s6, d6) => {
  if (!e4.presented) return false;
  const l7 = (void 0 !== o2 ? Z(o2) : []).filter(((n7) => x(n7))), m5 = e4.el;
  x(m5) && 1 === l7.length && l7[0].id === m5.id && (M3(false), document.body.classList.remove(i)), e4.presented = false;
  try {
    e4.el.style.setProperty("pointer-events", "none"), e4.willDismiss.emit({ data: o12, role: t7 }), e4.willDismissShorthand?.emit({ data: o12, role: t7 });
    const n7 = v2(e4), c9 = e4.leaveAnimation ? e4.leaveAnimation : n.get(i5, "ios" === n7 ? a6 : s6);
    t7 !== on && await z(e4, c9, e4.el, d6), e4.didDismiss.emit({ data: o12, role: t7 }), e4.didDismissShorthand?.emit({ data: o12, role: t7 }), (g2.get(e4) || []).forEach(((n8) => n8.destroy())), g2.delete(e4), e4.el.classList.add("overlay-hidden"), e4.el.style.removeProperty("pointer-events"), void 0 !== e4.el.lastFocus && (e4.el.lastFocus = void 0);
  } catch (n7) {
    d(`[${e4.el.tagName.toLowerCase()}] - `, n7);
  }
  return e4.el.remove(), true;
};
var q = (n7) => n7.querySelector("ion-app") || n7.body;
var z = async (n7, e4, o12, t7) => {
  o12.classList.remove("overlay-hidden");
  const i5 = e4(n7.el, t7);
  n7.animated && n.getBoolean("animated", true) || i5.duration(0), n7.keyboardClose && i5.beforeAddWrite((() => {
    const n8 = o12.ownerDocument.activeElement;
    n8?.matches("input,ion-input, ion-textarea") && n8.blur();
  }));
  const a6 = g2.get(n7) || [];
  return g2.set(n7, [...a6, i5]), await i5.play(), true;
};
var H = (n7, e4) => {
  let o12;
  const t7 = new Promise(((n8) => o12 = n8));
  return K(n7, e4, ((n8) => {
    o12(n8.detail);
  })), t7;
};
var K = (n7, e4, o12) => {
  const t7 = (i5) => {
    c(n7, e4, t7), o12(i5);
  };
  d3(n7, e4, t7);
};
var R = (n7) => "cancel" === n7 || n7 === en;
var U2 = (n7) => n7();
var W2 = (n7, e4) => {
  if ("function" == typeof n7) return n.get("_zoneGate", U2)((() => {
    try {
      return n7(e4);
    } catch (n8) {
      throw n8;
    }
  }));
};
var Q = ["", "100%", "100vw", "100vh", "100dvw", "100dvh", "100svw", "100svh"];
var Y = ["auto", "fit-content", "min-content", "max-content"];
var nn = (n7) => {
  const e4 = n7.trim().toLowerCase();
  return Q.includes(e4) ? "fullscreen" : Y.some(((n8) => e4.endsWith(n8))) ? "content" : "definite";
};
var en = "backdrop";
var on = "gesture";
var tn = 39;
var an = (n7) => {
  let e4, o12 = false;
  const t7 = r6(), i5 = (i6 = false) => {
    if (e4 && !i6) return { delegate: e4, inline: o12 };
    const { el: a6, hasController: s6, delegate: d6 } = n7;
    return o12 = null !== a6.parentNode && !s6, e4 = o12 ? d6 || t7 : d6, { inline: o12, delegate: e4 };
  };
  return { attachViewToDom: async (e5) => {
    const { delegate: o13 } = i5(true);
    if (o13) return await o13.attachViewToDom(n7.el, e5);
    const { hasController: t8 } = n7;
    if (t8 && void 0 !== e5) throw new Error("framework delegate is missing");
    return null;
  }, removeViewFromDom: () => {
    const { delegate: e5 } = i5();
    e5 && void 0 !== n7.el && e5.removeViewFromDom(n7.el.parentElement, n7.el);
  } };
};
var sn = () => {
  let n7;
  const e4 = () => {
    n7 && (n7(), n7 = void 0);
  };
  return { addClickListener: (o12, t7) => {
    e4();
    const i5 = void 0 !== t7 ? document.getElementById(t7) : null;
    i5 ? n7 = ((n8, e5) => {
      const o13 = () => {
        e5.present();
      };
      return n8.addEventListener("click", o13), () => {
        n8.removeEventListener("click", o13);
      };
    })(i5, o12) : a(`[${o12.tagName.toLowerCase()}] - A trigger element with the ID "${t7}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, o12);
  }, removeClickListener: e4 };
};
var dn = "ion-disable-focus-trap";

// node_modules/@ionic/core/components/index.js
var e2 = (e4) => {
  const { swiper: o12, extendParams: s6 } = e4, t7 = { effect: void 0, direction: "horizontal", initialSlide: 0, loop: false, parallax: false, slidesPerView: 1, spaceBetween: 0, speed: 300, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, touchEventsTarget: "container", freeMode: false, freeModeMomentum: true, freeModeMomentumRatio: 1, freeModeMomentumBounce: true, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: false, freeModeMinimumVelocity: 0.02, autoHeight: false, setWrapperSize: false, zoom: { maxRatio: 3, minRatio: 1, toggle: false }, touchRatio: 1, touchAngle: 45, simulateTouch: true, touchStartPreventDefault: false, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, threshold: 0, touchMoveStopPropagation: true, touchReleaseOnEdges: false, iOSEdgeSwipeDetection: false, iOSEdgeSwipeThreshold: 20, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, watchSlidesVisibility: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, loopAdditionalSlides: 0, noSwiping: true, runCallbacksOnInit: true, coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }, flipEffect: { slideShadows: true, limitRotation: true }, cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 }, fadeEffect: { crossFade: false }, a11y: { prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide" } };
  o12.pagination && (t7.pagination = { type: "bullets", clickable: false, hideOnClick: false }), o12.scrollbar && (t7.scrollbar = { hide: true }), s6(t7);
};

// node_modules/@ionic/angular/dist/common/providers/platform.js
var Platform = class _Platform {
  doc;
  _readyPromise;
  win;
  /**
   * @hidden
   */
  backButton = new Subject();
  /**
   * The keyboardDidShow event emits when the
   * on-screen keyboard is presented.
   */
  keyboardDidShow = new Subject();
  /**
   * The keyboardDidHide event emits when the
   * on-screen keyboard is hidden.
   */
  keyboardDidHide = new Subject();
  /**
   * The pause event emits when the native platform puts the application
   * into the background, typically when the user switches to a different
   * application. This event would emit when a Cordova app is put into
   * the background, however, it would not fire on a standard web browser.
   */
  pause = new Subject();
  /**
   * The resume event emits when the native platform pulls the application
   * out from the background. This event would emit when a Cordova app comes
   * out from the background, however, it would not fire on a standard web browser.
   */
  resume = new Subject();
  /**
   * The resize event emits when the browser window has changed dimensions. This
   * could be from a browser window being physically resized, or from a device
   * changing orientation.
   */
  resize = new Subject();
  constructor(doc, zone) {
    this.doc = doc;
    zone.run(() => {
      this.win = doc.defaultView;
      this.backButton.subscribeWithPriority = function(priority, callback) {
        return this.subscribe((ev) => {
          return ev.register(priority, (processNextHandler) => zone.run(() => callback(processNextHandler)));
        });
      };
      proxyEvent(this.pause, doc, "pause", zone);
      proxyEvent(this.resume, doc, "resume", zone);
      proxyEvent(this.backButton, doc, "ionBackButton", zone);
      proxyEvent(this.resize, this.win, "resize", zone);
      proxyEvent(this.keyboardDidShow, this.win, "ionKeyboardDidShow", zone);
      proxyEvent(this.keyboardDidHide, this.win, "ionKeyboardDidHide", zone);
      let readyResolve;
      this._readyPromise = new Promise((res) => {
        readyResolve = res;
      });
      if (this.win?.["cordova"]) {
        doc.addEventListener("deviceready", () => {
          readyResolve("cordova");
        }, {
          once: true
        });
      } else {
        readyResolve("dom");
      }
    });
  }
  /**
   * @returns returns true/false based on platform.
   * @description
   * Depending on the platform the user is on, `is(platformName)` will
   * return `true` or `false`. Note that the same app can return `true`
   * for more than one platform name. For example, an app running from
   * an iPad would return `true` for the platform names: `mobile`,
   * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
   * from Cordova then `cordova` would be true, and if it was running
   * from a web browser on the iPad then `mobileweb` would be `true`.
   *
   * ```
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyPage {
   *   constructor(public platform: Platform) {
   *     if (this.platform.is('ios')) {
   *       // This will only print when on iOS
   *       console.log('I am an iOS device!');
   *     }
   *   }
   * }
   * ```
   *
   * | Platform Name   | Description                        |
   * |-----------------|------------------------------------|
   * | android         | on a device running Android.       |
   * | capacitor       | on a device running Capacitor.     |
   * | cordova         | on a device running Cordova.       |
   * | ios             | on a device running iOS.           |
   * | ipad            | on an iPad device.                 |
   * | iphone          | on an iPhone device.               |
   * | phablet         | on a phablet device.               |
   * | tablet          | on a tablet device.                |
   * | electron        | in Electron on a desktop device.   |
   * | pwa             | as a PWA app.                      |
   * | mobile          | on a mobile device.                |
   * | mobileweb       | on a mobile device in a browser.   |
   * | desktop         | on a desktop device.               |
   * | hybrid          | is a cordova or capacitor app.     |
   *
   */
  is(platformName) {
    return d4(this.win, platformName);
  }
  /**
   * @returns the array of platforms
   * @description
   * Depending on what device you are on, `platforms` can return multiple values.
   * Each possible value is a hierarchy of platforms. For example, on an iPhone,
   * it would return `mobile`, `ios`, and `iphone`.
   *
   * ```
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyPage {
   *   constructor(public platform: Platform) {
   *     // This will print an array of the current platforms
   *     console.log(this.platform.platforms());
   *   }
   * }
   * ```
   */
  platforms() {
    return a4(this.win);
  }
  /**
   * Returns a promise when the platform is ready and native functionality
   * can be called. If the app is running from within a web browser, then
   * the promise will resolve when the DOM is ready. When the app is running
   * from an application engine such as Cordova, then the promise will
   * resolve when Cordova triggers the `deviceready` event.
   *
   * The resolved value is the `readySource`, which states which platform
   * ready was used. For example, when Cordova is ready, the resolved ready
   * source is `cordova`. The default ready source value will be `dom`. The
   * `readySource` is useful if different logic should run depending on the
   * platform the app is running from. For example, only Cordova can execute
   * the status bar plugin, so the web should not run status bar plugin logic.
   *
   * ```
   * import { Component } from '@angular/core';
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyApp {
   *   constructor(public platform: Platform) {
   *     this.platform.ready().then((readySource) => {
   *       console.log('Platform ready from', readySource);
   *       // Platform now ready, execute any required native code
   *     });
   *   }
   * }
   * ```
   */
  ready() {
    return this._readyPromise;
  }
  /**
   * Returns if this app is using right-to-left language direction or not.
   * We recommend the app's `index.html` file already has the correct `dir`
   * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
   * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
   */
  get isRTL() {
    return this.doc.dir === "rtl";
  }
  /**
   * Get the query string parameter
   */
  getQueryParam(key) {
    return readQueryParam(this.win.location.href, key);
  }
  /**
   * Returns `true` if the app is in landscape mode.
   */
  isLandscape() {
    return !this.isPortrait();
  }
  /**
   * Returns `true` if the app is in portrait mode.
   */
  isPortrait() {
    return this.win.matchMedia?.("(orientation: portrait)").matches;
  }
  testUserAgent(expression) {
    const nav = this.win.navigator;
    return !!(nav?.userAgent && nav.userAgent.indexOf(expression) >= 0);
  }
  /**
   * Get the current url.
   */
  url() {
    return this.win.location.href;
  }
  /**
   * Gets the width of the platform's viewport using `window.innerWidth`.
   */
  width() {
    return this.win.innerWidth;
  }
  /**
   * Gets the height of the platform's viewport using `window.innerHeight`.
   */
  height() {
    return this.win.innerHeight;
  }
  /** @nocollapse */
  static ɵfac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)(ɵɵinject(DOCUMENT), ɵɵinject(NgZone));
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _Platform,
    factory: _Platform.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }], null);
})();
var readQueryParam = (url, key) => {
  key = key.replace(/[[\]\\]/g, "\\$&");
  const regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
  const results = regex.exec(url);
  return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : null;
};
var proxyEvent = (emitter, el, eventName, zone) => {
  if (el) {
    el.addEventListener(eventName, (ev) => {
      zone.run(() => {
        const value = ev != null ? ev.detail : void 0;
        emitter.next(value);
      });
    });
  }
};

// node_modules/@ionic/angular/dist/common/providers/nav-controller.js
var NavController = class _NavController {
  location;
  serializer;
  router;
  topOutlet;
  direction = DEFAULT_DIRECTION;
  animated = DEFAULT_ANIMATED;
  animationBuilder;
  guessDirection = "forward";
  guessAnimation;
  lastNavId = -1;
  constructor(platform, location, serializer, router) {
    this.location = location;
    this.serializer = serializer;
    this.router = router;
    if (router) {
      router.events.subscribe((ev) => {
        if (ev instanceof NavigationStart) {
          const id = ev.restoredState ? ev.restoredState.navigationId : ev.id;
          this.guessDirection = this.guessAnimation = id < this.lastNavId ? "back" : "forward";
          this.lastNavId = this.guessDirection === "forward" ? ev.id : id;
        }
        if (ev instanceof NavigationCancel || ev instanceof NavigationError) {
          this.direction = DEFAULT_DIRECTION;
          this.animated = DEFAULT_ANIMATED;
          this.animationBuilder = void 0;
        }
      });
    }
    platform.backButton.subscribeWithPriority(0, (processNextHandler) => {
      this.pop();
      processNextHandler();
    });
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling `this.router.navigateByUrl()`, but it's explicit about the **direction** of the transition.
   *
   * Going **forward** means that a new page is going to be pushed to the stack of the outlet (ion-router-outlet),
   * and that it will show a "forward" animation by default.
   *
   * Navigating forward can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="forward">Link</a>
   * ```
   */
  navigateForward(url, options = {}) {
    this.setDirection("forward", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('back');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **back** means that all the pages in the stack until the navigated page is found will be popped,
   * and that it will show a "back" animation by default.
   *
   * Navigating back can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="back">Link</a>
   * ```
   */
  navigateBack(url, options = {}) {
    this.setDirection("back", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('root');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **root** means that all existing pages in the stack will be removed,
   * and the navigated page will become the single page in the stack.
   *
   * Navigating root can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="root">Link</a>
   * ```
   */
  navigateRoot(url, options = {}) {
    this.setDirection("root", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * Same as [Location](https://angular.io/api/common/Location)'s back() method.
   * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation
   * by default.
   */
  back(options = {
    animated: true,
    animationDirection: "back"
  }) {
    this.setDirection("back", options.animated, options.animationDirection, options.animation);
    return this.location.back();
  }
  /**
   * This methods goes back in the context of Ionic's stack navigation.
   *
   * It recursively finds the top active `ion-router-outlet` and calls `pop()`.
   * This is the recommended way to go back when you are using `ion-router-outlet`.
   *
   * Resolves to `true` if it was able to pop.
   */
  async pop() {
    let outlet = this.topOutlet;
    while (outlet) {
      if (await outlet.pop()) {
        return true;
      } else {
        outlet = outlet.parentOutlet;
      }
    }
    return false;
  }
  /**
   * This methods specifies the direction of the next navigation performed by the Angular router.
   *
   * `setDirection()` does not trigger any transition, it just sets some flags to be consumed by `ion-router-outlet`.
   *
   * It's recommended to use `navigateForward()`, `navigateBack()` and `navigateRoot()` instead of `setDirection()`.
   */
  setDirection(direction, animated, animationDirection, animationBuilder) {
    this.direction = direction;
    this.animated = getAnimation(direction, animated, animationDirection);
    this.animationBuilder = animationBuilder;
  }
  /**
   * @internal
   */
  setTopOutlet(outlet) {
    this.topOutlet = outlet;
  }
  /**
   * @internal
   */
  consumeTransition() {
    let direction = "root";
    let animation;
    const animationBuilder = this.animationBuilder;
    if (this.direction === "auto") {
      direction = this.guessDirection;
      animation = this.guessAnimation;
    } else {
      animation = this.animated;
      direction = this.direction;
    }
    this.direction = DEFAULT_DIRECTION;
    this.animated = DEFAULT_ANIMATED;
    this.animationBuilder = void 0;
    return {
      direction,
      animation,
      animationBuilder
    };
  }
  navigate(url, options) {
    if (Array.isArray(url)) {
      return this.router.navigate(url, options);
    } else {
      const urlTree = this.serializer.parse(url.toString());
      if (options.queryParams !== void 0) {
        urlTree.queryParams = __spreadValues({}, options.queryParams);
      }
      if (options.fragment !== void 0) {
        urlTree.fragment = options.fragment;
      }
      return this.router.navigateByUrl(urlTree, options);
    }
  }
  /** @nocollapse */
  static ɵfac = function NavController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavController)(ɵɵinject(Platform), ɵɵinject(Location), ɵɵinject(UrlSerializer), ɵɵinject(Router, 8));
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _NavController,
    factory: _NavController.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: Location
  }, {
    type: UrlSerializer
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var getAnimation = (direction, animated, animationDirection) => {
  if (animated === false) {
    return void 0;
  }
  if (animationDirection !== void 0) {
    return animationDirection;
  }
  if (direction === "forward" || direction === "back") {
    return direction;
  } else if (direction === "root" && animated === true) {
    return "forward";
  }
  return void 0;
};
var DEFAULT_DIRECTION = "auto";
var DEFAULT_ANIMATED = void 0;

// node_modules/@ionic/angular/dist/common/providers/config.js
var Config = class _Config {
  get(key, fallback) {
    const c9 = getConfig();
    if (c9) {
      return c9.get(key, fallback);
    }
    return null;
  }
  getBoolean(key, fallback) {
    const c9 = getConfig();
    if (c9) {
      return c9.getBoolean(key, fallback);
    }
    return false;
  }
  getNumber(key, fallback) {
    const c9 = getConfig();
    if (c9) {
      return c9.getNumber(key, fallback);
    }
    return 0;
  }
  /** @nocollapse */
  static ɵfac = function Config_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Config)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _Config,
    factory: _Config.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Config, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfigToken = new InjectionToken("USERCONFIG");
var getConfig = () => {
  if (typeof window !== "undefined") {
    const Ionic = window.Ionic;
    if (Ionic?.config) {
      return Ionic.config;
    }
  }
  return null;
};

// node_modules/@ionic/angular/dist/common/directives/navigation/nav-params.js
var NavParams = class {
  data;
  constructor(data = {}) {
    this.data = data;
    console.warn(`[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.`);
  }
  /**
   * Get the value of a nav-parameter for the current view
   *
   * ```ts
   * import { NavParams } from 'ionic-angular';
   *
   * export class MyClass{
   *  constructor(public navParams: NavParams){
   *    // userParams is an object we have in our nav-parameters
   *    this.navParams.get('userParams');
   *  }
   * }
   * ```
   *
   * @param param Which param you want to look up
   */
  get(param) {
    return this.data[param];
  }
};

// node_modules/@ionic/angular/dist/common/providers/angular-delegate.js
var IonModalToken = new InjectionToken("IonModalToken");
var AngularDelegate = class _AngularDelegate {
  zone = inject(NgZone);
  applicationRef = inject(ApplicationRef);
  config = inject(ConfigToken);
  create(environmentInjector, injector, elementReferenceKey, customInjector) {
    return new AngularFrameworkDelegate(environmentInjector, injector, this.applicationRef, this.zone, elementReferenceKey, this.config.useSetInputAPI ?? false, customInjector);
  }
  /** @nocollapse */
  static ɵfac = function AngularDelegate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularDelegate)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _AngularDelegate,
    factory: _AngularDelegate.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularDelegate, [{
    type: Injectable
  }], null, null);
})();
var AngularFrameworkDelegate = class {
  environmentInjector;
  injector;
  applicationRef;
  zone;
  elementReferenceKey;
  enableSignalsSupport;
  customInjector;
  elRefMap = /* @__PURE__ */ new WeakMap();
  elEventsMap = /* @__PURE__ */ new WeakMap();
  constructor(environmentInjector, injector, applicationRef, zone, elementReferenceKey, enableSignalsSupport, customInjector) {
    this.environmentInjector = environmentInjector;
    this.injector = injector;
    this.applicationRef = applicationRef;
    this.zone = zone;
    this.elementReferenceKey = elementReferenceKey;
    this.enableSignalsSupport = enableSignalsSupport;
    this.customInjector = customInjector;
  }
  attachViewToDom(container, component, params, cssClasses) {
    return this.zone.run(() => {
      return new Promise((resolve) => {
        const componentProps = __spreadValues({}, params);
        if (this.elementReferenceKey !== void 0) {
          componentProps[this.elementReferenceKey] = container;
        }
        const el = attachView(this.zone, this.environmentInjector, this.injector, this.applicationRef, this.elRefMap, this.elEventsMap, container, component, componentProps, cssClasses, this.elementReferenceKey, this.enableSignalsSupport, this.customInjector);
        resolve(el);
      });
    });
  }
  removeViewFromDom(_container, component) {
    return this.zone.run(() => {
      return new Promise((resolve) => {
        const componentRef = this.elRefMap.get(component);
        if (componentRef) {
          componentRef.destroy();
          this.elRefMap.delete(component);
          const unbindEvents = this.elEventsMap.get(component);
          if (unbindEvents) {
            unbindEvents();
            this.elEventsMap.delete(component);
          }
        }
        resolve();
      });
    });
  }
};
var attachView = (zone, environmentInjector, injector, applicationRef, elRefMap, elEventsMap, container, component, params, cssClasses, elementReferenceKey, enableSignalsSupport, customInjector) => {
  const providers = getProviders(params);
  if (container.tagName.toLowerCase() === "ion-modal") {
    providers.push({
      provide: IonModalToken,
      useValue: container
    });
  }
  const childInjector = Injector.create({
    providers,
    parent: customInjector ?? injector
  });
  const componentRef = createComponent(component, {
    environmentInjector,
    elementInjector: childInjector
  });
  const instance = componentRef.instance;
  const hostElement = componentRef.location.nativeElement;
  if (params) {
    if (elementReferenceKey && instance[elementReferenceKey] !== void 0) {
      console.error(`[Ionic Error]: ${elementReferenceKey} is a reserved property when using ${container.tagName.toLowerCase()}. Rename or remove the "${elementReferenceKey}" property from ${component.name}.`);
    }
    if (enableSignalsSupport === true && componentRef.setInput !== void 0) {
      const _a = params, {
        modal,
        popover
      } = _a, otherParams = __objRest(_a, [
        "modal",
        "popover"
      ]);
      for (const key in otherParams) {
        componentRef.setInput(key, otherParams[key]);
      }
      if (modal !== void 0) {
        Object.assign(instance, {
          modal
        });
      }
      if (popover !== void 0) {
        Object.assign(instance, {
          popover
        });
      }
    } else {
      Object.assign(instance, params);
    }
  }
  if (cssClasses) {
    for (const cssClass of cssClasses) {
      hostElement.classList.add(cssClass);
    }
  }
  const unbindEvents = bindLifecycleEvents(zone, componentRef.changeDetectorRef, instance, hostElement);
  container.appendChild(hostElement);
  applicationRef.attachView(componentRef.hostView);
  componentRef.changeDetectorRef.detectChanges();
  elRefMap.set(hostElement, componentRef);
  elEventsMap.set(hostElement, unbindEvents);
  return hostElement;
};
var LIFECYCLES = [r2, t, s3, c2, l];
var bindLifecycleEvents = (zone, changeDetectorRef, instance, element) => {
  return zone.run(() => {
    const unregisters = LIFECYCLES.filter((eventName) => typeof instance[eventName] === "function").map((eventName) => {
      const handler = (ev) => {
        instance[eventName](ev.detail);
        changeDetectorRef.markForCheck();
      };
      element.addEventListener(eventName, handler);
      return () => element.removeEventListener(eventName, handler);
    });
    return () => unregisters.forEach((fn) => fn());
  });
};
var NavParamsToken = new InjectionToken("NavParamsToken");
var getProviders = (params) => {
  return [{
    provide: NavParamsToken,
    useValue: params
  }, {
    provide: NavParams,
    useFactory: provideNavParamsInjectable,
    deps: [NavParamsToken]
  }];
};
var provideNavParamsInjectable = (params) => {
  return new NavParams(params);
};

// node_modules/@ionic/angular/dist/common/utils/proxy.js
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      }
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = fromEvent(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const { defineCustomElementFn, inputs, methods } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}

// node_modules/@ionic/angular/dist/common/overlays/modal.js
var MODAL_INPUTS = ["animated", "keepContentsMounted", "backdropBreakpoint", "backdropDismiss", "breakpoints", "canDismiss", "cssClass", "enterAnimation", "expandToScroll", "event", "focusTrap", "handle", "handleBehavior", "initialBreakpoint", "isOpen", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "translucent", "trigger"];
var MODAL_METHODS = ["present", "dismiss", "onDidDismiss", "onWillDismiss", "setCurrentBreakpoint", "getCurrentBreakpoint"];
var IonModal = class IonModal2 {
  z;
  // TODO(FW-2827): type
  template;
  isCmpOpen = false;
  el;
  constructor(c9, r9, z3) {
    this.z = z3;
    this.el = r9.nativeElement;
    this.el.addEventListener("ionMount", () => {
      this.isCmpOpen = true;
      c9.detectChanges();
    });
    this.el.addEventListener("didDismiss", () => {
      this.isCmpOpen = false;
      c9.detectChanges();
    });
    proxyOutputs(this, this.el, ["ionModalDidPresent", "ionModalWillPresent", "ionModalWillDismiss", "ionModalDidDismiss", "ionBreakpointDidChange", "didPresent", "willPresent", "willDismiss", "didDismiss", "ionDragStart", "ionDragMove", "ionDragEnd"]);
  }
  /** @nocollapse */
  static ɵfac = function IonModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonModal2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonModal2,
    selectors: [["ion-modal"]],
    contentQueries: function IonModal_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      }
    },
    inputs: {
      animated: "animated",
      keepContentsMounted: "keepContentsMounted",
      backdropBreakpoint: "backdropBreakpoint",
      backdropDismiss: "backdropDismiss",
      breakpoints: "breakpoints",
      canDismiss: "canDismiss",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      expandToScroll: "expandToScroll",
      event: "event",
      focusTrap: "focusTrap",
      handle: "handle",
      handleBehavior: "handleBehavior",
      initialBreakpoint: "initialBreakpoint",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      presentingElement: "presentingElement",
      showBackdrop: "showBackdrop",
      translucent: "translucent",
      trigger: "trigger"
    }
  });
};
IonModal = __decorate([
  ProxyCmp({
    inputs: MODAL_INPUTS,
    methods: MODAL_METHODS
  })
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
], IonModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal, [{
    type: Directive,
    args: [{
      selector: "ion-modal",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: MODAL_INPUTS
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    template: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/overlays/popover.js
var POPOVER_INPUTS = ["alignment", "animated", "arrow", "keepContentsMounted", "backdropDismiss", "cssClass", "dismissOnSelect", "enterAnimation", "event", "focusTrap", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "translucent", "trigger", "triggerAction", "reference", "size", "side"];
var POPOVER_METHODS = ["present", "dismiss", "onDidDismiss", "onWillDismiss"];
var IonPopover = class IonPopover2 {
  z;
  // TODO(FW-2827): type
  template;
  isCmpOpen = false;
  el;
  constructor(c9, r9, z3) {
    this.z = z3;
    this.el = r9.nativeElement;
    this.el.addEventListener("ionMount", () => {
      this.isCmpOpen = true;
      c9.detectChanges();
    });
    this.el.addEventListener("didDismiss", () => {
      this.isCmpOpen = false;
      c9.detectChanges();
    });
    proxyOutputs(this, this.el, ["ionPopoverDidPresent", "ionPopoverWillPresent", "ionPopoverWillDismiss", "ionPopoverDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static ɵfac = function IonPopover_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPopover2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonPopover2,
    selectors: [["ion-popover"]],
    contentQueries: function IonPopover_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      }
    },
    inputs: {
      alignment: "alignment",
      animated: "animated",
      arrow: "arrow",
      keepContentsMounted: "keepContentsMounted",
      backdropDismiss: "backdropDismiss",
      cssClass: "cssClass",
      dismissOnSelect: "dismissOnSelect",
      enterAnimation: "enterAnimation",
      event: "event",
      focusTrap: "focusTrap",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      showBackdrop: "showBackdrop",
      translucent: "translucent",
      trigger: "trigger",
      triggerAction: "triggerAction",
      reference: "reference",
      size: "size",
      side: "side"
    }
  });
};
IonPopover = __decorate([
  ProxyCmp({
    inputs: POPOVER_INPUTS,
    methods: POPOVER_METHODS
  })
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
], IonPopover);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover, [{
    type: Directive,
    args: [{
      selector: "ion-popover",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: POPOVER_INPUTS
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    template: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/stack-utils.js
var insertView = (views, view, direction) => {
  if (direction === "root") {
    return setRoot(views, view);
  } else if (direction === "forward") {
    return setForward(views, view);
  } else {
    return setBack(views, view);
  }
};
var setRoot = (views, view) => {
  views = views.filter((v4) => v4.stackId !== view.stackId);
  views.push(view);
  return views;
};
var setForward = (views, view) => {
  const index = views.indexOf(view);
  if (index >= 0) {
    views = views.filter((v4) => v4.stackId !== view.stackId || v4.id <= view.id);
  } else {
    views.push(view);
  }
  return views;
};
var setBack = (views, view) => {
  const index = views.indexOf(view);
  if (index >= 0) {
    return views.filter((v4) => v4.stackId !== view.stackId || v4.id <= view.id);
  } else {
    return setRoot(views, view);
  }
};
var getUrl = (router, activatedRoute) => {
  const urlTree = router.createUrlTree(["."], { relativeTo: activatedRoute });
  return router.serializeUrl(urlTree);
};
var isTabSwitch = (enteringView, leavingView) => {
  if (!leavingView) {
    return true;
  }
  return enteringView.stackId !== leavingView.stackId;
};
var computeStackId = (prefixUrl, url) => {
  if (!prefixUrl) {
    return void 0;
  }
  const segments = toSegments(url);
  for (let i5 = 0; i5 < segments.length; i5++) {
    if (i5 >= prefixUrl.length) {
      return segments[i5];
    }
    if (segments[i5] !== prefixUrl[i5]) {
      return void 0;
    }
  }
  return void 0;
};
var toSegments = (path) => {
  return path.split("/").map((s6) => s6.trim()).filter((s6) => s6 !== "");
};
var destroyView = (view) => {
  if (view) {
    view.ref.destroy();
    view.unlistenEvents();
  }
};

// node_modules/@ionic/angular/dist/common/directives/navigation/stack-controller.js
var StackController = class {
  containerEl;
  router;
  navCtrl;
  zone;
  location;
  views = [];
  runningTask;
  skipTransition = false;
  tabsPrefix;
  activeView;
  nextId = 0;
  constructor(tabsPrefix, containerEl, router, navCtrl, zone, location) {
    this.containerEl = containerEl;
    this.router = router;
    this.navCtrl = navCtrl;
    this.zone = zone;
    this.location = location;
    this.tabsPrefix = tabsPrefix !== void 0 ? toSegments(tabsPrefix) : void 0;
  }
  createView(ref, activatedRoute) {
    const url = getUrl(this.router, activatedRoute);
    const element = ref?.location?.nativeElement;
    const unlistenEvents = bindLifecycleEvents(this.zone, ref.changeDetectorRef, ref.instance, element);
    return {
      id: this.nextId++,
      stackId: computeStackId(this.tabsPrefix, url),
      unlistenEvents,
      element,
      ref,
      url
    };
  }
  getExistingView(activatedRoute) {
    const activatedUrlKey = getUrl(this.router, activatedRoute);
    const view = this.views.find((vw) => vw.url === activatedUrlKey);
    if (view) {
      view.ref.changeDetectorRef.reattach();
    }
    return view;
  }
  setActive(enteringView) {
    const consumeResult = this.navCtrl.consumeTransition();
    let { direction, animation, animationBuilder } = consumeResult;
    const leavingView = this.activeView;
    const tabSwitch = isTabSwitch(enteringView, leavingView);
    if (tabSwitch) {
      direction = "back";
      animation = void 0;
    }
    const viewsSnapshot = this.views.slice();
    let currentNavigation;
    const router = this.router;
    if (router.getCurrentNavigation) {
      currentNavigation = router.getCurrentNavigation();
    } else if (router.navigations?.value) {
      currentNavigation = router.navigations.value;
    }
    if (currentNavigation?.extras?.replaceUrl) {
      if (this.views.length > 0) {
        this.views.splice(-1, 1);
      }
    }
    const reused = this.views.includes(enteringView);
    const views = this.insertView(enteringView, direction);
    if (!reused) {
      enteringView.ref.changeDetectorRef.detectChanges();
    }
    const customAnimation = enteringView.animationBuilder;
    if (animationBuilder === void 0 && direction === "back" && !tabSwitch && customAnimation !== void 0) {
      animationBuilder = customAnimation;
    }
    if (leavingView) {
      leavingView.animationBuilder = animationBuilder;
    }
    return this.zone.runOutsideAngular(() => {
      return this.wait(() => {
        if (leavingView) {
          leavingView.ref.changeDetectorRef.detach();
        }
        enteringView.ref.changeDetectorRef.reattach();
        return this.transition(enteringView, leavingView, animation, this.canGoBack(1), false, animationBuilder).then(() => cleanupAsync(enteringView, views, viewsSnapshot, this.location, this.zone)).then(() => ({
          enteringView,
          direction,
          animation,
          tabSwitch
        }));
      });
    });
  }
  canGoBack(deep, stackId = this.getActiveStackId()) {
    return this.getStack(stackId).length > deep;
  }
  pop(deep, stackId = this.getActiveStackId()) {
    return this.zone.run(() => {
      const views = this.getStack(stackId);
      if (views.length <= deep) {
        return Promise.resolve(false);
      }
      const view = views[views.length - deep - 1];
      let url = view.url;
      const viewSavedData = view.savedData;
      if (viewSavedData) {
        const primaryOutlet = viewSavedData.get("primary");
        if (primaryOutlet?.route?._routerState?.snapshot.url) {
          url = primaryOutlet.route._routerState.snapshot.url;
        }
      }
      const { animationBuilder } = this.navCtrl.consumeTransition();
      return this.navCtrl.navigateBack(url, __spreadProps(__spreadValues({}, view.savedExtras), { animation: animationBuilder })).then(() => true);
    });
  }
  startBackTransition() {
    const leavingView = this.activeView;
    if (leavingView) {
      const views = this.getStack(leavingView.stackId);
      const enteringView = views[views.length - 2];
      const customAnimation = enteringView.animationBuilder;
      return this.wait(() => {
        return this.transition(
          enteringView,
          // entering view
          leavingView,
          // leaving view
          "back",
          this.canGoBack(2),
          true,
          customAnimation
        );
      });
    }
    return Promise.resolve();
  }
  endBackTransition(shouldComplete) {
    if (shouldComplete) {
      this.skipTransition = true;
      this.pop(1);
    } else if (this.activeView) {
      cleanup(this.activeView, this.views, this.views, this.location, this.zone);
    }
  }
  getLastUrl(stackId) {
    const views = this.getStack(stackId);
    return views.length > 0 ? views[views.length - 1] : void 0;
  }
  /**
   * @internal
   */
  getRootUrl(stackId) {
    const views = this.getStack(stackId);
    return views.length > 0 ? views[0] : void 0;
  }
  getActiveStackId() {
    return this.activeView ? this.activeView.stackId : void 0;
  }
  /**
   * @internal
   */
  getActiveView() {
    return this.activeView;
  }
  hasRunningTask() {
    return this.runningTask !== void 0;
  }
  destroy() {
    this.containerEl = void 0;
    this.views.forEach(destroyView);
    this.activeView = void 0;
    this.views = [];
  }
  getStack(stackId) {
    return this.views.filter((v4) => v4.stackId === stackId);
  }
  insertView(enteringView, direction) {
    this.activeView = enteringView;
    this.views = insertView(this.views, enteringView, direction);
    return this.views.slice();
  }
  transition(enteringView, leavingView, direction, showGoBack, progressAnimation, animationBuilder) {
    if (this.skipTransition) {
      this.skipTransition = false;
      return Promise.resolve(false);
    }
    if (leavingView === enteringView) {
      return Promise.resolve(false);
    }
    const enteringEl = enteringView ? enteringView.element : void 0;
    const leavingEl = leavingView ? leavingView.element : void 0;
    const containerEl = this.containerEl;
    if (enteringEl && enteringEl !== leavingEl) {
      enteringEl.classList.add("ion-page");
      enteringEl.classList.add("ion-page-invisible");
      if (containerEl?.commit) {
        return containerEl.commit(enteringEl, leavingEl, {
          duration: direction === void 0 ? 0 : void 0,
          direction,
          showGoBack,
          progressAnimation,
          animationBuilder
        });
      }
    }
    return Promise.resolve(false);
  }
  async wait(task) {
    if (this.runningTask !== void 0) {
      await this.runningTask;
      this.runningTask = void 0;
    }
    const promise = this.runningTask = task();
    promise.finally(() => this.runningTask = void 0);
    return promise;
  }
};
var cleanupAsync = (activeRoute, views, viewsSnapshot, location, zone) => {
  if (typeof requestAnimationFrame === "function") {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        cleanup(activeRoute, views, viewsSnapshot, location, zone);
        resolve();
      });
    });
  }
  return Promise.resolve();
};
var cleanup = (activeRoute, views, viewsSnapshot, location, zone) => {
  zone.run(() => viewsSnapshot.filter((view) => !views.includes(view)).forEach(destroyView));
  views.forEach((view) => {
    const locationWithoutParams = location.path().split("?")[0];
    const locationWithoutFragment = locationWithoutParams.split("#")[0];
    if (view !== activeRoute && view.url !== locationWithoutFragment) {
      const element = view.element;
      element.setAttribute("aria-hidden", "true");
      element.classList.add("ion-page-hidden");
      view.ref.changeDetectorRef.detach();
    }
  });
};

// node_modules/@ionic/angular/dist/common/directives/navigation/router-outlet.js
var IonRouterOutlet = class _IonRouterOutlet {
  parentOutlet;
  nativeEl;
  activatedView = null;
  tabsPrefix;
  _swipeGesture;
  stackCtrl;
  // Maintain map of activated route proxies for each component instance
  proxyMap = /* @__PURE__ */ new WeakMap();
  // Keep the latest activated route in a subject for the proxy routes to switch map to
  currentActivatedRoute$ = new BehaviorSubject(null);
  activated = null;
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  _activatedRoute = null;
  /**
   * The name of the outlet
   */
  name = PRIMARY_OUTLET;
  /** @internal */
  stackWillChange = new EventEmitter();
  /** @internal */
  stackDidChange = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  activateEvents = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  deactivateEvents = new EventEmitter();
  parentContexts = inject(ChildrenOutletContexts);
  location = inject(ViewContainerRef);
  environmentInjector = inject(EnvironmentInjector);
  inputBinder = inject(INPUT_BINDER2, {
    optional: true
  });
  /** @nodoc */
  supportsBindingToComponentInputs = true;
  // Ionic providers
  config = inject(Config);
  navCtrl = inject(NavController);
  set animation(animation) {
    this.nativeEl.animation = animation;
  }
  set animated(animated) {
    this.nativeEl.animated = animated;
  }
  set swipeGesture(swipe) {
    this._swipeGesture = swipe;
    this.nativeEl.swipeHandler = swipe ? {
      canStart: () => this.stackCtrl.canGoBack(1) && !this.stackCtrl.hasRunningTask(),
      onStart: () => this.stackCtrl.startBackTransition(),
      onEnd: (shouldContinue) => this.stackCtrl.endBackTransition(shouldContinue)
    } : void 0;
    this.nativeEl.swipeGesture = swipe;
  }
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    this.parentOutlet = parentOutlet;
    this.nativeEl = elementRef.nativeElement;
    this.name = name || PRIMARY_OUTLET;
    this.tabsPrefix = tabs === "true" ? getUrl(router, activatedRoute) : void 0;
    this.stackCtrl = new StackController(this.tabsPrefix, this.nativeEl, router, this.navCtrl, zone, commonLocation);
    this.parentContexts.onChildOutletCreated(this.name, this);
  }
  ngOnDestroy() {
    this.stackCtrl.destroy();
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  getContext() {
    return this.parentContexts.getContext(this.name);
  }
  ngOnInit() {
    this.initializeOutletWithName();
  }
  // Note: Ionic deviates from the Angular Router implementation here
  initializeOutletWithName() {
    if (!this.activated) {
      const context = this.getContext();
      if (context?.route) {
        this.activateWith(context.route, context.injector);
      }
    }
    new Promise((resolve) => n2(this.nativeEl, resolve)).then(() => {
      if (this._swipeGesture === void 0) {
        this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.nativeEl.mode === "ios");
      }
    });
  }
  get isActivated() {
    return !!this.activated;
  }
  get component() {
    if (!this.activated) {
      throw new Error("Outlet is not activated");
    }
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) {
      throw new Error("Outlet is not activated");
    }
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    throw new Error("incompatible reuse strategy");
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attach(_ref, _activatedRoute) {
    throw new Error("incompatible reuse strategy");
  }
  deactivate() {
    if (this.activated) {
      if (this.activatedView) {
        const context = this.getContext();
        this.activatedView.savedData = new Map(context.children["contexts"]);
        const primaryOutlet = this.activatedView.savedData.get("primary");
        if (primaryOutlet && context.route) {
          primaryOutlet.route = __spreadValues({}, context.route);
        }
        this.activatedView.savedExtras = {};
        if (context.route) {
          const contextSnapshot = context.route.snapshot;
          this.activatedView.savedExtras.queryParams = contextSnapshot.queryParams;
          this.activatedView.savedExtras.fragment = contextSnapshot.fragment;
        }
      }
      const c9 = this.component;
      this.activatedView = null;
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c9);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new Error("Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    let cmpRef;
    let enteringView = this.stackCtrl.getExistingView(activatedRoute);
    if (enteringView) {
      cmpRef = this.activated = enteringView.ref;
      const saved = enteringView.savedData;
      if (saved) {
        const context = this.getContext();
        context.children["contexts"] = saved;
      }
      this.updateActivatedRouteProxy(cmpRef.instance, activatedRoute);
    } else {
      const snapshot = activatedRoute._futureSnapshot;
      const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
      const component$ = new BehaviorSubject(null);
      const activatedRouteProxy = this.createActivatedRouteProxy(component$, activatedRoute);
      const injector = new OutletInjector2(activatedRouteProxy, childContexts, this.location.injector);
      const component = snapshot.routeConfig.component ?? snapshot.component;
      cmpRef = this.activated = this.outletContent.createComponent(component, {
        index: this.outletContent.length,
        injector,
        environmentInjector: environmentInjector ?? this.environmentInjector
      });
      component$.next(cmpRef.instance);
      enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
      this.proxyMap.set(cmpRef.instance, activatedRouteProxy);
      this.currentActivatedRoute$.next({
        component: cmpRef.instance,
        activatedRoute
      });
    }
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activatedView = enteringView;
    this.navCtrl.setTopOutlet(this);
    const leavingView = this.stackCtrl.getActiveView();
    this.stackWillChange.emit({
      enteringView,
      tabSwitch: isTabSwitch(enteringView, leavingView)
    });
    this.stackCtrl.setActive(enteringView).then((data) => {
      this.activateEvents.emit(cmpRef.instance);
      this.stackDidChange.emit(data);
    });
  }
  /**
   * Returns `true` if there are pages in the stack to go back.
   */
  canGoBack(deep = 1, stackId) {
    return this.stackCtrl.canGoBack(deep, stackId);
  }
  /**
   * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
   */
  pop(deep = 1, stackId) {
    return this.stackCtrl.pop(deep, stackId);
  }
  /**
   * Returns the URL of the active page of each stack.
   */
  getLastUrl(stackId) {
    const active = this.stackCtrl.getLastUrl(stackId);
    return active ? active.url : void 0;
  }
  /**
   * Returns the RouteView of the active page of each stack.
   * @internal
   */
  getLastRouteView(stackId) {
    return this.stackCtrl.getLastUrl(stackId);
  }
  /**
   * Returns the root view in the tab stack.
   * @internal
   */
  getRootView(stackId) {
    return this.stackCtrl.getRootUrl(stackId);
  }
  /**
   * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
   */
  getActiveStackId() {
    return this.stackCtrl.getActiveStackId();
  }
  /**
   * Since the activated route can change over the life time of a component in an ion router outlet, we create
   * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
   */
  createActivatedRouteProxy(component$, activatedRoute) {
    const proxy = new ActivatedRoute();
    proxy._futureSnapshot = activatedRoute._futureSnapshot;
    proxy._routerState = activatedRoute._routerState;
    proxy.snapshot = activatedRoute.snapshot;
    proxy.outlet = activatedRoute.outlet;
    proxy.component = activatedRoute.component;
    proxy._paramMap = this.proxyObservable(component$, "paramMap");
    proxy._queryParamMap = this.proxyObservable(component$, "queryParamMap");
    proxy.url = this.proxyObservable(component$, "url");
    proxy.params = this.proxyObservable(component$, "params");
    proxy.queryParams = this.proxyObservable(component$, "queryParams");
    proxy.fragment = this.proxyObservable(component$, "fragment");
    proxy.data = this.proxyObservable(component$, "data");
    return proxy;
  }
  /**
   * Create a wrapped observable that will switch to the latest activated route matched by the given component
   */
  proxyObservable(component$, path) {
    return component$.pipe(
      // First wait until the component instance is pushed
      filter((component) => !!component),
      switchMap((component) => this.currentActivatedRoute$.pipe(filter((current) => current !== null && current.component === component), switchMap((current) => current && current.activatedRoute[path]), distinctUntilChanged()))
    );
  }
  /**
   * Updates the activated route proxy for the given component to the new incoming router state
   */
  updateActivatedRouteProxy(component, activatedRoute) {
    const proxy = this.proxyMap.get(component);
    if (!proxy) {
      throw new Error(`Could not find activated route proxy for view`);
    }
    proxy._futureSnapshot = activatedRoute._futureSnapshot;
    proxy._routerState = activatedRoute._routerState;
    proxy.snapshot = activatedRoute.snapshot;
    proxy.outlet = activatedRoute.outlet;
    proxy.component = activatedRoute.component;
    this.currentActivatedRoute$.next({
      component,
      activatedRoute
    });
  }
  /** @nocollapse */
  static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonRouterOutlet)(ɵɵinjectAttribute("name"), ɵɵinjectAttribute("tabs"), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(_IonRouterOutlet, 12));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonRouterOutlet,
    selectors: [["ion-router-outlet"]],
    inputs: {
      animated: "animated",
      animation: "animation",
      mode: "mode",
      swipeGesture: "swipeGesture",
      name: "name"
    },
    outputs: {
      stackWillChange: "stackWillChange",
      stackDidChange: "stackDidChange",
      activateEvents: "activate",
      deactivateEvents: "deactivate"
    },
    exportAs: ["outlet"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet, [{
    type: Directive,
    args: [{
      selector: "ion-router-outlet",
      exportAs: "outlet",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "animation", "mode", "swipeGesture"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["name"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Attribute,
      args: ["tabs"]
    }]
  }, {
    type: Location
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: NgZone
  }, {
    type: ActivatedRoute
  }, {
    type: IonRouterOutlet,
    decorators: [{
      type: SkipSelf
    }, {
      type: Optional
    }]
  }], {
    name: [{
      type: Input
    }],
    stackWillChange: [{
      type: Output
    }],
    stackDidChange: [{
      type: Output
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }]
  });
})();
var OutletInjector2 = class {
  route;
  childContexts;
  parent;
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER2 = new InjectionToken("");
var RoutedComponentInputBinder2 = class _RoutedComponentInputBinder {
  outletDataSubscriptions = /* @__PURE__ */ new Map();
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  /** @nocollapse */
  static ɵfac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder2, [{
    type: Injectable
  }], null, null);
})();
var provideComponentInputBinding = () => {
  return {
    provide: INPUT_BINDER2,
    useFactory: componentInputBindingFactory,
    deps: [Router]
  };
};
function componentInputBindingFactory(router) {
  if (router?.componentInputBindingEnabled) {
    return new RoutedComponentInputBinder2();
  }
  return null;
}

// node_modules/@ionic/angular/dist/common/utils/util.js
var raf = (h6) => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(h6);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(h6);
  }
  return setTimeout(h6);
};

// node_modules/@ionic/angular/dist/common/directives/control-value-accessors/value-accessor.js
var ValueAccessor = class _ValueAccessor {
  injector;
  elementRef;
  onChange = () => {
  };
  onTouched = () => {
  };
  lastValue;
  statusChanges;
  constructor(injector, elementRef) {
    this.injector = injector;
    this.elementRef = elementRef;
  }
  writeValue(value) {
    this.elementRef.nativeElement.value = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  /**
   * Notifies the ControlValueAccessor of a change in the value of the control.
   *
   * This is called by each of the ValueAccessor directives when we want to update
   * the status and validity of the form control. For example with text components this
   * is called when the ionInput event is fired. For select components this is called
   * when the ionChange event is fired.
   *
   * This also updates the Ionic form status classes on the element.
   *
   * @param el The component element.
   * @param value The new value of the control.
   */
  handleValueChange(el, value) {
    if (el === this.elementRef.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
      setIonicClasses(this.elementRef);
    }
  }
  _handleBlurEvent(el) {
    if (el === this.elementRef.nativeElement) {
      this.onTouched();
      setIonicClasses(this.elementRef);
    } else if (el.closest("ion-radio-group") === this.elementRef.nativeElement) {
      this.onTouched();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.elementRef.nativeElement.disabled = isDisabled;
  }
  ngOnDestroy() {
    if (this.statusChanges) {
      this.statusChanges.unsubscribe();
    }
  }
  ngAfterViewInit() {
    let ngControl;
    try {
      ngControl = this.injector.get(NgControl);
    } catch {
    }
    if (!ngControl) {
      return;
    }
    if (ngControl.statusChanges) {
      this.statusChanges = ngControl.statusChanges.subscribe(() => setIonicClasses(this.elementRef));
    }
    const formControl = ngControl.control;
    if (formControl) {
      const methodsToPatch = ["markAsTouched", "markAllAsTouched", "markAsUntouched", "markAsDirty", "markAsPristine"];
      methodsToPatch.forEach((method) => {
        if (typeof formControl[method] !== "undefined") {
          const oldFn = formControl[method].bind(formControl);
          formControl[method] = (...params) => {
            oldFn(...params);
            setIonicClasses(this.elementRef);
          };
        }
      });
    }
  }
  /** @nocollapse */
  static ɵfac = function ValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValueAccessor)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _ValueAccessor,
    hostBindings: function ValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionBlur", function ValueAccessor_ionBlur_HostBindingHandler($event) {
          return ctx._handleBlurEvent($event.target);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAccessor, [{
    type: Directive
  }], () => [{
    type: Injector
  }, {
    type: ElementRef
  }], {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["ionBlur", ["$event.target"]]
    }]
  });
})();
var setIonicClasses = (element) => {
  raf(() => {
    const input2 = element.nativeElement;
    const hasValue = input2.value != null && input2.value.toString().length > 0;
    const classes = getClasses(input2);
    setClasses(input2, classes);
    const item = input2.closest("ion-item");
    if (item) {
      if (hasValue) {
        setClasses(item, [...classes, "item-has-value"]);
      } else {
        setClasses(item, classes);
      }
    }
  });
};
var getClasses = (element) => {
  const classList = element.classList;
  const classes = [];
  for (let i5 = 0; i5 < classList.length; i5++) {
    const item = classList.item(i5);
    if (item !== null && startsWith(item, "ng-")) {
      classes.push(`ion-${item.substring(3)}`);
    }
  }
  return classes;
};
var setClasses = (element, classes) => {
  const classList = element.classList;
  classList.remove("ion-valid", "ion-invalid", "ion-touched", "ion-untouched", "ion-dirty", "ion-pristine");
  classList.add(...classes);
};
var startsWith = (input2, search) => {
  return input2.substring(0, search.length) === search;
};

// node_modules/@ionic/angular/dist/common/directives/navigation/back-button.js
var BACK_BUTTON_INPUTS = ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"];
var IonBackButton = class IonBackButton2 {
  routerOutlet;
  navCtrl;
  config;
  r;
  z;
  el;
  constructor(routerOutlet, navCtrl, config, r9, z3, c9) {
    this.routerOutlet = routerOutlet;
    this.navCtrl = navCtrl;
    this.config = config;
    this.r = r9;
    this.z = z3;
    c9.detach();
    this.el = this.r.nativeElement;
  }
  /**
   * @internal
   */
  onClick(ev) {
    const defaultHref = this.defaultHref || this.config.get("backButtonDefaultHref");
    if (this.routerOutlet?.canGoBack()) {
      this.navCtrl.setDirection("back", void 0, void 0, this.routerAnimation);
      this.routerOutlet.pop();
      ev.preventDefault();
    } else if (defaultHref != null) {
      this.navCtrl.navigateBack(defaultHref, {
        animation: this.routerAnimation
      });
      ev.preventDefault();
    }
  }
  /** @nocollapse */
  static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBackButton2)(ɵɵdirectiveInject(IonRouterOutlet, 8), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonBackButton2,
    hostBindings: function IonBackButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function IonBackButton_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      color: "color",
      defaultHref: "defaultHref",
      disabled: "disabled",
      icon: "icon",
      mode: "mode",
      routerAnimation: "routerAnimation",
      text: "text",
      type: "type"
    }
  });
};
IonBackButton = __decorate([ProxyCmp({
  inputs: BACK_BUTTON_INPUTS
})], IonBackButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: BACK_BUTTON_INPUTS
    }]
  }], () => [{
    type: IonRouterOutlet,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NavController
  }, {
    type: Config
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/nav.js
var NAV_INPUTS = ["animated", "animation", "root", "rootParams", "swipeGesture"];
var NAV_METHODS = ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"];
var IonNav = class IonNav2 {
  z;
  el;
  constructor(ref, environmentInjector, injector, angularDelegate, z3, c9) {
    this.z = z3;
    c9.detach();
    this.el = ref.nativeElement;
    ref.nativeElement.delegate = angularDelegate.create(environmentInjector, injector);
    proxyOutputs(this, this.el, ["ionNavDidChange", "ionNavWillChange"]);
  }
  /** @nocollapse */
  static ɵfac = function IonNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNav2)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(EnvironmentInjector), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AngularDelegate), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: IonNav2,
    inputs: {
      animated: "animated",
      animation: "animation",
      root: "root",
      rootParams: "rootParams",
      swipeGesture: "swipeGesture"
    }
  });
};
IonNav = __decorate([ProxyCmp({
  inputs: NAV_INPUTS,
  methods: NAV_METHODS
})], IonNav);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: NAV_INPUTS
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: EnvironmentInjector
  }, {
    type: Injector
  }, {
    type: AngularDelegate
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], null);
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/router-link-delegate.js
var RouterLinkDelegateDirective = class _RouterLinkDelegateDirective {
  locationStrategy;
  navCtrl;
  elementRef;
  router;
  routerLink;
  routerDirection = "forward";
  routerAnimation;
  constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
    this.locationStrategy = locationStrategy;
    this.navCtrl = navCtrl;
    this.elementRef = elementRef;
    this.router = router;
    this.routerLink = routerLink;
  }
  ngOnInit() {
    this.updateTargetUrlAndHref();
    this.updateTabindex();
    this.elementRef.nativeElement.addEventListener("click", this.onCaptureClick, {
      capture: true
    });
  }
  ngOnChanges() {
    this.updateTargetUrlAndHref();
  }
  ngOnDestroy() {
    this.elementRef.nativeElement.removeEventListener("click", this.onCaptureClick, {
      capture: true
    });
  }
  onCaptureClick = (ev) => {
    if (this.opensNatively(ev)) {
      ev.stopImmediatePropagation();
    }
  };
  /**
   * True when the browser should handle the click natively instead of routing
   * in-app: a modifier was held (ctrl/meta/shift/alt), or the host targets
   * something other than `_self`. This mirrors the modifier set Angular's own
   * `RouterLink` guards on, so an Ionic `routerLink` behaves like a plain anchor
   * for new-tab, new-window, and download intents.
   */
  opensNatively(ev) {
    if (ev instanceof MouseEvent && (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey)) {
      return true;
    }
    const target = this.elementRef.nativeElement.target;
    return target != null && target !== "" && target !== "_self";
  }
  /**
   * The `tabindex` is set to `0` by default on the host element when
   * the `routerLink` directive is used. This causes issues with Ionic
   * components that wrap an `a` or `button` element, such as `ion-item`.
   * See issue https://github.com/angular/angular/issues/28345
   *
   * This method removes the `tabindex` attribute from the host element
   * to allow the Ionic component to manage the focus state correctly.
   */
  updateTabindex() {
    const ionicComponents = ["ION-BACK-BUTTON", "ION-BREADCRUMB", "ION-BUTTON", "ION-CARD", "ION-FAB-BUTTON", "ION-ITEM", "ION-ITEM-OPTION", "ION-MENU-BUTTON", "ION-SEGMENT-BUTTON", "ION-TAB-BUTTON"];
    const hostElement = this.elementRef.nativeElement;
    if (ionicComponents.includes(hostElement.tagName)) {
      if (hostElement.getAttribute("tabindex") === "0") {
        hostElement.removeAttribute("tabindex");
      }
    }
  }
  updateTargetUrlAndHref() {
    if (this.routerLink?.urlTree) {
      const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
      this.elementRef.nativeElement.href = href;
    }
  }
  /**
   * @internal
   */
  onClick(ev) {
    this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
    ev.preventDefault();
  }
  /** @nocollapse */
  static ɵfac = function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkDelegateDirective)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkDelegateDirective,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    hostBindings: function RouterLinkDelegateDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RouterLinkDelegateDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      routerDirection: "routerDirection",
      routerAnimation: "routerAnimation"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], () => [{
    type: LocationStrategy
  }, {
    type: NavController
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    routerDirection: [{
      type: Input
    }],
    routerAnimation: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var RouterLinkWithHrefDelegateDirective = class _RouterLinkWithHrefDelegateDirective {
  locationStrategy;
  navCtrl;
  elementRef;
  router;
  routerLink;
  routerDirection = "forward";
  routerAnimation;
  constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
    this.locationStrategy = locationStrategy;
    this.navCtrl = navCtrl;
    this.elementRef = elementRef;
    this.router = router;
    this.routerLink = routerLink;
  }
  ngOnInit() {
    this.updateTargetUrlAndHref();
  }
  ngOnChanges() {
    this.updateTargetUrlAndHref();
  }
  updateTargetUrlAndHref() {
    if (this.routerLink?.urlTree) {
      const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
      this.elementRef.nativeElement.href = href;
    }
  }
  /**
   * @internal
   */
  onClick() {
    this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
  }
  /** @nocollapse */
  static ɵfac = function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkWithHrefDelegateDirective)(ɵɵdirectiveInject(LocationStrategy), ɵɵdirectiveInject(NavController), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(RouterLink, 8));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _RouterLinkWithHrefDelegateDirective,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    hostBindings: function RouterLinkWithHrefDelegateDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RouterLinkWithHrefDelegateDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      routerDirection: "routerDirection",
      routerAnimation: "routerAnimation"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective, [{
    type: Directive,
    args: [{
      selector: "a[routerLink],area[routerLink]"
    }]
  }], () => [{
    type: LocationStrategy
  }, {
    type: NavController
  }, {
    type: ElementRef
  }, {
    type: Router
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    routerDirection: [{
      type: Input
    }],
    routerAnimation: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/directives/navigation/tabs.js
var _c0 = ["tabsInner"];
var parseHrefExtras = (href) => {
  if (!href) {
    return void 0;
  }
  const hashIndex = href.indexOf("#");
  const fragment = hashIndex >= 0 && hashIndex < href.length - 1 ? href.slice(hashIndex + 1) : void 0;
  const beforeHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const queryIndex = beforeHash.indexOf("?");
  const search = queryIndex >= 0 ? beforeHash.slice(queryIndex + 1) : "";
  let queryParams;
  if (search) {
    const params = new URLSearchParams(search);
    queryParams = {};
    for (const key of new Set(params.keys())) {
      const all = params.getAll(key);
      queryParams[key] = all.length > 1 ? all : all[0];
    }
  }
  if (!queryParams && fragment === void 0) {
    return void 0;
  }
  const extras = {};
  if (queryParams) extras.queryParams = queryParams;
  if (fragment !== void 0) extras.fragment = fragment;
  return extras;
};
var IonTabs = class _IonTabs {
  navCtrl;
  tabsInner;
  /**
   * Emitted before the tab view is changed.
   */
  ionTabsWillChange = new EventEmitter();
  /**
   * Emitted after the tab view is changed.
   */
  ionTabsDidChange = new EventEmitter();
  tabBarSlot = "bottom";
  hasTab = false;
  selectedTab;
  leavingTab;
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
  }
  ngAfterViewInit() {
    const firstTab = this.tabs.length > 0 ? this.tabs.first : void 0;
    if (firstTab) {
      this.hasTab = true;
      this.setActiveTab(firstTab.tab);
      this.tabSwitch();
    }
  }
  ngAfterContentInit() {
    this.detectSlotChanges();
  }
  ngAfterContentChecked() {
    this.detectSlotChanges();
  }
  /**
   * @internal
   */
  onStackWillChange({
    enteringView,
    tabSwitch
  }) {
    const stackId = enteringView.stackId;
    if (tabSwitch && stackId !== void 0) {
      this.ionTabsWillChange.emit({
        tab: stackId
      });
    }
  }
  /**
   * @internal
   */
  onStackDidChange({
    enteringView,
    tabSwitch
  }) {
    const stackId = enteringView.stackId;
    if (tabSwitch && stackId !== void 0) {
      if (this.tabBar) {
        this.tabBar.selectedTab = stackId;
      }
      this.ionTabsDidChange.emit({
        tab: stackId
      });
    }
  }
  /**
   * Host listener for the `ionTabButtonClick` event. Angular 22 enabled stricter
   * host-binding type checking, which types `$event` as the DOM `Event`. That is
   * not assignable to `select`'s public `string | CustomEvent` parameter, so this
   * thin wrapper narrows the event before forwarding to keep `select`'s public
   * signature intact.
   */
  onTabButtonClick(ev) {
    return this.select(ev);
  }
  /**
   * When a tab button is clicked, there are several scenarios:
   * 1. If the selected tab is currently active (the tab button has been clicked
   *    again), then it should go to the root view for that tab.
   *
   *   a. Get the saved root view from the router outlet. If the saved root view
   *      matches the tabRootUrl, set the route view to this view including the
   *      navigation extras. Any `queryParams` or `fragment` declared on the tab
   *      button's `href` are also forwarded.
   *   b. If the saved root view from the router outlet does not match, navigate
   *      to the tabRootUrl, forwarding any `queryParams`/`fragment` declared on
   *      the tab button's `href`.
   *
   * 2. If the current tab tab is not currently selected, get the last route
   *    view from the router outlet.
   *
   *   a. If the last route view exists, navigate to that view including any
   *      navigation extras.
   *   b. If the last route view doesn't exist, then navigate to the default
   *      tabRootUrl, forwarding any `queryParams`/`fragment` declared on the
   *      tab button's `href`.
   */
  select(tabOrEvent) {
    const isTabString = typeof tabOrEvent === "string";
    const tab = isTabString ? tabOrEvent : tabOrEvent.detail.tab;
    const href = isTabString ? void 0 : tabOrEvent.detail.href;
    if (this.hasTab) {
      this.setActiveTab(tab);
      this.tabSwitch();
      return;
    }
    const alreadySelected = this.outlet.getActiveStackId() === tab;
    const tabRootUrl = `${this.outlet.tabsPrefix}/${tab}`;
    const hrefExtras = parseHrefExtras(href);
    if (!isTabString) {
      tabOrEvent.stopPropagation();
    }
    if (alreadySelected) {
      const activeStackId = this.outlet.getActiveStackId();
      const activeView = this.outlet.getLastRouteView(activeStackId);
      if (activeView?.url === tabRootUrl) {
        return;
      }
      const rootView = this.outlet.getRootView(tab);
      const navigationExtras = rootView && tabRootUrl === rootView.url && rootView.savedExtras;
      return this.navCtrl.navigateRoot(tabRootUrl, __spreadProps(__spreadValues(__spreadValues({}, navigationExtras), hrefExtras), {
        animated: true,
        animationDirection: "back"
      }));
    } else {
      const lastRoute = this.outlet.getLastRouteView(tab);
      const url = lastRoute?.url || tabRootUrl;
      const navigationExtras = lastRoute?.savedExtras ?? (url === tabRootUrl ? hrefExtras : void 0);
      return this.navCtrl.navigateRoot(url, __spreadProps(__spreadValues({}, navigationExtras), {
        animated: true,
        animationDirection: "back"
      }));
    }
  }
  setActiveTab(tab) {
    const tabs = this.tabs;
    const selectedTab = tabs.find((t7) => t7.tab === tab);
    if (!selectedTab) {
      console.error(`[Ionic Error]: Tab with id: "${tab}" does not exist`);
      return;
    }
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({
      tab
    });
    selectedTab.el.active = true;
  }
  tabSwitch() {
    const {
      selectedTab,
      leavingTab
    } = this;
    if (this.tabBar && selectedTab) {
      this.tabBar.selectedTab = selectedTab.tab;
    }
    if (leavingTab?.tab !== selectedTab?.tab) {
      if (leavingTab?.el) {
        leavingTab.el.active = false;
      }
    }
    if (selectedTab) {
      this.ionTabsDidChange.emit({
        tab: selectedTab.tab
      });
    }
  }
  getSelected() {
    if (this.hasTab) {
      return this.selectedTab?.tab;
    }
    return this.outlet.getActiveStackId();
  }
  /**
   * Detects changes to the slot attribute of the tab bar.
   *
   * If the slot attribute has changed, then the tab bar
   * should be relocated to the new slot position.
   */
  detectSlotChanges() {
    this.tabBars.forEach((tabBar) => {
      const currentSlot = tabBar.el.getAttribute("slot");
      if (currentSlot !== this.tabBarSlot) {
        this.tabBarSlot = currentSlot;
        this.relocateTabBar();
      }
    });
  }
  /**
   * Relocates the tab bar to the new slot position.
   */
  relocateTabBar() {
    const tabBar = this.tabBar.el;
    if (this.tabBarSlot === "top") {
      this.tabsInner.nativeElement.before(tabBar);
    } else {
      this.tabsInner.nativeElement.after(tabBar);
    }
  }
  /** @nocollapse */
  static ɵfac = function IonTabs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonTabs)(ɵɵdirectiveInject(NavController));
  };
  /** @nocollapse */
  static ɵdir = ɵɵdefineDirective({
    type: _IonTabs,
    selectors: [["ion-tabs"]],
    viewQuery: function IonTabs_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabsInner = _t.first);
      }
    },
    hostBindings: function IonTabs_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("ionTabButtonClick", function IonTabs_ionTabButtonClick_HostBindingHandler($event) {
          return ctx.onTabButtonClick($event);
        });
      }
    },
    outputs: {
      ionTabsWillChange: "ionTabsWillChange",
      ionTabsDidChange: "ionTabsDidChange"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs, [{
    type: Directive,
    args: [{
      selector: "ion-tabs"
    }]
  }], () => [{
    type: NavController
  }], {
    tabsInner: [{
      type: ViewChild,
      args: ["tabsInner", {
        read: ElementRef,
        static: true
      }]
    }],
    ionTabsWillChange: [{
      type: Output
    }],
    ionTabsDidChange: [{
      type: Output
    }],
    onTabButtonClick: [{
      type: HostListener,
      args: ["ionTabButtonClick", ["$event"]]
    }]
  });
})();

// node_modules/@ionic/angular/dist/common/utils/overlay.js
var OverlayBaseController = class {
  ctrl;
  constructor(ctrl) {
    this.ctrl = ctrl;
  }
  /**
   * Creates a new overlay
   */
  create(opts) {
    return this.ctrl.create(opts || {});
  }
  /**
   * When `id` is not provided, it dismisses the top overlay.
   */
  dismiss(data, role, id) {
    return this.ctrl.dismiss(data, role, id);
  }
  /**
   * Returns the top overlay.
   */
  getTop() {
    return this.ctrl.getTop();
  }
};

// node_modules/@ionic/angular/dist/common/utils/routing.js
var IonicRouteStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   */
  shouldDetach(_route) {
    return false;
  }
  /**
   * Returns `false`, meaning the route (and its subtree) is never reattached
   */
  shouldAttach(_route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(_route, _detachedTree) {
    return;
  }
  /**
   * Returns `null` because this strategy does not store routes for later re-use.
   */
  retrieve(_route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and
   * current route config are identical and all route parameters are identical.
   */
  shouldReuseRoute(future, curr) {
    if (future.routeConfig !== curr.routeConfig) {
      return false;
    }
    const futureParams = future.params;
    const currentParams = curr.params;
    const keysA = Object.keys(futureParams);
    const keysB = Object.keys(currentParams);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (const key of keysA) {
      if (currentParams[key] !== futureParams[key]) {
        return false;
      }
    }
    return true;
  }
};

// node_modules/@ionic/core/components/p-B-hirT0v.js
var t6 = () => {
  let t7;
  return { lock: async () => {
    const e4 = t7;
    let n7;
    return t7 = new Promise(((t8) => n7 = t8)), void 0 !== e4 && await e4, n7;
  } };
};

// node_modules/@ionic/core/components/p-Do82ooMy.js
var c8 = Jn(class extends A {
  constructor(o12) {
    super(), false !== o12 && this.__registerHost(), this.__attachShadow(), this.ionBackdropTap = Qt(this, "ionBackdropTap", 7), this.visible = true, this.tappable = true, this.stopPropagation = true;
  }
  onMouseDown(o12) {
    this.emitTap(o12);
  }
  emitTap(o12) {
    this.stopPropagation && (o12.preventDefault(), o12.stopPropagation()), this.tappable && this.ionBackdropTap.emit();
  }
  render() {
    const o12 = v2(this);
    return Rt(Lt, { key: "7abaf2c310aa399607451b14063265e8a5846938", "aria-hidden": "true", class: { [o12]: true, "backdrop-hide": !this.visible, "backdrop-no-tappable": !this.tappable } });
  }
  static get style() {
    return { ios: ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}", md: ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}" };
  }
}, [33, "ion-backdrop", { visible: [4], tappable: [4], stopPropagation: [4, "stop-propagation"] }, [[2, "click", "onMouseDown"]]]);
function e3() {
  "undefined" != typeof customElements && ["ion-backdrop"].forEach(((o12) => {
    "ion-backdrop" === o12 && (customElements.get(oe(o12)) || customElements.define(oe(o12), c8));
  }));
}

// node_modules/@ionic/core/components/p-CXAF_kfJ.js
var _2;
!(function(t7) {
  t7.Dark = "DARK", t7.Light = "LIGHT", t7.Default = "DEFAULT";
})(_2 || (_2 = {}));
var q2 = { getEngine() {
  const t7 = r3();
  if (t7?.isPluginAvailable("StatusBar")) return t7.Plugins.StatusBar;
}, setStyle(t7) {
  const i5 = this.getEngine();
  i5 && i5.setStyle(t7);
}, getStyle: async function() {
  const t7 = this.getEngine();
  if (!t7) return _2.Default;
  const { style: i5 } = await t7.getInfo();
  return i5;
} };
var J3 = (t7, i5) => {
  if (1 === i5) return 0;
  const o12 = 1 / (1 - i5);
  return t7 * o12 + -i5 * o12;
};
var Q2 = () => {
  !d2 || d2.innerWidth >= 768 || q2.setStyle({ style: _2.Dark });
};
var tt = (t7 = _2.Default) => {
  !d2 || d2.innerWidth >= 768 || q2.setStyle({ style: t7 });
};
var it = (t7) => {
  const i5 = t2(t7) ? m(t7).querySelector(".inner-scroll") : t7;
  return !u(t7) && 0 === i5.scrollTop;
};
var ot = async (t7, i5) => {
  "function" == typeof t7.canDismiss && await t7.canDismiss(void 0, on) && (i5.isRunning() ? i5.onFinish((() => {
    t7.dismiss(void 0, "handler");
  }), { oneTimeCallback: true }) : t7.dismiss(void 0, "handler"));
};
var et = (t7) => 255275e-8 * 2.71828 ** (-14.9619 * t7) - 1.00255 * 2.71828 ** (-0.0380968 * t7) + 1;
var at = 0.915;
var st = (t7, i5) => h(400, t7 / Math.abs(1.1 * i5), 500);
var rt = (t7, i5) => {
  const o12 = window.innerHeight, e4 = t7.getBoundingClientRect().top, a6 = Math.round(1e3 * (1 - i5 / (o12 - e4))) / 1e3;
  return Math.max(0, Math.min(1, a6));
};
var nt = (t7) => {
  const { currentBreakpoint: i5, backdropBreakpoint: o12, expandToScroll: e4 } = t7, a6 = void 0 === o12 || o12 < i5, s6 = a6 ? `calc(var(--backdrop-opacity) * ${i5})` : "0", r9 = r("backdropAnimation").fromTo("opacity", 0, s6);
  return a6 && r9.beforeStyles({ "pointer-events": "none" }).afterClearStyles(["pointer-events"]), { wrapperAnimation: r("wrapperAnimation").keyframes([{ offset: 0, opacity: 1, transform: "translateY(100%)" }, { offset: 1, opacity: 1, transform: `translateY(${100 - 100 * i5}%)` }]), backdropAnimation: r9, contentAnimation: e4 ? void 0 : r("contentAnimation").keyframes([{ offset: 0, opacity: 1, maxHeight: 100 * (1 - i5) + "%" }, { offset: 1, opacity: 1, maxHeight: 100 * i5 + "%" }]) };
};
var dt = (t7) => {
  const { currentBreakpoint: i5, backdropBreakpoint: o12 } = t7, e4 = `calc(var(--backdrop-opacity) * ${J3(i5, o12)})`, a6 = [{ offset: 0, opacity: e4 }, { offset: 1, opacity: 0 }], s6 = [{ offset: 0, opacity: e4 }, { offset: o12, opacity: 0 }, { offset: 1, opacity: 0 }], r9 = r("backdropAnimation").keyframes(0 !== o12 ? s6 : a6);
  return { wrapperAnimation: r("wrapperAnimation").keyframes([{ offset: 0, opacity: 1, transform: `translateY(${100 - 100 * i5}%)` }, { offset: 1, opacity: 1, transform: "translateY(100%)" }]), backdropAnimation: r9 };
};
var ht = (t7, i5) => {
  const { presentingEl: o12, currentBreakpoint: e4, expandToScroll: a6 } = i5, s6 = m(t7), { wrapperAnimation: r9, backdropAnimation: n7, contentAnimation: d6 } = void 0 !== e4 ? nt(i5) : { backdropAnimation: r().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({ "pointer-events": "none" }).afterClearStyles(["pointer-events"]), wrapperAnimation: r().fromTo("transform", "translateY(100vh)", "translateY(0vh)"), contentAnimation: void 0 };
  n7.addElement(s6.querySelector("ion-backdrop")), r9.addElement(s6.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({ opacity: 1 }), !a6 && d6?.addElement(t7.querySelector(".ion-page"));
  const h6 = r("entering-base").addElement(t7).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation([r9]);
  if (d6 && h6.addAnimation(d6), o12) {
    const t8 = window.innerWidth < 768, i6 = "ION-MODAL" === o12.tagName && void 0 !== o12.presentingElement, e5 = m(o12), a7 = r().beforeStyles({ transform: "translateY(0)", "transform-origin": "top center", overflow: "hidden" }), s7 = document.body;
    if (t8) {
      const t9 = CSS.supports("width", "max(0px, 1px)") ? "max(30px, var(--ion-safe-area-top))" : "30px", e6 = `translateY(${i6 ? "-10px" : t9}) scale(0.915)`;
      a7.afterStyles({ transform: e6 }).beforeAddWrite((() => s7.style.setProperty("background-color", "black"))).addElement(o12).keyframes([{ offset: 0, filter: "contrast(1)", transform: "translateY(0px) scale(1)", borderRadius: "0px" }, { offset: 1, filter: "contrast(0.85)", transform: e6, borderRadius: "10px 10px 0 0" }]), h6.addAnimation(a7);
    } else if (h6.addAnimation(n7), i6) {
      const t9 = `translateY(-10px) scale(${i6 ? at : 1})`;
      a7.afterStyles({ transform: t9 }).addElement(e5.querySelector(".modal-wrapper")).keyframes([{ offset: 0, filter: "contrast(1)", transform: "translateY(0) scale(1)" }, { offset: 1, filter: "contrast(0.85)", transform: t9 }]);
      const o13 = r().afterStyles({ transform: t9 }).addElement(e5.querySelector(".modal-shadow")).keyframes([{ offset: 0, opacity: "1", transform: "translateY(0) scale(1)" }, { offset: 1, opacity: "0", transform: t9 }]);
      h6.addAnimation([a7, o13]);
    } else r9.fromTo("opacity", "0", "1");
  } else h6.addAnimation(n7);
  return h6;
};
var pt = (t7, i5, o12 = 500) => {
  const { presentingEl: e4, currentBreakpoint: a6 } = i5, s6 = m(t7), { wrapperAnimation: r9, backdropAnimation: n7 } = void 0 !== a6 ? dt(i5) : { backdropAnimation: r().fromTo("opacity", "var(--backdrop-opacity)", 0), wrapperAnimation: r().fromTo("transform", "translateY(0vh)", "translateY(100vh)") };
  n7.addElement(s6.querySelector("ion-backdrop")), r9.addElement(s6.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({ opacity: 1 });
  const d6 = r("leaving-base").addElement(t7).easing("cubic-bezier(0.32,0.72,0,1)").duration(o12).addAnimation(r9);
  if (e4) {
    const t8 = window.innerWidth < 768, i6 = "ION-MODAL" === e4.tagName && void 0 !== e4.presentingElement, o13 = m(e4), a7 = r().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(((t9) => {
      1 === t9 && (e4.style.setProperty("overflow", ""), Array.from(s7.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(((t10) => void 0 !== t10.presentingElement)).length <= 1 && s7.style.setProperty("background-color", ""));
    })), s7 = document.body;
    if (t8) {
      const t9 = CSS.supports("width", "max(0px, 1px)") ? "max(30px, var(--ion-safe-area-top))" : "30px", o14 = `translateY(${i6 ? "-10px" : t9}) scale(0.915)`;
      a7.addElement(e4).keyframes([{ offset: 0, filter: "contrast(0.85)", transform: o14, borderRadius: "10px 10px 0 0" }, { offset: 1, filter: "contrast(1)", transform: "translateY(0px) scale(1)", borderRadius: "0px" }]), d6.addAnimation(a7);
    } else if (d6.addAnimation(n7), i6) {
      const t9 = `translateY(-10px) scale(${i6 ? at : 1})`;
      a7.addElement(o13.querySelector(".modal-wrapper")).afterStyles({ transform: "translate3d(0, 0, 0)" }).keyframes([{ offset: 0, filter: "contrast(0.85)", transform: t9 }, { offset: 1, filter: "contrast(1)", transform: "translateY(0) scale(1)" }]);
      const e5 = r().addElement(o13.querySelector(".modal-shadow")).afterStyles({ transform: "translateY(0) scale(1)" }).keyframes([{ offset: 0, opacity: "0", transform: t9 }, { offset: 1, opacity: "1", transform: "translateY(0) scale(1)" }]);
      d6.addAnimation([a7, e5]);
    } else r9.fromTo("opacity", "1", "0");
  } else d6.addAnimation(n7);
  return d6;
};
var lt = (t7, i5) => {
  const { currentBreakpoint: o12, expandToScroll: e4 } = i5, a6 = m(t7), { wrapperAnimation: s6, backdropAnimation: r9, contentAnimation: n7 } = void 0 !== o12 ? nt(i5) : { backdropAnimation: r().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({ "pointer-events": "none" }).afterClearStyles(["pointer-events"]), wrapperAnimation: r().keyframes([{ offset: 0, opacity: 0.01, transform: "translateY(40px)" }, { offset: 1, opacity: 1, transform: "translateY(0px)" }]), contentAnimation: void 0 };
  r9.addElement(a6.querySelector("ion-backdrop")), s6.addElement(a6.querySelector(".modal-wrapper")), !e4 && n7?.addElement(t7.querySelector(".ion-page"));
  const d6 = r().addElement(t7).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r9, s6]);
  return n7 && d6.addAnimation(n7), d6;
};
var ct = (t7, i5) => {
  const { currentBreakpoint: o12 } = i5, e4 = m(t7), { wrapperAnimation: a6, backdropAnimation: s6 } = void 0 !== o12 ? dt(i5) : { backdropAnimation: r().fromTo("opacity", "var(--backdrop-opacity)", 0), wrapperAnimation: r().keyframes([{ offset: 0, opacity: 0.99, transform: "translateY(0px)" }, { offset: 1, opacity: 0, transform: "translateY(40px)" }]) };
  return s6.addElement(e4.querySelector("ion-backdrop")), a6.addElement(e4.querySelector(".modal-wrapper")), r().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([s6, a6]);
};
var mt = null;
var ft = false;
var bt = () => {
  if (null !== mt) return mt;
  const t7 = d2?.document;
  if (!t7?.body) return 0;
  const i5 = t7.createElement("div");
  i5.style.cssText = "position:fixed;visibility:hidden;pointer-events:none;top:0;left:0;padding-top:var(--ion-safe-area-top,0px);", t7.body.appendChild(i5);
  const o12 = parseFloat(getComputedStyle(i5).paddingTop) || 0;
  return i5.remove(), mt = o12, ft || (ft = true, f((() => {
    mt = null, ft = false;
  }))), o12;
};
var ut = (t7) => {
  const i5 = getComputedStyle(t7), o12 = nn(i5.getPropertyValue("--width")), e4 = nn(i5.getPropertyValue("--height"));
  return "fullscreen" === o12 && "fullscreen" === e4 ? { vertical: true, horizontal: true } : xt(t7);
};
var xt = (t7) => {
  const i5 = t7.shadowRoot?.querySelector(".modal-wrapper");
  if (null == i5 || void 0 === d2) return { vertical: false, horizontal: false };
  const o12 = t7.classList.contains("overlay-hidden");
  o12 && t7.classList.remove("overlay-hidden");
  const { width: e4, height: a6 } = i5.getBoundingClientRect();
  return o12 && t7.classList.add("overlay-hidden"), { vertical: a6 >= d2.innerHeight - 5, horizontal: e4 >= d2.innerWidth - 5 };
};
var vt = (t7, i5) => {
  t7.style.setProperty("--ion-safe-area-top", i5.top), t7.style.setProperty("--ion-safe-area-bottom", i5.bottom), t7.style.setProperty("--ion-safe-area-left", i5.left), t7.style.setProperty("--ion-safe-area-right", i5.right);
};
var wt = Jn(class extends A {
  constructor(t7) {
    super(), false !== t7 && this.__registerHost(), this.__attachShadow(), this.didPresent = Qt(this, "ionModalDidPresent", 7), this.willPresent = Qt(this, "ionModalWillPresent", 7), this.willDismiss = Qt(this, "ionModalWillDismiss", 7), this.didDismiss = Qt(this, "ionModalDidDismiss", 7), this.ionBreakpointDidChange = Qt(this, "ionBreakpointDidChange", 7), this.didPresentShorthand = Qt(this, "didPresent", 7), this.willPresentShorthand = Qt(this, "willPresent", 7), this.willDismissShorthand = Qt(this, "willDismiss", 7), this.didDismissShorthand = Qt(this, "didDismiss", 7), this.ionMount = Qt(this, "ionMount", 7), this.ionDragStart = Qt(this, "ionDragStart", 7), this.ionDragMove = Qt(this, "ionDragMove", 7), this.ionDragEnd = Qt(this, "ionDragEnd", 7), this.lockController = t6(), this.triggerController = sn(), this.coreDelegate = r6(), this.isSheetModal = false, this.inheritedAttributes = {}, this.inline = false, this.gestureAnimationDismissing = false, this.isPresenting = false, this.presented = false, this.hasController = false, this.keyboardClose = true, this.expandToScroll = true, this.backdropBreakpoint = 0, this.handleBehavior = "cycle", this.backdropDismiss = true, this.showBackdrop = true, this.animated = true, this.isOpen = false, this.keepContentsMounted = false, this.focusTrap = true, this.canDismiss = true, this.onHandleClick = () => {
      const { sheetTransition: t8, handleBehavior: i5 } = this;
      "cycle" === i5 && void 0 === t8 && this.moveToNextBreakpoint();
    }, this.onBackdropTap = () => {
      const { sheetTransition: t8 } = this;
      void 0 === t8 && this.dismiss(void 0, en);
    }, this.onLifecycle = (t8) => {
      const i5 = this.usersElement, o12 = gt[t8.type];
      if (i5 && o12) {
        const e4 = new CustomEvent(o12, { bubbles: false, cancelable: false, detail: t8.detail });
        i5.dispatchEvent(e4);
      }
    }, this.onModalFocus = (t8) => {
      const { dragHandleEl: i5, el: o12 } = this;
      t8.target === o12 && null == o12.shadowRoot?.activeElement && i5 && -1 !== i5.tabIndex && i5.focus();
    }, this.onSlotChange = ({ target: t8 }) => {
      t8.assignedElements().forEach(((t9) => {
        t9.querySelectorAll("ion-modal").forEach(((t10) => {
          null === t10.getAttribute("data-parent-ion-modal") && t10.setAttribute("data-parent-ion-modal", this.el.id);
        }));
      }));
    };
  }
  onIsOpenChange(t7, i5) {
    true === t7 && false === i5 ? this.present() : false === t7 && true === i5 && this.dismiss();
  }
  triggerChanged() {
    const { trigger: t7, el: i5, triggerController: o12 } = this;
    t7 && o12.addClickListener(i5, t7);
  }
  onWindowResize() {
    this.presented && (clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout((() => {
      const t7 = this.getSafeAreaContext();
      if (!t7.isCardModal || this.enterAnimation || this.leaveAnimation || this.handleViewTransition(), t7.isSheetModal && this.updateSheetOffsetTop(), !t7.isSheetModal && !t7.isCardModal) {
        this.updateSafeAreaOverrides();
        const { contentEl: t8, hasFooter: i5 } = this.findContentAndFooter();
        this.clearContentSafeAreaPadding(t8), this.applyFullscreenSafeAreaTo(t8, i5);
      }
    }), 50));
  }
  breakpointsChanged(t7) {
    void 0 !== t7 && (this.sortedBreakpoints = t7.sort(((t8, i5) => t8 - i5)));
  }
  connectedCallback() {
    const { el: t7 } = this;
    A2(t7), this.triggerChanged(), (this.presented || this.isPresenting) && this.restoreSafeAreaOverrides(), this.presented && (J2(t7), this.initParentRemovalObserver());
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener(), this.cleanupViewTransitionListener(), this.cleanupParentRemovalObserver(), this.cleanupSafeAreaOverrides(), this.presented && $();
  }
  componentWillLoad() {
    const { breakpoints: t7, initialBreakpoint: i5, el: o12, htmlAttributes: a6 } = this, s6 = this.isSheetModal = void 0 !== t7 && void 0 !== i5, r9 = ["aria-label", "role"];
    this.inheritedAttributes = s2(o12, r9), o12.parentNode && (this.cachedOriginalParent = o12.parentNode), void 0 !== a6 && r9.forEach(((t8) => {
      a6[t8] && (this.inheritedAttributes = __spreadProps(__spreadValues({}, this.inheritedAttributes), { [t8]: a6[t8] }), delete a6[t8]);
    })), s6 && (this.currentBreakpoint = this.initialBreakpoint), void 0 === t7 || void 0 === i5 || t7.includes(i5) || a("[ion-modal] - Your breakpoints array must include the initialBreakpoint value."), this.htmlAttributes?.id || P2(this.el);
  }
  componentDidLoad() {
    true === this.isOpen && f((() => this.present())), this.breakpointsChanged(this.breakpoints), this.triggerChanged();
  }
  getDelegate(t7 = false) {
    if (this.workingDelegate && !t7) return { delegate: this.workingDelegate, inline: this.inline };
    const i5 = this.inline = null !== this.el.parentNode && !this.hasController;
    return { inline: i5, delegate: this.workingDelegate = i5 ? this.delegate || this.coreDelegate : this.delegate };
  }
  async checkCanDismiss(t7, i5) {
    const { canDismiss: o12 } = this;
    return "function" == typeof o12 ? o12(t7, i5) : o12;
  }
  async present() {
    const t7 = await this.lockController.lock();
    if (this.presented) return void t7();
    const { presentingElement: i5, el: o12 } = this;
    this.currentBreakpoint = this.initialBreakpoint;
    const { inline: e4, delegate: s6 } = this.getDelegate(true);
    this.ionMount.emit(), this.usersElement = await t5(s6, o12, this.component, ["ion-page"], this.componentProps, e4), o3(o12) ? await W(this.usersElement) : this.keepContentsMounted || await U(), J((() => this.el.classList.add("show-modal"))), this.isSheetModal = void 0 !== this.breakpoints && void 0 !== this.initialBreakpoint, this.isPresenting = true;
    const r9 = void 0 !== i5;
    try {
      this.setInitialSafeAreaOverrides(), r9 && "ios" === v2(this) && (this.statusBarStyle = await q2.getStyle(), Q2()), await V(this, "modalEnter", ht, lt, { presentingEl: i5, currentBreakpoint: this.initialBreakpoint, backdropBreakpoint: this.backdropBreakpoint, expandToScroll: this.expandToScroll });
    } finally {
      this.isPresenting = false;
    }
    this.updateSafeAreaOverrides(), this.applyFullscreenSafeArea(), "undefined" != typeof window && (this.keyboardOpenCallback = () => {
      this.gesture && (this.gesture.enable(false), f((() => {
        this.gesture && this.gesture.enable(true);
      })));
    }, window.addEventListener(o5, this.keyboardOpenCallback)), this.isSheetModal ? this.initSheetGesture() : r9 && this.initSwipeToClose(), this.initViewTransitionListener(), this.initParentRemovalObserver(), t7();
  }
  initSwipeToClose() {
    if ("ios" !== v2(this)) return;
    const { el: t7 } = this, i5 = this.leaveAnimation || n.get("modalLeave", pt), o12 = this.animation = i5(t7, { presentingEl: this.presentingElement, expandToScroll: this.expandToScroll });
    i2(t7) ? (this.gesture = ((t8, i6, o13, e4, a6, s6, r9) => {
      const n7 = 0.5, d6 = t8.offsetHeight;
      let p6 = false, f5 = false, b5 = null, u5 = true, x2 = 0;
      const v4 = n3({ el: t8, gestureName: "modalSwipeToClose", gesturePriority: tn, direction: "y", threshold: 10, canStart: (t9) => {
        const i7 = t9.event.target;
        return null === i7 || !i7.closest || (b5 = l2(i7), b5 ? it(b5) : null === i7.closest("ion-footer"));
      }, onStart: (o14) => {
        const { deltaY: e5 } = o14;
        window.getSelection()?.removeAllRanges(), u5 = !b5 || !t2(b5) || b5.scrollY, f5 = void 0 !== t8.canDismiss && true !== t8.canDismiss, e5 > 0 && b5 && p2(b5), i6.progressStart(true, p6 ? 1 : 0), a6();
      }, onMove: (e5) => {
        const { deltaY: a7 } = e5;
        a7 > 0 && b5 && p2(b5);
        const r10 = e5.deltaY / d6, h6 = r10 >= 0 && f5, p7 = h6 ? 0.2 : 0.9999, l7 = h6 ? et(r10 / p7) : r10, m5 = h(1e-4, l7, p7);
        i6.progressStep(m5), m5 >= n7 && x2 < n7 ? tt(o13) : m5 < n7 && x2 >= n7 && Q2(), x2 = m5;
        const u6 = { currentY: e5.currentY, deltaY: e5.deltaY, velocityY: e5.velocityY, progress: rt(t8, e5.deltaY) };
        s6(u6);
      }, onEnd: (o14) => {
        const a7 = o14.velocityY, s7 = o14.deltaY / d6, h6 = s7 >= 0 && f5, l7 = h6 ? 0.2 : 0.9999, c9 = h6 ? et(s7 / l7) : s7, x3 = h(1e-4, c9, l7), w3 = !h6 && (o14.deltaY + 1e3 * a7) / d6 >= n7;
        let g3 = w3 ? -1e-3 : 1e-3;
        w3 ? (i6.easing("cubic-bezier(0.32, 0.72, 0, 1)"), g3 += t3([0, 0], [0.32, 0.72], [0, 1], [1, 1], x3)[0]) : (i6.easing("cubic-bezier(1, 0, 0.68, 0.28)"), g3 += t3([0, 0], [1, 0], [0.68, 0.28], [1, 1], x3)[0]);
        const y4 = st(w3 ? s7 * d6 : (1 - x3) * d6, a7);
        p6 = w3, v4.enable(false), b5 && v(b5, u5), i6.onFinish((() => {
          w3 || v4.enable(true);
        })).progressEnd(w3 ? 1 : 0, g3, y4);
        const A3 = h6 && x3 > l7 / 4;
        A3 ? ot(t8, i6) : w3 && e4();
        const Y4 = h6 ? A3 && "function" == typeof t8.canDismiss : w3, D2 = { currentY: o14.currentY, deltaY: o14.deltaY, velocityY: o14.velocityY, progress: rt(t8, o14.deltaY), isDismissing: Y4 };
        r9(D2);
      } });
      return v4;
    })(t7, o12, this.statusBarStyle ?? _2.Default, (() => this.cardOnDismiss()), (() => this.onDragStart()), ((t8) => this.onDragMove(t8)), ((t8) => this.onDragEnd(t8))), this.gesture.enable(true)) : m2(t7);
  }
  initSheetGesture() {
    const { wrapperEl: t7, initialBreakpoint: i5, backdropBreakpoint: o12 } = this;
    if (!t7 || void 0 === i5) return;
    const e4 = this.enterAnimation || n.get("modalEnter", ht), a6 = this.animation = e4(this.el, { presentingEl: this.presentingElement, currentBreakpoint: i5, backdropBreakpoint: o12, expandToScroll: this.expandToScroll });
    a6.progressStart(true, 1);
    const { gesture: r9, moveSheetToBreakpoint: n7, resetContentScroll: d6 } = ((t8, i6, o13, e5, a7, s6, r10 = [], n8, d7, p6, c9, m5, f5, b5) => {
      const u5 = { WRAPPER_KEYFRAMES: [{ offset: 0, transform: "translateY(0%)" }, { offset: 1, transform: "translateY(100%)" }], BACKDROP_KEYFRAMES: 0 !== a7 ? [{ offset: 0, opacity: "var(--backdrop-opacity)" }, { offset: 1 - a7, opacity: 0 }, { offset: 1, opacity: 0 }] : [{ offset: 0, opacity: "var(--backdrop-opacity)" }, { offset: 1, opacity: 0.01 }], CONTENT_KEYFRAMES: [{ offset: 0, maxHeight: "100%" }, { offset: 1, maxHeight: "0%" }] }, x2 = t8.querySelector("ion-content"), v4 = x2?.scrollY ?? true, w3 = o13.clientHeight;
      let A3 = e5, Y4 = 0, D2 = false, S3 = null, C2 = null, E3 = null, O3 = null;
      const T2 = r10[r10.length - 1], B3 = r10[0], P3 = s6.childAnimations.find(((t9) => "wrapperAnimation" === t9.id)), I2 = s6.childAnimations.find(((t9) => "backdropAnimation" === t9.id)), N2 = s6.childAnimations.find(((t9) => "contentAnimation" === t9.id)), R3 = () => {
        false !== t8.focusTrap && false !== t8.showBackdrop && (t8.style.setProperty("pointer-events", "auto"), i6.style.setProperty("pointer-events", "auto"), t8.classList.remove(dn));
      }, j3 = () => {
        t8.style.setProperty("pointer-events", "none"), i6.style.setProperty("pointer-events", "none"), t8.classList.add(dn);
      }, $2 = (i7) => {
        if (!C2 && (C2 = Array.from(t8.querySelectorAll("ion-footer")), !C2.length)) return;
        const o14 = t8.querySelector(".ion-page");
        if (O3 = i7, "stationary" === i7) C2.forEach(((t9) => {
          t9.classList.remove("modal-footer-moving"), t9.style.removeProperty("position"), t9.style.removeProperty("width"), t9.style.removeProperty("height"), t9.style.removeProperty("top"), t9.style.removeProperty("left"), o14?.style.removeProperty("padding-bottom"), o14?.appendChild(t9);
        }));
        else {
          let i8 = 0;
          C2.forEach(((o15, e6) => {
            const a8 = o15.getBoundingClientRect(), s7 = document.body.getBoundingClientRect();
            i8 += o15.clientHeight;
            const r11 = a8.top - s7.top, n9 = a8.left - s7.left;
            if (o15.style.setProperty("--pinned-width", `${o15.clientWidth}px`), o15.style.setProperty("--pinned-height", `${o15.clientHeight}px`), o15.style.setProperty("--pinned-top", `${r11}px`), o15.style.setProperty("--pinned-left", `${n9}px`), 0 === e6) {
              E3 = r11;
              const i9 = t8.querySelector("ion-header");
              i9 && (E3 -= i9.clientHeight);
            }
          })), C2.forEach(((t9) => {
            o14?.style.setProperty("padding-bottom", `${i8}px`), t9.classList.add("modal-footer-moving"), t9.style.setProperty("position", "absolute"), t9.style.setProperty("width", "var(--pinned-width)"), t9.style.setProperty("height", "var(--pinned-height)"), t9.style.setProperty("top", "var(--pinned-top)"), t9.style.setProperty("left", "var(--pinned-left)"), document.body.appendChild(t9);
          }));
        }
      };
      P3 && I2 && (P3.keyframes([...u5.WRAPPER_KEYFRAMES]), I2.keyframes([...u5.BACKDROP_KEYFRAMES]), N2?.keyframes([...u5.CONTENT_KEYFRAMES]), s6.progressStart(true, 1 - A3), A3 > a7 && false !== t8.focusTrap && false !== t8.showBackdrop ? R3() : j3()), x2 && A3 !== T2 && n8 && (x2.scrollY = false);
      const L2 = (i7) => {
        const { breakpoint: o14, canDismiss: e6, breakpointOffset: d8, animated: h6 } = i7, l7 = e6 && 0 === o14, m6 = l7 ? A3 : o14, f6 = 0 !== m6;
        return A3 = 0, P3 && I2 && (P3.keyframes([{ offset: 0, transform: `translateY(${100 * d8}%)` }, { offset: 1, transform: `translateY(${100 * (1 - m6)}%)` }]), I2.keyframes([{ offset: 0, opacity: `calc(var(--backdrop-opacity) * ${J3(1 - d8, a7)})` }, { offset: 1, opacity: `calc(var(--backdrop-opacity) * ${J3(m6, a7)})` }]), N2 && N2.keyframes([{ offset: 0, maxHeight: 100 * (1 - d8) + "%" }, { offset: 1, maxHeight: 100 * m6 + "%" }]), s6.progressStep(0)), H3.enable(false), l7 ? ot(t8, s6) : f6 || p6(), !x2 || m6 !== r10[r10.length - 1] && n8 || (x2.scrollY = v4), n8 || 0 !== m6 || $2("stationary"), new Promise(((i8) => {
          s6.onFinish((() => {
            f6 ? (n8 || $2("stationary"), P3 && I2 ? f((() => {
              P3.keyframes([...u5.WRAPPER_KEYFRAMES]), I2.keyframes([...u5.BACKDROP_KEYFRAMES]), N2?.keyframes([...u5.CONTENT_KEYFRAMES]), s6.progressStart(true, 1 - m6), A3 = m6, c9(A3), A3 > a7 && false !== t8.focusTrap && false !== t8.showBackdrop ? R3() : j3(), H3.enable(true), i8();
            })) : (H3.enable(true), i8())) : i8();
          }), { oneTimeCallback: true }).progressEnd(1, 0, h6 ? 500 : 0);
        }));
      }, z3 = (t9) => {
        const i7 = o13.getBoundingClientRect().top + t9, e6 = F3(i7);
        return r10.reduce(((t10, i8) => Math.abs(i8 - e6) < Math.abs(t10 - e6) ? i8 : t10));
      }, F3 = (t9) => {
        const i7 = r10[r10.length - 1], o14 = W4(r10[0]), e6 = W4(i7), a8 = Math.round((o14 - t9) / (o14 - e6) * 1e3) / 1e3;
        return Math.max(0, Math.min(1, a8));
      }, W4 = (i7) => {
        const o14 = t8.getBoundingClientRect();
        return window.innerHeight - o14.height * i7;
      }, H3 = n3({ el: o13, gestureName: "modalSheet", gesturePriority: 40, direction: "y", threshold: 10, canStart: (t9) => {
        const i7 = l2(t9.event.target);
        return A3 = d7(), !(i7 && (!n8 || 1 === A3)) || it(i7);
      }, onStart: (i7) => {
        if (window.getSelection()?.removeAllRanges(), D2 = void 0 !== t8.canDismiss && true !== t8.canDismiss && 0 === B3, !n8) {
          const t9 = l2(i7.event.target);
          S3 = t9 && t2(t9) ? m(t9).querySelector(".inner-scroll") : t9;
        }
        n8 || $2("moving"), i7.deltaY > 0 && x2 && (x2.scrollY = false), f((() => {
          t8.focus();
        })), s6.progressStart(true, 1 - A3), m5();
      }, onMove: (t9) => {
        if (n8 || null === E3 || null === O3 || (t9.currentY >= E3 && "moving" === O3 ? $2("stationary") : t9.currentY < E3 && "stationary" === O3 && $2("moving")), !n8 && t9.deltaY <= 0 && S3) return;
        t9.deltaY > 0 && x2 && (x2.scrollY = false);
        const i7 = r10.length > 1 ? 1 - r10[1] : void 0, o14 = 1 - A3 + t9.deltaY / w3, e6 = void 0 !== i7 && o14 >= i7 && D2, a8 = e6 ? 0.95 : 0.9999, d8 = e6 && void 0 !== i7 ? i7 + et((o14 - i7) / (a8 - i7)) : o14;
        Y4 = h(1e-4, d8, a8), s6.progressStep(Y4);
        const h6 = z3(t9.deltaY), p7 = { currentY: t9.currentY, deltaY: t9.deltaY, velocityY: t9.velocityY, progress: F3(t9.currentY), snapBreakpoint: h6 };
        f5(p7);
      }, onEnd: (i7) => {
        const o14 = z3(i7.deltaY), e6 = D2 && 0 === o14 ? "function" == typeof t8.canDismiss : 0 === o14, a8 = { currentY: i7.currentY, deltaY: i7.deltaY, velocityY: i7.velocityY, progress: F3(i7.currentY), snapBreakpoint: o14, isDismissing: e6 };
        if (!n8 && i7.deltaY <= 0 && S3 && S3.scrollTop > 0) return $2("stationary"), void b5(__spreadProps(__spreadValues({}, a8), { isDismissing: false }));
        L2({ breakpoint: o14, breakpointOffset: Y4, canDismiss: D2, animated: true }), b5(a8);
      } });
      return { gesture: H3, moveSheetToBreakpoint: L2, resetContentScroll: () => {
        x2 && (x2.scrollY = v4);
      } };
    })(this.el, this.backdropEl, t7, i5, o12, a6, this.sortedBreakpoints, this.expandToScroll, (() => this.currentBreakpoint ?? 0), (() => this.sheetOnDismiss()), ((t8) => {
      this.currentBreakpoint !== t8 && (this.currentBreakpoint = t8, this.ionBreakpointDidChange.emit({ breakpoint: t8 }));
    }), (() => this.onDragStart()), ((t8) => this.onDragMove(t8)), ((t8) => this.onDragEnd(t8)));
    this.gesture = r9, this.moveSheetToBreakpoint = n7, this.resetSheetContentScroll = d6, this.gesture.enable(true), (false === this.showBackdrop || false === this.focusTrap || o12 > 0) && this.setupChildRoutePassthrough();
  }
  setupChildRoutePassthrough() {
    this.cachedPageParent = this.getOriginalPageParent();
    const t7 = this.cachedPageParent;
    if (!t7 || "ION-APP" === t7.tagName) return;
    if (Array.from(t7.children).some(((t8) => !(t8 === this.el || t8 instanceof A && "none" === window.getComputedStyle(t8).display || "TEMPLATE" === t8.tagName || "SLOT" === t8.tagName || t8.nodeType === Node.TEXT_NODE && !t8.textContent?.trim())))) return;
    t7.classList.add("ion-page-overlay-passthrough");
    const o12 = t7.parentElement;
    "ION-ROUTER-OUTLET" === o12?.tagName && "ION-APP" !== o12.parentElement?.tagName && (o12.style.setProperty("pointer-events", "none"), o12.setAttribute("data-overlay-passthrough", "true"));
  }
  getOriginalPageParent() {
    if (!this.cachedOriginalParent) return null;
    let t7 = this.cachedOriginalParent;
    for (; t7 && !t7.classList.contains("ion-page"); ) t7 = t7.parentElement;
    return t7;
  }
  cleanupChildRoutePassthrough() {
    const t7 = this.cachedPageParent;
    if (!t7) return;
    t7.classList.remove("ion-page-overlay-passthrough");
    const i5 = t7.parentElement;
    i5?.hasAttribute("data-overlay-passthrough") && (i5.style.removeProperty("pointer-events"), i5.removeAttribute("data-overlay-passthrough")), this.cachedPageParent = void 0;
  }
  sheetOnDismiss() {
    this.gestureAnimationDismissing = true, this.animation.onFinish((async () => {
      this.currentBreakpoint = 0, this.ionBreakpointDidChange.emit({ breakpoint: this.currentBreakpoint }), await this.dismiss(void 0, on), this.gestureAnimationDismissing = false;
    }));
  }
  cardOnDismiss() {
    this.gestureAnimationDismissing = true, tt(this.statusBarStyle), this.animation.onFinish((async () => {
      await this.dismiss(void 0, on), this.gestureAnimationDismissing = false;
    }));
  }
  async dismiss(t7, i5) {
    if (this.gestureAnimationDismissing && i5 !== on) return false;
    clearTimeout(this.resizeTimeout), this.resizeTimeout = void 0;
    const o12 = await this.lockController.lock();
    if (await this.dismissNestedModals(), "handler" !== i5 && !await this.checkCanDismiss(t7, i5)) return o12(), false;
    const { presentingElement: e4 } = this;
    void 0 !== e4 && "ios" === v2(this) && tt(this.statusBarStyle), "undefined" != typeof window && this.keyboardOpenCallback && (window.removeEventListener(o5, this.keyboardOpenCallback), this.keyboardOpenCallback = void 0);
    const s6 = await _(this, t7, i5, "modalLeave", pt, ct, { presentingEl: e4, currentBreakpoint: this.currentBreakpoint ?? this.initialBreakpoint, backdropBreakpoint: this.backdropBreakpoint, expandToScroll: this.expandToScroll });
    if (s6) {
      const { delegate: t8 } = this.getDelegate();
      await o9(t8, this.usersElement), J((() => this.el.classList.remove("show-modal"))), this.animation && this.animation.destroy(), this.gesture && this.gesture.destroy(), this.resetSheetContentScroll?.(), this.resetSheetContentScroll = void 0, this.cleanupViewTransitionListener(), this.cleanupParentRemovalObserver(), this.cleanupSafeAreaOverrides(), this.cleanupChildRoutePassthrough();
    }
    return this.currentBreakpoint = void 0, this.animation = void 0, o12(), s6;
  }
  onDidDismiss() {
    return H(this.el, "ionModalDidDismiss");
  }
  onWillDismiss() {
    return H(this.el, "ionModalWillDismiss");
  }
  async setCurrentBreakpoint(t7) {
    if (!this.isSheetModal) return void a("[ion-modal] - setCurrentBreakpoint is only supported on sheet modals.");
    if (!this.breakpoints.includes(t7)) return void a(`[ion-modal] - Attempted to set invalid breakpoint value ${t7}. Please double check that the breakpoint value is part of your defined breakpoints.`);
    const { currentBreakpoint: i5, moveSheetToBreakpoint: o12, canDismiss: a6, breakpoints: s6, animated: r9 } = this;
    i5 !== t7 && o12 && (this.sheetTransition = o12({ breakpoint: t7, breakpointOffset: 1 - i5, canDismiss: void 0 !== a6 && true !== a6 && 0 === s6[0], animated: r9 }), await this.sheetTransition, this.sheetTransition = void 0);
  }
  async getCurrentBreakpoint() {
    return this.currentBreakpoint;
  }
  async moveToNextBreakpoint() {
    const { breakpoints: t7, currentBreakpoint: i5 } = this;
    if (!t7 || null == i5) return false;
    const o12 = t7.filter(((t8) => 0 !== t8)), e4 = o12.indexOf(i5), a6 = o12[(e4 + 1) % o12.length];
    return await this.setCurrentBreakpoint(a6), true;
  }
  initViewTransitionListener() {
    "ios" !== v2(this) || !this.presentingElement || this.enterAnimation || this.leaveAnimation || (this.currentViewIsPortrait = window.innerWidth < 768);
  }
  handleViewTransition() {
    if (!this.presented) return;
    const t7 = window.innerWidth < 768;
    if (this.currentViewIsPortrait === t7) return;
    this.viewTransitionAnimation && (this.viewTransitionAnimation.destroy(), this.viewTransitionAnimation = void 0);
    const { presentingElement: i5 } = this;
    if (!i5) return;
    let o12;
    o12 = this.currentViewIsPortrait && !t7 ? ((t8, i6, o13 = 300) => {
      const { presentingEl: e4 } = i6;
      if (!e4) return r("portrait-to-landscape-transition");
      const a6 = "ION-MODAL" === e4.tagName && void 0 !== e4.presentingElement, s6 = m(e4), r9 = document.body, n7 = r("portrait-to-landscape-transition").addElement(t8).easing("cubic-bezier(0.32,0.72,0,1)").duration(o13), d6 = r().beforeStyles({ transform: "translateY(0)", "transform-origin": "top center", overflow: "hidden" });
      if (a6) {
        const t9 = "translateY(-10px) scale(0.915)", i7 = "translateY(0px) scale(1)";
        d6.addElement(e4).afterStyles({ transform: i7 }).fromTo("transform", t9, i7).fromTo("filter", "contrast(0.85)", "contrast(1)");
        const o14 = r().addElement(s6.querySelector(".modal-shadow")).afterStyles({ transform: i7, opacity: "0" }).fromTo("transform", t9, i7);
        n7.addAnimation([d6, o14]);
      } else {
        const i7 = m(t8), o14 = r().addElement(i7.querySelectorAll(".modal-wrapper, .modal-shadow")).fromTo("opacity", "1", "1"), a7 = r().addElement(i7.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", "var(--backdrop-opacity)"), s7 = `translateY(${CSS.supports("width", "max(0px, 1px)") ? "max(30px, var(--ion-safe-area-top))" : "30px"}) scale(0.915)`;
        d6.addElement(e4).afterStyles({ transform: "translateY(0px) scale(1)", "border-radius": "0px" }).beforeAddWrite((() => r9.style.setProperty("background-color", ""))).fromTo("transform", s7, "translateY(0px) scale(1)").fromTo("filter", "contrast(0.85)", "contrast(1)").fromTo("border-radius", "10px 10px 0 0", "0px"), n7.addAnimation([d6, o14, a7]);
      }
      return n7;
    })(this.el, { presentingEl: i5 }) : ((t8, i6, o13 = 300) => {
      const { presentingEl: e4 } = i6;
      if (!e4) return r("landscape-to-portrait-transition");
      const a6 = "ION-MODAL" === e4.tagName && void 0 !== e4.presentingElement, s6 = m(e4), r9 = document.body, n7 = r("landscape-to-portrait-transition").addElement(t8).easing("cubic-bezier(0.32,0.72,0,1)").duration(o13), d6 = r().beforeStyles({ transform: "translateY(0)", "transform-origin": "top center", overflow: "hidden" });
      if (a6) {
        const t9 = "translateY(-10px) scale(0.915)", i7 = "translateY(0) scale(1)";
        d6.addElement(e4).afterStyles({ transform: i7 }).fromTo("transform", t9, i7);
        const o14 = r().addElement(s6.querySelector(".modal-shadow")).afterStyles({ transform: i7, opacity: "0" }).fromTo("transform", t9, i7);
        n7.addAnimation([d6, o14]);
      } else {
        const i7 = m(t8), o14 = r().addElement(i7.querySelectorAll(".modal-wrapper, .modal-shadow")).fromTo("opacity", "1", "1"), a7 = r().addElement(i7.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", "var(--backdrop-opacity)"), s7 = `translateY(${CSS.supports("width", "max(0px, 1px)") ? "max(30px, var(--ion-safe-area-top))" : "30px"}) scale(0.915)`;
        d6.addElement(e4).afterStyles({ transform: s7 }).beforeAddWrite((() => r9.style.setProperty("background-color", "black"))).keyframes([{ offset: 0, transform: "translateY(0px) scale(1)", filter: "contrast(1)", borderRadius: "0px" }, { offset: 0.2, transform: "translateY(0px) scale(1)", filter: "contrast(1)", borderRadius: "10px 10px 0 0" }, { offset: 1, transform: s7, filter: "contrast(0.85)", borderRadius: "10px 10px 0 0" }]), n7.addAnimation([d6, o14, a7]);
      }
      return n7;
    })(this.el, { presentingEl: i5 }), this.currentViewIsPortrait = t7, this.viewTransitionAnimation = o12, o12.play().then((() => {
      this.viewTransitionAnimation = void 0, f((() => this.updateSafeAreaOverrides())), this.reinitSwipeToClose();
    }));
  }
  cleanupViewTransitionListener() {
    this.resizeTimeout && (clearTimeout(this.resizeTimeout), this.resizeTimeout = void 0), this.viewTransitionAnimation && (this.viewTransitionAnimation.destroy(), this.viewTransitionAnimation = void 0);
  }
  reinitSwipeToClose() {
    "ios" === v2(this) && this.presentingElement && (this.gesture && (this.gesture.destroy(), this.gesture = void 0), this.animation && (this.animation.progressEnd(0, 0, 0), this.animation.destroy(), this.animation = void 0), f((() => {
      this.ensureCorrectModalPosition(), this.initSwipeToClose();
    })));
  }
  ensureCorrectModalPosition() {
    const { el: t7, presentingElement: i5 } = this, o12 = m(t7).querySelector(".modal-wrapper");
    if (o12 && (o12.style.transform = "translateY(0vh)", o12.style.opacity = "1"), "ION-MODAL" === i5?.tagName) if (window.innerWidth < 768) {
      const t8 = CSS.supports("width", "max(0px, 1px)") ? "max(30px, var(--ion-safe-area-top))" : "30px";
      i5.style.transform = `translateY(${t8}) scale(0.915)`;
    } else i5.style.transform = "translateY(0px) scale(1)";
  }
  async dismissNestedModals() {
    const t7 = document.querySelectorAll(`ion-modal[data-parent-ion-modal="${this.el.id}"]`);
    t7?.forEach((async (t8) => {
      await t8.dismiss(void 0, "parent-dismissed");
    }));
  }
  initParentRemovalObserver() {
    "undefined" != typeof MutationObserver && "undefined" != typeof window && this.cachedOriginalParent && this.cachedOriginalParent.nodeType !== Node.DOCUMENT_NODE && this.cachedOriginalParent.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && (this.hasController || this.cachedOriginalParent === document.body || "ION-APP" === this.cachedOriginalParent.tagName || (this.cleanupParentRemovalObserver(), this.parentRemovalObserver = new MutationObserver(((t7) => {
      t7.forEach(((t8) => {
        "childList" === t8.type && t8.removedNodes.length > 0 && (Array.from(t8.removedNodes).some(((t9) => {
          const i5 = t9 === this.cachedOriginalParent, o12 = !!this.cachedOriginalParent && t9.contains?.(this.cachedOriginalParent);
          return i5 || o12;
        })) || this.cachedOriginalParent && !this.cachedOriginalParent.isConnected) && (this.dismiss(void 0, "parent-removed"), this.cachedOriginalParent = void 0);
      }));
    })), this.parentRemovalObserver.observe(document.body, { childList: true, subtree: true })));
  }
  cleanupParentRemovalObserver() {
    this.parentRemovalObserver?.disconnect(), this.parentRemovalObserver = void 0;
  }
  onDragStart() {
    this.ionDragStart.emit();
  }
  onDragMove(t7) {
    this.ionDragMove.emit(t7);
  }
  onDragEnd(t7) {
    this.ionDragEnd.emit(t7);
  }
  getSafeAreaContext() {
    return { isSheetModal: this.isSheetModal, isCardModal: void 0 !== this.presentingElement && "ios" === v2(this), presentingElement: this.presentingElement, breakpoints: this.breakpoints, currentBreakpoint: this.currentBreakpoint };
  }
  watchHeightForContent() {
    var t7;
    this.isSheetModal || (this.unsubscribeHeightChange?.(), this.unsubscribeHeightChange = (t7 = () => {
      this.el.querySelectorAll("ion-content").forEach(((t8) => t8.recalculateDimensions()));
    }, p(this.el, "--height", (() => t7()))));
  }
  setInitialSafeAreaOverrides() {
    const t7 = __spreadProps(__spreadValues({}, this.getSafeAreaContext()), { coveredAxes: ut(this.el) }), i5 = ((t8) => {
      const { isSheetModal: i6, isCardModal: o13 } = t8;
      if (i6) return { top: "0px", bottom: "inherit", left: "0px", right: "0px" };
      if (o13) return { top: "inherit", bottom: "inherit", left: "0px", right: "0px" };
      const { vertical: e4, horizontal: a6 } = t8.coveredAxes ?? { vertical: true, horizontal: true };
      return { top: e4 ? "inherit" : "0px", bottom: e4 ? "inherit" : "0px", left: a6 ? "inherit" : "0px", right: a6 ? "inherit" : "0px" };
    })(t7);
    var o12;
    vt(this.el, i5), this.watchHeightForContent(), t7.isSheetModal && (this.updateSheetOffsetTop(), this.unsubscribeRootSafeAreaTop?.(), this.unsubscribeRootSafeAreaTop = (o12 = (t8) => this.updateSheetOffsetTop(t8), p(d2?.document?.body, "--ion-safe-area-top", o12, bt())));
  }
  updateSheetOffsetTop(t7) {
    const i5 = t7 ?? bt();
    this.el.style.setProperty("--ion-modal-offset-top", `${i5}px`);
  }
  updateSafeAreaOverrides() {
    const { wrapperEl: t7, el: i5 } = this, o12 = this.getSafeAreaContext();
    if (o12.isSheetModal) return;
    if (o12.isCardModal) return;
    if (!t7) return;
    const e4 = ((t8) => {
      const i6 = t8.getBoundingClientRect();
      return { top: i6.top <= 5 ? "inherit" : "0px", bottom: i6.bottom >= (d2?.innerHeight ?? 0) - 5 ? "inherit" : "0px", left: i6.left <= 5 ? "inherit" : "0px", right: i6.right >= (d2?.innerWidth ?? 0) - 5 ? "inherit" : "0px" };
    })(t7);
    vt(i5, e4);
  }
  applyFullscreenSafeArea() {
    const t7 = this.getSafeAreaContext();
    if (t7.isSheetModal || t7.isCardModal) return;
    const { contentEl: i5, hasFooter: o12 } = this.findContentAndFooter();
    this.applyFullscreenSafeAreaTo(i5, o12);
  }
  applyFullscreenSafeAreaTo(t7, i5) {
    t7 && !i5 && t7.style.setProperty("--internal-content-safe-area-padding-bottom", "var(--ion-safe-area-bottom, 0px)");
  }
  clearContentSafeAreaPadding(t7) {
    t7 && t7.style.removeProperty("--internal-content-safe-area-padding-bottom");
  }
  findContentAndFooter() {
    let t7 = null, i5 = false;
    for (const o12 of Array.from(this.el.children)) {
      "ION-CONTENT" === o12.tagName && (t7 = o12), "ION-FOOTER" === o12.tagName && (i5 = true);
      for (const e4 of Array.from(o12.children)) "ION-CONTENT" !== e4.tagName || t7 || (t7 = e4), "ION-FOOTER" === e4.tagName && (i5 = true);
    }
    return { contentEl: t7, hasFooter: i5 };
  }
  cleanupSafeAreaOverrides() {
    var t7;
    (t7 = this.el).style.removeProperty("--ion-safe-area-top"), t7.style.removeProperty("--ion-safe-area-bottom"), t7.style.removeProperty("--ion-safe-area-left"), t7.style.removeProperty("--ion-safe-area-right"), this.unsubscribeRootSafeAreaTop?.(), this.unsubscribeRootSafeAreaTop = void 0, this.unsubscribeHeightChange?.(), this.unsubscribeHeightChange = void 0, this.el.style.removeProperty("--ion-modal-offset-top");
    const { contentEl: i5 } = this.findContentAndFooter();
    this.clearContentSafeAreaPadding(i5);
  }
  restoreSafeAreaOverrides() {
    this.setInitialSafeAreaOverrides(), this.applyFullscreenSafeArea(), f((() => {
      if (!this.presented || !this.el.isConnected || this.isPresenting) return;
      const { width: t7, height: i5 } = this.el.getBoundingClientRect();
      0 === t7 && 0 === i5 || this.updateSafeAreaOverrides();
    }));
  }
  render() {
    const { handle: t7, isSheetModal: i5, presentingElement: o12, htmlAttributes: e4, handleBehavior: a6, inheritedAttributes: s6, focusTrap: d6, expandToScroll: h6 } = this, p6 = false !== t7 && i5, l7 = v2(this), c9 = void 0 !== o12 && "ios" === l7, m5 = "cycle" === a6;
    return Rt(Lt, __spreadProps(__spreadValues({ key: "17a95bd7722bac2344bea041aff97db17f55c0cf", "no-router": true, tabIndex: m5 && i5 && p6 ? 0 : -1 }, e4), { style: { zIndex: `${2e4 + this.overlayIndex}` }, class: __spreadValues({ [l7]: true, "modal-default": !c9 && !i5, "modal-card": c9, "modal-sheet": i5, "modal-no-expand-scroll": i5 && !h6, "overlay-hidden": true, [dn]: false === d6 }, r5(this.cssClass)), onIonBackdropTap: this.onBackdropTap, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle, onFocus: this.onModalFocus }), Rt("ion-backdrop", { key: "9dab1ef4771c0d847ba2be8672afbaa2748517f3", ref: (t8) => this.backdropEl = t8, visible: this.showBackdrop, tappable: this.backdropDismiss, part: "backdrop" }), "ios" === l7 && Rt("div", { key: "64af7ed1c5f552b61fc4b9387b926acc76c8a99a", class: "modal-shadow" }), Rt("div", __spreadProps(__spreadValues({ key: "7e76d77d5b2e8f0467bb793facf5aa86f8d01bbe", role: "dialog" }, s6), { "aria-modal": "true", tabIndex: -1, class: "modal-wrapper ion-overlay-wrapper", part: "content", ref: (t8) => this.wrapperEl = t8 }), p6 && Rt("button", { key: "5efc0bb0a59adcc594ac48da9fd90e57908a7ffb", class: "modal-handle", tabIndex: m5 ? 0 : -1, "aria-label": "Activate to adjust the size of the dialog overlaying the screen", onClick: m5 ? this.onHandleClick : void 0, part: "handle", ref: (t8) => this.dragHandleEl = t8 }), Rt("slot", { key: "6175fcd0b39c086b4e9eb9e96c4d631c2a86774b", onSlotchange: this.onSlotChange })));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { isOpen: [{ onIsOpenChange: 0 }], trigger: [{ triggerChanged: 0 }], breakpoints: [{ breakpointsChanged: 0 }] };
  }
  static get style() {
    return { ios: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:100%;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;outline:none}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-modal-offset-top, 0px) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}', md: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:100%;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;outline:none}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-modal-offset-top, 0px) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}' };
  }
}, [289, "ion-modal", { hasController: [4, "has-controller"], overlayIndex: [2, "overlay-index"], delegate: [16], keyboardClose: [4, "keyboard-close"], enterAnimation: [16], leaveAnimation: [16], breakpoints: [16], expandToScroll: [4, "expand-to-scroll"], initialBreakpoint: [2, "initial-breakpoint"], backdropBreakpoint: [2, "backdrop-breakpoint"], handle: [4], handleBehavior: [1, "handle-behavior"], component: [1], componentProps: [16], cssClass: [1, "css-class"], backdropDismiss: [4, "backdrop-dismiss"], showBackdrop: [4, "show-backdrop"], animated: [4], presentingElement: [16], htmlAttributes: [16], isOpen: [4, "is-open"], trigger: [1], keepContentsMounted: [4, "keep-contents-mounted"], focusTrap: [4, "focus-trap"], canDismiss: [4, "can-dismiss"], isSheetModal: [32], presented: [32], present: [64], dismiss: [64], onDidDismiss: [64], onWillDismiss: [64], setCurrentBreakpoint: [64], getCurrentBreakpoint: [64] }, [[9, "resize", "onWindowResize"]], { isOpen: [{ onIsOpenChange: 0 }], trigger: [{ triggerChanged: 0 }], breakpoints: [{ breakpointsChanged: 0 }] }]);
var gt = { ionModalDidPresent: "ionViewDidEnter", ionModalWillPresent: "ionViewWillEnter", ionModalWillDismiss: "ionViewWillLeave", ionModalDidDismiss: "ionViewDidLeave" };
function kt() {
  "undefined" != typeof customElements && ["ion-modal", "ion-backdrop"].forEach(((t7) => {
    switch (t7) {
      case "ion-modal":
        customElements.get(oe(t7)) || customElements.define(oe(t7), wt);
        break;
      case "ion-backdrop":
        customElements.get(oe(t7)) || e3();
    }
  }));
}

// node_modules/@ionic/core/components/ion-modal.js
var r7 = kt;

// node_modules/@ionic/angular/dist/standalone/providers/modal-controller.js
var ModalController = class _ModalController extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(B);
    r7();
  }
  create(opts) {
    const _a = opts, {
      injector: customInjector
    } = _a, restOpts = __objRest(_a, [
      "injector"
    ]);
    return super.create(__spreadProps(__spreadValues({}, restOpts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal", customInjector)
    }));
  }
  /** @nocollapse */
  static ɵfac = function ModalController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalController)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _ModalController,
    factory: _ModalController.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalController, [{
    type: Injectable
  }], () => [], null);
})();

// node_modules/@ionic/core/components/p-BQ1TznDx.js
var W3 = null;
var O2 = false;
var E2 = (t7) => {
  if (null !== W3) return W3;
  if (null === t7.body) return { top: 0, bottom: 0, left: 0, right: 0 };
  const e4 = t7.createElement("div");
  e4.style.cssText = "position:fixed;visibility:hidden;pointer-events:none;top:0;left:0;padding-top:var(--ion-safe-area-top,0px);padding-bottom:var(--ion-safe-area-bottom,0px);padding-left:var(--ion-safe-area-left,0px);padding-right:var(--ion-safe-area-right,0px);", t7.body.appendChild(e4);
  const o12 = getComputedStyle(e4), r9 = { top: parseFloat(o12.paddingTop) || 0, bottom: parseFloat(o12.paddingBottom) || 0, left: parseFloat(o12.paddingLeft) || 0, right: parseFloat(o12.paddingRight) || 0 };
  return e4.remove(), W3 = r9, O2 || (O2 = true, f((() => {
    W3 = null, O2 = false;
  }))), r9;
};
var z2 = (t7) => {
  if (!t7) return 1;
  const e4 = t7.currentCSSZoom;
  if ("number" == typeof e4 && e4 > 0) return e4;
  const { width: o12 } = t7.getBoundingClientRect(), { offsetWidth: r9 } = t7;
  if (r9 > 0 && o12 > 0) {
    const t8 = o12 / r9;
    return Math.abs(t8 - 1) < 0.01 ? 1 : t8;
  }
  return 1;
};
var S2 = (t7, e4, o12, r9 = 1) => {
  const i5 = e4.getBoundingClientRect(), s6 = i5.height / r9;
  let n7 = i5.width / r9;
  return "cover" === t7 && o12 && (n7 = o12.getBoundingClientRect().width / r9), { contentWidth: n7, contentHeight: s6 };
};
var X2 = (t7, e4) => e4 && "ION-ITEM" === e4.tagName ? t7.findIndex(((t8) => t8 === e4)) : -1;
var M5 = (t7) => {
  const e4 = m(t7).querySelector("button");
  e4 && f((() => e4.focus()));
};
var j2 = (t7, e4, o12, r9, i5, s6, n7, a6, p6, c9, d6, h6 = 1) => {
  let l7 = { top: 0, left: 0, width: 0, height: 0 };
  if ("event" === s6) {
    if (!d6) return p6;
    l7 = { top: d6.clientY / h6, left: d6.clientX / h6, width: 1, height: 1 };
  } else {
    const t8 = d6, e5 = c9 || t8?.detail?.ionShadowTarget || t8?.target;
    if (!e5) return p6;
    const o13 = e5.getBoundingClientRect();
    l7 = { top: o13.top / h6, left: o13.left / h6, width: o13.width / h6, height: o13.height / h6 };
  }
  const v4 = R2(n7, l7, e4, o12, r9, i5, t7), f5 = V2(a6, n7, l7, e4, o12), g3 = v4.top + f5.top, m5 = v4.left + f5.left, { arrowTop: x2, arrowLeft: b5 } = H2(n7, r9, i5, g3, m5, e4, o12, t7), { originX: u5, originY: w3 } = B2(n7, a6, t7);
  return { top: g3, left: m5, referenceCoordinates: l7, arrowTop: x2, arrowLeft: b5, originX: u5, originY: w3 };
};
var B2 = (t7, e4, o12) => {
  switch (t7) {
    case "top":
      return { originX: Y3(e4), originY: "bottom" };
    case "bottom":
      return { originX: Y3(e4), originY: "top" };
    case "left":
      return { originX: "right", originY: F2(e4) };
    case "right":
      return { originX: "left", originY: F2(e4) };
    case "start":
      return { originX: o12 ? "left" : "right", originY: F2(e4) };
    case "end":
      return { originX: o12 ? "right" : "left", originY: F2(e4) };
  }
};
var Y3 = (t7) => {
  switch (t7) {
    case "start":
      return "left";
    case "center":
      return "center";
    case "end":
      return "right";
  }
};
var F2 = (t7) => {
  switch (t7) {
    case "start":
      return "top";
    case "center":
      return "center";
    case "end":
      return "bottom";
  }
};
var H2 = (t7, e4, o12, r9, i5, s6, n7, a6) => {
  const p6 = { arrowTop: r9 + n7 / 2 - e4 / 2, arrowLeft: i5 + s6 - e4 / 2 }, c9 = { arrowTop: r9 + n7 / 2 - e4 / 2, arrowLeft: i5 - 1.5 * e4 };
  switch (t7) {
    case "top":
      return { arrowTop: r9 + n7, arrowLeft: i5 + s6 / 2 - e4 / 2 };
    case "bottom":
      return { arrowTop: r9 - o12, arrowLeft: i5 + s6 / 2 - e4 / 2 };
    case "left":
      return p6;
    case "right":
      return c9;
    case "start":
      return a6 ? c9 : p6;
    case "end":
      return a6 ? p6 : c9;
    default:
      return { arrowTop: 0, arrowLeft: 0 };
  }
};
var R2 = (t7, e4, o12, r9, i5, s6, n7) => {
  const a6 = { top: e4.top, left: e4.left - o12 - i5 }, p6 = { top: e4.top, left: e4.left + e4.width + i5 };
  switch (t7) {
    case "top":
      return { top: e4.top - r9 - s6, left: e4.left };
    case "right":
      return p6;
    case "bottom":
      return { top: e4.top + e4.height + s6, left: e4.left };
    case "left":
      return a6;
    case "start":
      return n7 ? p6 : a6;
    case "end":
      return n7 ? a6 : p6;
  }
};
var V2 = (t7, e4, o12, r9, i5) => {
  switch (t7) {
    case "center":
      return Z2(e4, o12, r9, i5);
    case "end":
      return K2(e4, o12, r9, i5);
    default:
      return { top: 0, left: 0 };
  }
};
var K2 = (t7, e4, o12, r9) => {
  switch (t7) {
    case "start":
    case "end":
    case "left":
    case "right":
      return { top: -(r9 - e4.height), left: 0 };
    default:
      return { top: 0, left: -(o12 - e4.width) };
  }
};
var Z2 = (t7, e4, o12, r9) => {
  switch (t7) {
    case "start":
    case "end":
    case "left":
    case "right":
      return { top: -(r9 / 2 - e4.height / 2), left: 0 };
    default:
      return { top: 0, left: -(o12 / 2 - e4.width / 2) };
  }
};
var q3 = (t7, e4, o12, r9, i5, s6, n7, a6, p6, c9, d6, h6, l7 = 0, v4 = 0, f5 = 0) => {
  let g3, m5 = l7, x2 = o12, b5 = e4, u5 = c9, w3 = d6, k2 = false, y4 = false, P3 = false, D2 = false;
  const T2 = h6 ? h6.top + h6.height : s6 / 2 - a6 / 2, A3 = h6 ? h6.height : 0;
  let $2 = false;
  if (x2 < r9 + p6.left ? (x2 = r9, k2 = true, u5 = "left") : n7 + r9 + x2 + p6.right > i5 && (y4 = true, x2 = i5 - n7 - r9, u5 = "right"), T2 + A3 + a6 > s6 - p6.bottom && ("top" === t7 || "bottom" === t7)) {
    const t8 = T2 - a6 - A3 - (f5 - 1);
    t8 >= p6.top + r9 ? (b5 = t8, m5 = b5 + a6, w3 = "bottom", $2 = true) : (g3 = r9, D2 = true, b5 >= s6 - p6.bottom - r9 && (b5 = p6.top + r9, P3 = true));
  }
  return { top: b5, left: x2, bottom: g3, originX: u5, originY: w3, checkSafeAreaLeft: k2, checkSafeAreaRight: y4, checkSafeAreaTop: P3, checkSafeAreaBottom: D2, arrowTop: m5, arrowLeft: v4, addPopoverBottomClass: $2, hideArrow: false };
};
var U3 = (t7, e4) => {
  const { event: o12, size: r9, trigger: i5, reference: s6, side: n7, align: a6 } = e4, p6 = t7.ownerDocument, c9 = "rtl" === p6.dir, d6 = m(t7), h6 = d6.querySelector(".popover-content"), l7 = d6.querySelector(".popover-arrow"), v4 = z2(h6), f5 = p6.defaultView.innerWidth / v4, g3 = p6.defaultView.innerHeight / v4, m5 = i5 || o12?.detail?.ionShadowTarget || o12?.target, { contentWidth: x2, contentHeight: b5 } = S2(r9, h6, m5, v4), { arrowWidth: u5, arrowHeight: k2 } = ((t8, e5 = 1) => {
    if (!t8) return { arrowWidth: 0, arrowHeight: 0 };
    const { width: o13, height: r10 } = t8.getBoundingClientRect();
    return { arrowWidth: o13 / e5, arrowHeight: r10 / e5 };
  })(l7, v4), y4 = j2(c9, x2, b5, u5, k2, s6, n7, a6, { top: g3 / 2 - b5 / 2, left: f5 / 2 - x2 / 2, originX: c9 ? "right" : "left", originY: "top" }, i5, o12, v4), P3 = "cover" === r9 ? 0 : 5, D2 = E2(p6), T2 = "cover" === r9 ? { top: 0, bottom: 0, left: 0, right: 0 } : { top: Math.max(D2.top, 25), bottom: Math.max(D2.bottom, 25), left: Math.max(D2.left, 25), right: Math.max(D2.right, 25) }, { originX: A3, originY: $2, top: C2, left: I2, bottom: N2, checkSafeAreaLeft: W4, checkSafeAreaRight: O3, checkSafeAreaTop: X3, checkSafeAreaBottom: M6, arrowTop: B3, arrowLeft: Y4, addPopoverBottomClass: F3 } = q3(n7, y4.top, y4.left, P3, f5, g3, x2, b5, T2, y4.originX, y4.originY, y4.referenceCoordinates, y4.arrowTop, y4.arrowLeft, k2), H3 = r(), R3 = r(), V3 = r();
  return R3.addElement(d6.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({ "pointer-events": "none" }).afterClearStyles(["pointer-events"]), V3.addElement(d6.querySelector(".popover-arrow")).addElement(d6.querySelector(".popover-content")).fromTo("opacity", 0.01, 1), H3.easing("ease").duration(100).beforeAddWrite((() => {
    if ("cover" === r9 && t7.style.setProperty("--width", `${x2}px`), F3 && t7.classList.add("popover-bottom"), void 0 !== N2) {
      let t8 = `${N2}px`;
      M6 && (t8 = `${N2}px + var(--ion-safe-area-bottom, 0px)`), h6.style.setProperty("bottom", `calc(${t8})`);
    }
    let e5 = `${I2}px`;
    W4 && (e5 = `${I2}px + var(--ion-safe-area-left, 0px)`), O3 && (e5 = `${I2}px - var(--ion-safe-area-right, 0px)`);
    let s7 = `${C2}px`;
    if (X3 && (s7 = `${C2}px + var(--ion-safe-area-top, 0px)`), h6.style.setProperty("top", `calc(${s7} + var(--offset-y, 0))`), h6.style.setProperty("left", `calc(${e5} + var(--offset-x, 0))`), h6.style.setProperty("transform-origin", `${$2} ${A3}`), null !== l7) {
      const t8 = /* @__PURE__ */ ((t9, e6 = false, o13, r10) => !(!o13 && !r10 || "top" !== t9 && "bottom" !== t9 && e6))(n7, y4.top !== C2 || y4.left !== I2, o12, i5);
      t8 ? (l7.style.setProperty("top", `calc(${B3}px + var(--offset-y, 0))`), l7.style.setProperty("left", `calc(${Y4}px + var(--offset-x, 0))`)) : l7.style.setProperty("display", "none");
    }
  })).addAnimation([R3, V3]);
};
var J4 = (t7) => {
  const e4 = m(t7), o12 = e4.querySelector(".popover-content"), r9 = e4.querySelector(".popover-arrow"), i5 = r(), s6 = r(), n7 = r();
  return s6.addElement(e4.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), n7.addElement(e4.querySelector(".popover-arrow")).addElement(e4.querySelector(".popover-content")).fromTo("opacity", 0.99, 0), i5.easing("ease").afterAddWrite((() => {
    t7.style.removeProperty("--width"), t7.classList.remove("popover-bottom"), o12.style.removeProperty("top"), o12.style.removeProperty("left"), o12.style.removeProperty("bottom"), o12.style.removeProperty("transform-origin"), r9 && (r9.style.removeProperty("top"), r9.style.removeProperty("left"), r9.style.removeProperty("display"));
  })).duration(300).addAnimation([s6, n7]);
};
var G3 = (t7, e4) => {
  const { event: o12, size: r9, trigger: i5, reference: s6, side: n7, align: a6 } = e4, p6 = t7.ownerDocument, c9 = "rtl" === p6.dir, d6 = m(t7), h6 = d6.querySelector(".popover-content"), l7 = z2(h6), v4 = p6.defaultView.innerWidth / l7, f5 = p6.defaultView.innerHeight / l7, g3 = i5 || o12?.detail?.ionShadowTarget || o12?.target, { contentWidth: m5, contentHeight: x2 } = S2(r9, h6, g3, l7), b5 = j2(c9, m5, x2, 0, 0, s6, n7, a6, { top: f5 / 2 - x2 / 2, left: v4 / 2 - m5 / 2, originX: c9 ? "right" : "left", originY: "top" }, i5, o12, l7), u5 = "cover" === r9 ? 0 : 12, k2 = "cover" === r9 ? { top: 0, bottom: 0, left: 0, right: 0 } : E2(p6), { originX: y4, originY: P3, top: D2, left: T2, bottom: A3, checkSafeAreaLeft: $2, checkSafeAreaRight: C2, checkSafeAreaTop: I2, checkSafeAreaBottom: N2, addPopoverBottomClass: W4 } = q3(n7, b5.top, b5.left, u5, v4, f5, m5, x2, k2, b5.originX, b5.originY, b5.referenceCoordinates);
  let O3 = `${T2}px`;
  $2 && (O3 = `${T2}px + var(--ion-safe-area-left, 0px)`), C2 && (O3 = `${T2}px - var(--ion-safe-area-right, 0px)`);
  let X3 = `${D2}px`;
  I2 && (X3 = `${D2}px + var(--ion-safe-area-top, 0px)`);
  const M6 = r(), B3 = r(), Y4 = r(), F3 = r(), H3 = r();
  return B3.addElement(d6.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({ "pointer-events": "none" }).afterClearStyles(["pointer-events"]), Y4.addElement(d6.querySelector(".popover-wrapper")).duration(150).fromTo("opacity", 0.01, 1), F3.addElement(h6).beforeStyles({ top: `calc(${X3} + var(--offset-y, 0px))`, left: `calc(${O3} + var(--offset-x, 0px))`, "transform-origin": `${P3} ${y4}` }).beforeAddWrite((() => {
    if (void 0 !== A3) {
      let t8 = `${A3}px`;
      N2 && (t8 = `${A3}px + var(--ion-safe-area-bottom, 0px)`), h6.style.setProperty("bottom", `calc(${t8})`);
    }
  })).fromTo("transform", "scale(0.8)", "scale(1)"), H3.addElement(d6.querySelector(".popover-viewport")).fromTo("opacity", 0.01, 1), M6.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite((() => {
    "cover" === r9 && t7.style.setProperty("--width", `${m5}px`), W4 && t7.classList.add("popover-bottom");
  })).addAnimation([B3, Y4, F3, H3]);
};
var Q3 = (t7) => {
  const e4 = m(t7), o12 = e4.querySelector(".popover-content"), r9 = r(), i5 = r(), s6 = r();
  return i5.addElement(e4.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), s6.addElement(e4.querySelector(".popover-wrapper")).fromTo("opacity", 0.99, 0), r9.easing("ease").afterAddWrite((() => {
    t7.style.removeProperty("--width"), t7.classList.remove("popover-bottom"), o12.style.removeProperty("top"), o12.style.removeProperty("left"), o12.style.removeProperty("bottom"), o12.style.removeProperty("transform-origin");
  })).duration(150).addAnimation([i5, s6]);
};
var _3 = Jn(class extends A {
  constructor(t7) {
    super(), false !== t7 && this.__registerHost(), this.__attachShadow(), this.didPresent = Qt(this, "ionPopoverDidPresent", 7), this.willPresent = Qt(this, "ionPopoverWillPresent", 7), this.willDismiss = Qt(this, "ionPopoverWillDismiss", 7), this.didDismiss = Qt(this, "ionPopoverDidDismiss", 7), this.didPresentShorthand = Qt(this, "didPresent", 7), this.willPresentShorthand = Qt(this, "willPresent", 7), this.willDismissShorthand = Qt(this, "willDismiss", 7), this.didDismissShorthand = Qt(this, "didDismiss", 7), this.ionMount = Qt(this, "ionMount", 7), this.parentPopover = null, this.coreDelegate = r6(), this.lockController = t6(), this.inline = false, this.focusDescendantOnPresent = false, this.presented = false, this.hasController = false, this.keyboardClose = true, this.backdropDismiss = true, this.showBackdrop = true, this.translucent = false, this.animated = true, this.triggerAction = "click", this.size = "auto", this.dismissOnSelect = false, this.reference = "trigger", this.side = "bottom", this.arrow = true, this.isOpen = false, this.keyboardEvents = false, this.focusTrap = true, this.keepContentsMounted = false, this.onBackdropTap = () => {
      this.dismiss(void 0, en);
    }, this.onLifecycle = (t8) => {
      const e4 = this.usersElement, o12 = tt2[t8.type];
      if (e4 && o12) {
        const r9 = new CustomEvent(o12, { bubbles: false, cancelable: false, detail: t8.detail });
        e4.dispatchEvent(r9);
      }
    }, this.configureTriggerInteraction = () => {
      const { trigger: t8, triggerAction: e4, el: o12, destroyTriggerInteraction: i5 } = this;
      if (i5 && i5(), void 0 === t8) return;
      const s6 = this.triggerEl = void 0 !== t8 ? document.getElementById(t8) : null;
      s6 ? this.destroyTriggerInteraction = ((t9, e5, o13) => {
        let r9 = [];
        switch (e5) {
          case "hover":
            let t10;
            r9 = [{ eventName: "mouseenter", callback: async (e6) => {
              e6.stopPropagation(), t10 && clearTimeout(t10), t10 = setTimeout((() => {
                f((() => {
                  o13.presentFromTrigger(e6), t10 = void 0;
                }));
              }), 100);
            } }, { eventName: "mouseleave", callback: (e6) => {
              t10 && clearTimeout(t10);
              const r10 = e6.relatedTarget;
              r10 && r10.closest("ion-popover") !== o13 && o13.dismiss(void 0, void 0, false);
            } }, { eventName: "click", callback: (t11) => t11.stopPropagation() }, { eventName: "ionPopoverActivateTrigger", callback: (t11) => o13.presentFromTrigger(t11, true) }];
            break;
          case "context-menu":
            r9 = [{ eventName: "contextmenu", callback: (t11) => {
              t11.preventDefault(), o13.presentFromTrigger(t11);
            } }, { eventName: "click", callback: (t11) => t11.stopPropagation() }, { eventName: "ionPopoverActivateTrigger", callback: (t11) => o13.presentFromTrigger(t11, true) }];
            break;
          default:
            r9 = [{ eventName: "click", callback: (t11) => o13.presentFromTrigger(t11) }, { eventName: "ionPopoverActivateTrigger", callback: (t11) => o13.presentFromTrigger(t11, true) }];
        }
        return r9.forEach((({ eventName: e6, callback: o14 }) => t9.addEventListener(e6, o14))), t9.setAttribute("data-ion-popover-trigger", "true"), () => {
          r9.forEach((({ eventName: e6, callback: o14 }) => t9.removeEventListener(e6, o14))), t9.removeAttribute("data-ion-popover-trigger");
        };
      })(s6, e4, o12) : a(`[ion-popover] - A trigger element with the ID "${t8}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`, this.el);
    }, this.configureKeyboardInteraction = () => {
      const { destroyKeyboardInteraction: t8, el: e4 } = this;
      t8 && t8(), this.destroyKeyboardInteraction = ((t9) => {
        const e5 = async (e6) => {
          const o12 = document.activeElement;
          let r9 = [];
          const i5 = e6.target?.tagName;
          if ("ION-POPOVER" === i5 || "ION-ITEM" === i5) {
            try {
              r9 = Array.from(t9.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"));
            } catch {
            }
            switch (e6.key) {
              case "ArrowLeft":
                await t9.getParentPopover() && t9.dismiss(void 0, void 0, false);
                break;
              case "ArrowDown":
                e6.preventDefault();
                const i6 = ((t10, e7) => t10[X2(t10, e7) + 1])(r9, o12);
                void 0 !== i6 && M5(i6);
                break;
              case "ArrowUp":
                e6.preventDefault();
                const s6 = ((t10, e7) => t10[X2(t10, e7) - 1])(r9, o12);
                void 0 !== s6 && M5(s6);
                break;
              case "Home":
                e6.preventDefault();
                const n7 = r9[0];
                void 0 !== n7 && M5(n7);
                break;
              case "End":
                e6.preventDefault();
                const a6 = r9[r9.length - 1];
                void 0 !== a6 && M5(a6);
                break;
              case "ArrowRight":
              case " ":
              case "Enter":
                if (o12 && o12.hasAttribute("data-ion-popover-trigger")) {
                  const t10 = new CustomEvent("ionPopoverActivateTrigger");
                  o12.dispatchEvent(t10);
                }
            }
          }
        };
        return t9.addEventListener("keydown", e5), () => t9.removeEventListener("keydown", e5);
      })(e4);
    }, this.configureDismissInteraction = () => {
      const { destroyDismissInteraction: t8, parentPopover: e4, triggerAction: o12, triggerEl: r9, el: i5 } = this;
      e4 && r9 && (t8 && t8(), this.destroyDismissInteraction = ((t9, e5, o13, r10) => {
        let i6 = [];
        const s6 = m(r10).querySelector(".popover-content");
        return i6 = "hover" === e5 ? [{ eventName: "mouseenter", callback: (e6) => {
          document.elementFromPoint(e6.clientX, e6.clientY) !== t9 && o13.dismiss(void 0, void 0, false);
        } }] : [{ eventName: "click", callback: (e6) => {
          e6.target.closest("[data-ion-popover-trigger]") !== t9 ? o13.dismiss(void 0, void 0, false) : e6.stopPropagation();
        } }], i6.forEach((({ eventName: t10, callback: e6 }) => s6.addEventListener(t10, e6))), () => {
          i6.forEach((({ eventName: t10, callback: e6 }) => s6.removeEventListener(t10, e6)));
        };
      })(r9, o12, i5, e4));
    };
  }
  onTriggerChange() {
    this.configureTriggerInteraction();
  }
  onIsOpenChange(t7, e4) {
    true === t7 && false === e4 ? this.present() : false === t7 && true === e4 && this.dismiss();
  }
  connectedCallback() {
    const { configureTriggerInteraction: t7, el: e4 } = this;
    A2(e4), t7(), this.presented && (J2(e4), this.recalculateContentOnHeaderReady());
  }
  disconnectedCallback() {
    const { destroyTriggerInteraction: t7 } = this;
    t7 && t7(), this.headerResizeObserver && (this.headerResizeObserver.disconnect(), this.headerResizeObserver = void 0), this.presented && $();
  }
  componentWillLoad() {
    const { el: t7 } = this, e4 = this.htmlAttributes?.id ?? P2(t7);
    this.parentPopover = t7.closest(`ion-popover:not(#${e4})`), void 0 === this.alignment && (this.alignment = "ios" === v2(this) ? "center" : "start");
  }
  componentDidLoad() {
    const { parentPopover: t7, isOpen: e4 } = this;
    true === e4 && f((() => this.present())), t7 && d3(t7, "ionPopoverWillDismiss", (() => {
      this.dismiss(void 0, void 0, false);
    })), this.configureTriggerInteraction();
  }
  async presentFromTrigger(t7, e4 = false) {
    this.focusDescendantOnPresent = e4, await this.present(t7), this.focusDescendantOnPresent = false;
  }
  getDelegate(t7 = false) {
    if (this.workingDelegate && !t7) return { delegate: this.workingDelegate, inline: this.inline };
    const e4 = this.inline = null !== this.el.parentNode && !this.hasController;
    return { inline: e4, delegate: this.workingDelegate = e4 ? this.delegate || this.coreDelegate : this.delegate };
  }
  async present(t7) {
    const e4 = await this.lockController.lock();
    if (this.presented) return void e4();
    const { el: o12 } = this, { inline: r9, delegate: i5 } = this.getDelegate(true);
    this.ionMount.emit(), this.usersElement = await t5(i5, o12, this.component, ["popover-viewport"], this.componentProps, r9), this.recalculateContentOnHeaderReady(), this.keyboardEvents || this.configureKeyboardInteraction(), this.configureDismissInteraction(), o3(o12) ? await W(this.usersElement) : this.keepContentsMounted || await U(), await V(this, "popoverEnter", U3, G3, { event: t7 || this.event, size: this.size, trigger: this.triggerEl, reference: this.reference, side: this.side, align: this.alignment }), this.focusDescendantOnPresent && h5(o12), e4();
  }
  recalculateContentOnHeaderReady() {
    const t7 = this.el.shadowRoot?.querySelector(".popover-content");
    if (!t7) return;
    const e4 = this.usersElement || t7, o12 = e4.querySelector("ion-header"), r9 = e4.querySelectorAll("ion-content");
    o12 && 0 !== r9.length && (this.headerResizeObserver && (this.headerResizeObserver.disconnect(), this.headerResizeObserver = void 0), this.headerResizeObserver = new ResizeObserver((async () => {
      if (o12.offsetHeight > 0) {
        this.headerResizeObserver?.disconnect(), this.headerResizeObserver = void 0;
        for (const t8 of r9) await t8.recalculateDimensions();
      }
    })), this.headerResizeObserver.observe(o12));
  }
  async dismiss(t7, e4, o12 = true) {
    const r9 = await this.lockController.lock(), { destroyKeyboardInteraction: i5, destroyDismissInteraction: s6 } = this;
    o12 && this.parentPopover && this.parentPopover.dismiss(t7, e4, o12);
    const n7 = await _(this, t7, e4, "popoverLeave", J4, Q3, this.event);
    if (n7) {
      i5 && (i5(), this.destroyKeyboardInteraction = void 0), s6 && (s6(), this.destroyDismissInteraction = void 0);
      const { delegate: t8 } = this.getDelegate();
      await o9(t8, this.usersElement);
    }
    return r9(), n7;
  }
  async getParentPopover() {
    return this.parentPopover;
  }
  onDidDismiss() {
    return H(this.el, "ionPopoverDidDismiss");
  }
  onWillDismiss() {
    return H(this.el, "ionPopoverWillDismiss");
  }
  render() {
    const t7 = v2(this), { onLifecycle: e4, parentPopover: o12, dismissOnSelect: r9, side: n7, arrow: a6, htmlAttributes: p6, focusTrap: c9 } = this, d6 = d4("desktop"), h6 = a6 && !o12;
    return Rt(Lt, __spreadProps(__spreadValues({ key: "b5e9c788f58397203976d5f8302dfb89e916efe1", "aria-modal": "true", "no-router": true, tabindex: "-1" }, p6), { style: { zIndex: `${2e4 + this.overlayIndex}` }, class: __spreadProps(__spreadValues({}, r5(this.cssClass)), { [t7]: true, "popover-translucent": this.translucent, "overlay-hidden": true, "popover-desktop": d6, [`popover-side-${n7}`]: true, [dn]: false === c9, "popover-nested": !!o12 }), onIonPopoverDidPresent: e4, onIonPopoverWillPresent: e4, onIonPopoverWillDismiss: e4, onIonPopoverDidDismiss: e4, onIonBackdropTap: this.onBackdropTap }), !o12 && Rt("ion-backdrop", { key: "f3977833c5b2c0087c286ee54363b478d69eb115", tappable: this.backdropDismiss, visible: this.showBackdrop, part: "backdrop" }), Rt("div", { key: "1059893d6fd2932ca8adcdf8d45a5d66f4794727", class: "popover-wrapper ion-overlay-wrapper", onClick: r9 ? () => this.dismiss() : void 0 }, h6 && Rt("div", { key: "24d7988bdd95882ad77fcaa7112aeda55878bee4", class: "popover-arrow", part: "arrow" }), Rt("div", { key: "4d6992e0a9d629f11763045f9199f9a77fa521ab", class: "popover-content", part: "content" }, Rt("slot", { key: "b29747419620a01a6c34e9e846cd529b0b210145" }))));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return { trigger: [{ onTriggerChange: 0 }], triggerAction: [{ onTriggerChange: 0 }], isOpen: [{ onIsOpenChange: 0 }] };
  }
  static get style() {
    return { ios: ':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host(.select-popover-rich-content){--width:clamp(250px, calc(100vw - 40px), 400px)}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-arrow::after{inset-inline-start:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start:dir(rtl)) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end:dir(rtl)) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}', md: ":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host(.select-popover-rich-content){--width:clamp(250px, calc(100vw - 40px), 400px)}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}" };
  }
}, [289, "ion-popover", { hasController: [4, "has-controller"], delegate: [16], overlayIndex: [2, "overlay-index"], enterAnimation: [16], leaveAnimation: [16], component: [1], componentProps: [16], keyboardClose: [4, "keyboard-close"], cssClass: [1, "css-class"], backdropDismiss: [4, "backdrop-dismiss"], event: [8], showBackdrop: [4, "show-backdrop"], translucent: [4], animated: [4], htmlAttributes: [16], triggerAction: [1, "trigger-action"], trigger: [1], size: [1], dismissOnSelect: [4, "dismiss-on-select"], reference: [1], side: [1], alignment: [1025], arrow: [4], isOpen: [4, "is-open"], keyboardEvents: [4, "keyboard-events"], focusTrap: [4, "focus-trap"], keepContentsMounted: [4, "keep-contents-mounted"], presented: [32], presentFromTrigger: [64], present: [64], dismiss: [64], getParentPopover: [64], onDidDismiss: [64], onWillDismiss: [64] }, void 0, { trigger: [{ onTriggerChange: 0 }], triggerAction: [{ onTriggerChange: 0 }], isOpen: [{ onIsOpenChange: 0 }] }]);
var tt2 = { ionPopoverDidPresent: "ionViewDidEnter", ionPopoverWillPresent: "ionViewWillEnter", ionPopoverWillDismiss: "ionViewWillLeave", ionPopoverDidDismiss: "ionViewDidLeave" };
function et2() {
  "undefined" != typeof customElements && ["ion-popover", "ion-backdrop"].forEach(((t7) => {
    switch (t7) {
      case "ion-popover":
        customElements.get(oe(t7)) || customElements.define(oe(t7), _3);
        break;
      case "ion-backdrop":
        customElements.get(oe(t7)) || e3();
    }
  }));
}

// node_modules/@ionic/core/components/ion-popover.js
var r8 = et2;

// node_modules/@ionic/angular/dist/standalone/providers/popover-controller.js
var PopoverController = class extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(D);
    r8();
  }
  create(opts) {
    const _a = opts, { injector: customInjector } = _a, restOpts = __objRest(_a, ["injector"]);
    return super.create(__spreadProps(__spreadValues({}, restOpts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover", customInjector)
    }));
  }
};

// node_modules/@ionic/angular/dist/standalone/providers/ionic-angular.js
var provideIonicAngular = (config = {}) => {
  return makeEnvironmentProviders([
    {
      provide: ConfigToken,
      useValue: config
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIonicAngular,
      multi: true,
      deps: [ConfigToken, DOCUMENT]
    },
    provideComponentInputBinding(),
    AngularDelegate,
    ModalController,
    PopoverController
  ]);
};
var initializeIonicAngular = (config, doc) => {
  return () => {
    doc.documentElement.classList.add("ion-ce");
    P(config);
  };
};

export {
  DomController,
  MenuController,
  ActivatedRoute,
  Router,
  t3 as t,
  a4 as a,
  d4 as d,
  v2 as v,
  o6 as o,
  n4 as n,
  a5 as a2,
  y2 as y,
  h4 as h,
  s5 as s,
  n5 as n2,
  o7 as o2,
  r5 as r,
  l5 as l,
  p5 as p,
  t5 as t2,
  o9 as o3,
  h5 as h2,
  v3 as v2,
  T,
  O,
  j,
  B,
  D,
  C,
  A2 as A,
  P2 as P,
  E,
  $,
  J2 as J,
  V,
  _,
  H,
  R,
  W2 as W,
  nn,
  en,
  on,
  tn,
  an,
  sn,
  dn,
  e2 as e,
  Platform,
  NavController,
  Config,
  NavParams,
  IonModalToken,
  AngularDelegate,
  ProxyCmp,
  IonModal,
  IonPopover,
  IonRouterOutlet,
  ValueAccessor,
  setIonicClasses,
  IonBackButton,
  IonNav,
  RouterLinkDelegateDirective,
  RouterLinkWithHrefDelegateDirective,
  IonTabs,
  OverlayBaseController,
  IonicRouteStrategy,
  t6 as t3,
  e3 as e2,
  kt,
  r7 as r2,
  ModalController,
  et2 as et,
  r8 as r3,
  PopoverController,
  provideIonicAngular
};
//# sourceMappingURL=chunk-V5BM5ALB.js.map
