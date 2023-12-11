import { createApp } from "vue";
import "./style.css";
import "./assets/index.css";
import App from "./App.vue";
import HomePage from "./views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createI18n } from "vue-i18n";
import * as messages from "./i18n";

const routes = [{ path: "/", component: HomePage }];

const router = createRouter({ routes, history: createWebHistory() });

const i18n = createI18n({ messages, locale: "es", fallbackLocale: "en" });

createApp(App).use(router).use(i18n).mount("#app");
