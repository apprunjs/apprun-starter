import { app, Component } from '/esm/_modules/apprun.js';
export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = 'bread crumb';
        this.view = (state) => app.createElement("ol", { class: "breadcrumb" },
            app.createElement("li", { class: "breadcrumb-item" }, "Home"),
            app.createElement("li", { class: "breadcrumb-item" },
                app.createElement("a", { href: "#" }, "Admin")),
            app.createElement("li", { class: "breadcrumb-item active" }, "Dashboard"));
        this.update = [
            ['.', state => state]
        ];
    }
}
