import app from '/esm/_modules/apprun.js';
app.on('//', route => {
    const menus = document.querySelectorAll('.navbar-nav li');
    for (let i = 0; i < menus.length; ++i)
        menus[i].classList.remove('active');
    const item = document.querySelector(`[href='${route}']`);
    item && item.parentElement.classList.add('active');
});
export default ({ title, element, nav }) => app.createElement("div", { class: "container" },
    app.createElement("nav", { class: "navbar navbar-expand-lg navbar-light bg-light" },
        app.createElement("a", { class: "navbar-brand", href: "/" }, title),
        app.createElement("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
            app.createElement("span", { class: "navbar-toggler-icon" })),
        app.createElement("div", { class: "collapse navbar-collapse", id: "navbarSupportedContent" },
            app.createElement("ul", { class: "navbar-nav mr-auto" }, nav.map(item => app.createElement("li", { class: "nav-item" },
                app.createElement("a", { class: "nav-link", href: item.link }, item.text)))))),
    app.createElement("div", { class: "container", id: element }));
