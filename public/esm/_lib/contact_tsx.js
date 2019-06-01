import { app, Component } from '/esm/_modules/apprun.js';
export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = 'Contact';
        this.view = (state) => app.createElement(app.Fragment, null,
            app.createElement("div", null, state),
            app.createElement("my-counter", null));
    }
}
