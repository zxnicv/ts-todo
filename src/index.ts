import Vue from "vue";
import TodoApp from "./components/TodoApp.vue";
import "./static/iconfont.js";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <todo-app/>
    </div>
    `,
    data: { name: "World" },
    components: {
        TodoApp
    }
});
