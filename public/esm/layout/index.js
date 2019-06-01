import app, { Component } from '/esm/_modules/apprun.js';
//style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;"
export default class extends Component {
    constructor() {
        super(...arguments);
        this.view = ({ title, element, sidebar, nav }) => app.createElement("div", { id: "root" },
            app.createElement("div", { class: "drawer-frame-root" },
                app.createElement("aside", { class: "mdc-drawer mdc-drawer--modal" },
                    app.createElement("div", { class: "mdc-drawer__header" },
                        app.createElement("h3", { class: "mdc-drawer__title" }, "Mail"),
                        app.createElement("h6", { class: "mdc-drawer__subtitle" }, "email@material.io")),
                    app.createElement("div", { class: "mdc-drawer__content" },
                        app.createElement("nav", { class: "mdc-list" },
                            sidebar.map(item => app.createElement("a", { class: "mdc-list-item", href: item.link, tabindex: "-1" },
                                app.createElement("i", { class: "material-icons mdc-list-item__graphic", "aria-hidden": "true" }, item.icon),
                                item.text)),
                            app.createElement("hr", { class: "mdc-list-divider" }),
                            app.createElement("a", { class: "mdc-list-item mdc-list-item--activated", href: "#", tabindex: "-1" },
                                app.createElement("i", { class: "material-icons mdc-list-item__graphic", "aria-hidden": "true" }, "settings"),
                                "Settings"),
                            app.createElement("a", { class: "mdc-list-item", href: "#", tabindex: "-1" },
                                app.createElement("i", { class: "material-icons mdc-list-item__graphic", "aria-hidden": "true" }, "announcement"),
                                "Help & feedback")))),
                app.createElement("div", { class: "mdc-drawer-scrim" }),
                app.createElement("div", { class: "drawer-frame-app-content" },
                    app.createElement("header", { class: "mdc-top-app-bar drawer-top-app-bar" },
                        app.createElement("div", { class: "mdc-top-app-bar__row" },
                            app.createElement("section", { class: "mdc-top-app-bar__section mdc-top-app-bar__section--align-start" },
                                app.createElement("button", { class: "material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" }, "menu"),
                                app.createElement("span", { class: "mdc-top-app-bar__title" }, title)),
                            app.createElement("section", { class: "mdc-top-app-bar__section mdc-top-app-bar__section--align-end" }, nav.map(item => app.createElement("button", { onclick: e => app.run(item.link, e), class: "mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded", "aria-label": item.text }, item.text))))),
                    app.createElement("div", { class: "drawer-main-content" },
                        app.createElement("div", { class: "mdc-top-app-bar--fixed-adjust" }),
                        app.createElement("div", { id: element })))));
        this.rendered = () => {
            const drawerEl = document.querySelector('.mdc-drawer');
            const drawer = new mdc.drawer.MDCDrawer.attachTo(drawerEl);
            // Instantiate MDC Top App Bar (required)
            const topAppBarEl = document.querySelector('.mdc-top-app-bar');
            const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);
            topAppBar.setScrollTarget(document.querySelector('.drawer-main-content'));
            topAppBar.listen('MDCTopAppBar:nav', () => {
                drawer.open = !drawer.open;
            });
        };
    }
}
