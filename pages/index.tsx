import { app, Component } from "apprun";

export default class Home extends Component {
  state = 'Home';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <p>This is the home page</p>
    </div>
  }
}
