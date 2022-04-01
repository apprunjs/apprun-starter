// src/apprun.ts
var app = window["app"];
var Component = window["Component"];

// src/Home.tsx
var HomeComponent = class extends Component {
  state = "Home";
  view = (state) => /* @__PURE__ */ app.h("div", null, /* @__PURE__ */ app.h("h1", null, state), /* @__PURE__ */ app.h("p", null, "This is an AppRun component."));
};

// pages/index.tsx
var pages_default = HomeComponent;
export {
  pages_default as default
};
//# sourceMappingURL=index.js.map
