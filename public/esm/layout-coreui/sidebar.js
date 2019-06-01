import { app, Component } from '/esm/_modules/apprun.js';
export default class extends Component {
    constructor() {
        super(...arguments);
        this.view = ({ sidebar }) => {
            return app.createElement("ul", { ul: true, class: "nav" },
                app.createElement("li", { class: "nav-title" }, "Dashboard"),
                app.createElement("li", { class: "nav-item" },
                    app.createElement("a", { class: "nav-link active", href: "/" },
                        app.createElement("i", { class: "nav-icon icon-speedometer" }),
                        " Dashboard ",
                        app.createElement("span", { class: "badge badge-info" }, "NEW"))),
                app.createElement("li", { class: "nav-title" }, "Menus"),
                sidebar && sidebar.map(({ text, link, icon }) => app.createElement("li", { class: "nav-item" },
                    app.createElement("a", { class: "nav-link", href: link },
                        app.createElement("i", { class: `nav-icon icon-${icon || 'drop'}` }),
                        text))));
        };
    }
}
