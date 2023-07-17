![Logo](https://github.com/ch3ber/yourRouter/blob/main/docs/img/full-logo.png?raw=true)

# What is yourrouter? 🤔

A powerful router based on client-side routing.


# Features 🚀

- Doesn't reload the page
- Support for dynamic routes
- Support template rendering
- Redirection without reloading the page
- Bundle with 0 dependencies
- Full typescript support

# Working on new features 🛠️

- Support for query params
- Documentation with project examples

# Documentation 📝

- [Documentation website](https://ch3ber.github.io/yourRouter)
- [Documentation repo](https://github.com/ch3ber/yourRouter-docs)

# Quick Setup ⏱️

Start with the quick configuration of yourrouter. See the full documentation **[here](https://ch3ber.github.io/yourRouter)**

### Installation

```bash
  npm i yourrouter
```

```bash
  pnpm add yourrouter
```

```bash
  yarn add yourrouter
```

### Import yourrouter

Import yourrouter to your index file.

```js
// src/index.js

import Router from "yourrouter";
```

### Set your configuration

Set the configuration of your Router to start creating routes using `create()` method.

```js
// src/index.js

Router.create({
  path404: "/notFound",
  renderId: "#app",
});
```

**path404**
Name of route with 404 HTTP status code.

**renderId**
Optional id where the templates will be rendered. `renderId` use `document.querySelector()` to find the id, you can use `#app` in your html file to select an id or `.app` to css class.

### Execute code in a route

```js
// src/index.js

import Router from "yourrouter";

const config = {
  path404: "/notFound",
};

const router = Router.create(config);

router.addRoute("/", () => {
  console.log("welcome to the main route!");
});

router.addRoute("/foo", () => {
  console.log("welcome to the foo route!");
});
```

### Get the Router instance

You can get the instance of your Router in any file using the `get()` method.

```js title="
// src/pages/about/index.js"

const router = Router.get();
```

# Template rendering 🏭

Render the content of your route in the HTML. You should return a funtion into addRoute callback, this function can be sync or async and should return the template to render in the document.

_Note: To active the template rendering you should set the `renderId` in your Router config._

```js
// src/index.js

import Router from "yourrouter";

const router = Router.create({
  path404: "/notFound",
  renderId: "#app", // use #app to id and .app to css class
});

router.addRoute("/", () => {
  console.log("Hello home page");

  return () => "<p>Home page!</p>"; // function to that return's the teamplate to render in your page
});
```

### Example with template rendering disable

```js
// src/index.js

import Router from "yourrouter";

const router = Router.create({
  path404: "/notFound",
});

router.addRoute("/", () => {
  console.log("Hello home page");

  // render the content in the #app element
  document.querySelector("#app").innerHTML = "<p>Home page!</p>";
});
```

# Examples list ✅

### Devstore

E-commerce SPA with template rendering, created without javascript frameworks.

- Repo: https://github.com/ch3ber/devstore
- Live demo: https://ch3ber-devstore.netlify.app

# Contributing 🤝

[Contribution guideline](./CONTRIBUTING.md)

# Feedback 📣

If you have any feedback, please reach out to us at @ch3ber_dev on twitter

# Authors 👥

- [@ch3ber](https://www.github.com/ch3ber)
