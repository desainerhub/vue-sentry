Sentry.init({
  dsn: "https://04e54dc742284eb7851840e977798e12@o483326.ingest.sentry.io/5534852",
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
    heading: "Vue.js + Bootstrap + Sentry",
    text: "Cuma buat test doank."
  }
});