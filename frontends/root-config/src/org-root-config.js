import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org/react-app-1",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3001/src/main.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@org/react-app-2",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3002/src/main.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@org/vue-app-1",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3000/src/main.js"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
