import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@grupo3/mf-header",
  app: () => System.import<LifeCycles>("@grupo3/mf-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@grupo3/mf-autor",
  app: () => System.import<LifeCycles>("@grupo3/mf-autor"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
