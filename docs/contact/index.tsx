const Component = window['Component'];
  export default class extends Component {
    // {"title":"Contact","content":"\n<h1 id=\"contact\" tabindex=\"-1\">Contact</h1>\n"}
    view = () => `_html:
<h1 id="contact" tabindex="-1">Contact</h1>
`
  }