import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue-apexcharts";
import VueGAPI from "vue-gapi";

const apiConfig = {
  apiKey: process.env.VUE_APP_GOOGLE_API_KEY || "",
  clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID || "",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: "https://www.googleapis.com/auth/spreadsheets",
  refreshToken: true
};

// Use the plugin and pass along the configuration
Vue.use(VueGAPI, apiConfig);

Vue.component("apexchart", VueApexCharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
