# Introduction

## What is AppRun

AppRun is a JavaScript library for building applications using the [elm](https://guide.elm-lang.org/architecture) inspired architecture, events and component.
> AppRun is a MIT-licensed open source project. Please consider [supporting the project on Patreon](https://www.patreon.com/apprun). 👍❤️🙏

## AppRun Architecture

AppRun lets you divide the application logic into three parts.

* Model — the state of your application
* View — a function to display the state
* Update — a set of event handlers to update the state

Below is a simple counter application using AppRun.

```javascript
const state = 0;
const view = state => `<div>
    <h1>${state}</h1>
    <button onclick='app.run("-1")'>-1</button>
    <button onclick='app.run("+1")'>+1</button>
  </div>`;
};
const update = {
  '+1': state => state + 1,
  '-1': state => state - 1
};
app.start(document.body, state, view, update);
```

## AppRun API

There is no proprietary syntax to learn and no compiler required. You only need to know three functions:

```javascript
app.run() // to publish events
app.on() // to subscribe to events
app.start() // to start your application

```

Ready to try it yourself? Head over to [Getting Started](/01-start).
