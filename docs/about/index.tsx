const Component = window['Component'];
  export default class extends Component {
    // {"title":"About","content":"\n<h1>About</h1>\n<p>This is an HTML page</p>"}
    view = () => `_html:
<h1>About</h1>
<p>This is an HTML page</p>`
  }