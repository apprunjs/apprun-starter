const Component = window['Component'];
  export default class extends Component {
    // {"title":"Contact","content":"\n<h1 id=\"contact\" tabindex=\"-1\">Contact</h1>\n<p>This is a markdown page.</p>\n"}
    view = () => `_html:
<h1 id="contact" tabindex="-1">Contact</h1>
<p>This is a markdown page.</p>
`
  }