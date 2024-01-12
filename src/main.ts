import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { trace, info, error } from "@tauri-apps/plugin-log";

// with LogTarget::Webview enabled this function will print logs to the browser console
// const detach = await attachConsole();

trace("Trace");
info("Info");
error("Error");

// detach the browser console from the log stream
// detach();

createApp(App)
.use(ElementPlus)
.mount("#app");
