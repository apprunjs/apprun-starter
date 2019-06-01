import { app, Component } from '/esm/_modules/apprun.js';
export default class extends Component {
    constructor() {
        super(...arguments);
        this.view = _ => { app.run('/README'); };
    }
}
