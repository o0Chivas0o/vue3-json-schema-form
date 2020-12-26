import { createApp, defineComponent, h } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
//import App from "./App.vue";

const img = require("./assets/logo.png"); // eslint-disable-line

// .vue文件 template 标签 就是如下方式 通过 compiler 转换为如下方式
// template 中的内容实际上就是一串字符串

const App = defineComponent({
  render() {
    return h("div", { id: "app" }, [
      h("img", {
        alt: "Vue logo",
        src: img
      }),
      h(HelloWorld, {
        msg: "Welcome to Your Vue.js + TypeScript App",
        age: 12
      })
    ]);
  }
});

createApp(App).mount("#app");
