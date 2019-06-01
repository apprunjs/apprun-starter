import { app, Component } from '/esm/_modules/apprun.js';
export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = '404';
        this.view = (state) => {
            return app.createElement("div", null, state);
        };
    }
}
