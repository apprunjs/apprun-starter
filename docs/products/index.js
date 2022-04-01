// src/apprun.ts
var app = window["app"];
var Component = window["Component"];

// pages/products/index.tsx
var products_default = class extends Component {
  state = {
    title: "Products",
    query: ["1", "2", "3"]
  };
  view = (state) => /* @__PURE__ */ app.h("div", null, /* @__PURE__ */ app.h("h1", null, state.title), /* @__PURE__ */ app.h("ul", null, state.query.map((id) => /* @__PURE__ */ app.h("li", {
    key: id
  }, /* @__PURE__ */ app.h("a", {
    class: "nav-link",
    href: `/products/${id}`
  }, id), state.id === id && /* @__PURE__ */ app.h("span", {
    class: "ml-3 fa fa-check"
  })))));
  update = {
    "/products": (state, id) => ({ ...state, id })
  };
};
export {
  products_default as default
};
//# sourceMappingURL=index.js.map
