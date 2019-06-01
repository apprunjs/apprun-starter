import { app, Component } from '/esm/_modules/apprun.js';
export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = 'About';
        this.view = (state) => {
            return app.createElement("div", null, state);
        };
    }
}
