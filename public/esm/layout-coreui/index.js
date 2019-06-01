import app from '/esm/_modules/apprun.js';
import Header from '/esm/header.js';
import Sidebar from '/esm/sidebar.js';
import Aside from '/esm/aside.js';
import Footer from '/esm/footer.js';
import Breadcrumb from '/esm/breadcrumb.js';
export default ({ element, title, sidebar, nav }) => app.createElement(app.Fragment, null,
    app.createElement(Header, null),
    app.createElement("div", { class: "app-body" },
        app.createElement("div", { class: "sidebar" },
            app.createElement("nav", { class: "sidebar-nav ps ps--active-y" },
                app.createElement(Sidebar, { sidebar: sidebar }),
                app.createElement("div", { class: "ps__rail-x" },
                    app.createElement("div", { class: "ps__thumb-x", tabindex: "0" })),
                app.createElement("div", { class: "ps__rail-y" },
                    app.createElement("div", { class: "ps__thumb-y", tabindex: "0" }))),
            app.createElement("button", { class: "sidebar-minimizer brand-minimizer", type: "button" })),
        app.createElement("main", { class: "main" },
            app.createElement(Breadcrumb, null),
            app.createElement("div", { class: "container-fluid" },
                app.createElement("div", { class: "card" },
                    app.createElement("div", { className: "card-body", id: element })))),
        app.createElement("aside", { class: "aside-menu" },
            app.createElement(Aside, null))),
    app.createElement(Footer, null));
