import app from 'apprun';

export default ({ name, nav, sidebar }) => <>
  <header>
    <h1>{name}</h1>
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
    <div id='main'></div>
  </main>
  {/* <aside></aside> */}
  <footer>Footer</footer>
</>