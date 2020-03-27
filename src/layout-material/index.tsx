import app, { Component } from 'apprun';
declare var mdc;

export default class extends Component {

  view = ({ title, element, sidebar, nav }) => <div id="root">
    <div class="drawer-frame-root">
      <aside class="mdc-drawer mdc-drawer--modal">
        <div class="mdc-drawer__header">
          <h3 class="mdc-drawer__title">Mail</h3>
          <h6 class="mdc-drawer__subtitle">email@material.io</h6>
        </div>
        <div class="mdc-drawer__content">
          <nav class="mdc-list">
            {sidebar.map(item => <a class="mdc-list-item" href={item.link}>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{item.icon}</i>{item.text}</a>
            )}
            <hr class="mdc-list-divider" />
            <a class="mdc-list-item mdc-list-item--activated" href="#"><i
              class="material-icons mdc-list-item__graphic" aria-hidden="true">settings</i>Settings</a><a
                class="mdc-list-item" href="#"><i class="material-icons mdc-list-item__graphic"
                  aria-hidden="true">announcement</i>Help &amp; feedback</a>
          </nav>
        </div>
      </aside>
      <div class="mdc-drawer-scrim"></div>
      <div class="drawer-frame-app-content">

        <header class="mdc-top-app-bar">
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
              <span class="mdc-top-app-bar__title">{title}</span>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
              {/*
                {nav.map(item => <button onclick={e => app.run(item.link, e)}
                    class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
                  aria-label={item.text}>{item.text}</button>)} */}

              <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Download">file_download</button>
              <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Print this page">print</button>
              <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Bookmark this page">bookmark</button>
            </section>
          </div>
        </header>

        <div class="drawer-main-content" tabindex="0">
          <div class="mdc-top-app-bar--fixed-adjust"></div>
          <div id={element}></div>
        </div>
      </div>
    </div>
  </div>

  topAppBar;
  drawer;

  rendered = () => {
    const drawerEl = document.querySelector('.mdc-drawer');
    const topAppBarEl = document.querySelector('.mdc-top-app-bar');
    this.drawer = mdc.drawer.MDCDrawer.attachTo(drawerEl);
    this.topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);
    //https://github.com/material-components/material-components-web/issues/5615
    document.querySelectorAll('.mdc-list-item')[0].setAttribute('tabIndex', '0');
    this.topAppBar.setScrollTarget(document.querySelector('.drawer-main-content'));
    this.topAppBar.listen('MDCTopAppBar:nav', () => {
      this.drawer.open = !this.drawer.open;
    })
  }

  unload = () => {
    this.topAppBar.destroy();
    this.drawer.destroy();
  }
}

