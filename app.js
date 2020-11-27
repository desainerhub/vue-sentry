Sentry.init({
  dsn: "https://036116fd98f342369f1f2e80e933f2d1@o483326.ingest.sentry.io/5534891",
  integrations: [
    new Sentry.Integrations.Vue({
      Vue,
      tracing: true,
    }),
    new Sentry.Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

var study = new Vue({
  el: "#vue-app",
  data: {
    heading: "Vue.js + Sentry",
    text: "Cuma buat test doank."
  }
});