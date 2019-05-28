import app from 'apprun';

export default ({ title, element, nav, sidebar }) => <>
  <header>
    <h1>{title}</h1>
    <ul>
      {nav.map(item => <li><a href={item.link}>{item.text}</a></li>)}
    </ul>
  </header>
  <nav>
    <ul>
      {sidebar.map(item => <li><a href={item.link}>{item.text}</a></li>)}
    </ul>
  </nav>
  <main>
    <div id={element}></div>
  </main>
  {/* <aside></aside> */}
  <footer>Footer</footer>
</>