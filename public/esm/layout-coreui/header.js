import { app, Component } from '/esm/_modules/apprun.js';
export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = 'My App';
        this.view = (state) => app.createElement("header", { class: "app-header navbar" },
            app.createElement("button", { class: "navbar-toggler sidebar-toggler d-lg-none mr-auto", type: "button", "data-toggle": "sidebar-show" },
                app.createElement("span", { class: "navbar-toggler-icon" })),
            app.createElement("a", { class: "navbar-brand", href: "/" }, state),
            app.createElement("button", { class: "navbar-toggler sidebar-toggler d-md-down-none", type: "button", "data-toggle": "sidebar-lg-show" },
                app.createElement("span", { class: "navbar-toggler-icon" })),
            app.createElement("ul", { class: "nav navbar-nav d-md-down-none" },
                app.createElement("li", { class: "nav-item px-3" },
                    app.createElement("a", { class: "nav-link", href: "/" }, "Home")),
                app.createElement("li", { class: "nav-item px-3" },
                    app.createElement("a", { class: "nav-link", href: "/contact" }, "Contact")),
                app.createElement("li", { class: "nav-item px-3" },
                    app.createElement("a", { class: "nav-link", href: "/about" }, "About"))),
            app.createElement("ul", { class: "nav navbar-nav ml-auto" }),
            app.createElement("button", { class: "navbar-toggler aside-menu-toggler d-md-down-none", type: "button", "data-toggle": "aside-menu-lg-show" },
                app.createElement("span", { class: "navbar-toggler-icon" })),
            app.createElement("button", { class: "navbar-toggler aside-menu-toggler d-lg-none", type: "button", "data-toggle": "aside-menu-show" },
                app.createElement("span", { class: "navbar-toggler-icon" })));
        this.update = [
            ['.', state => state]
        ];
    }
}
