import { app, Component } from 'apprun'

export default class extends Component {

  state = 'Contact'

  view = (state) => <>
    <div>{state}</div>
    <my-counter />
  </>

}