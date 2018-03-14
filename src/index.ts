import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
console.warn('process.env');
let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name111sss: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent
    }
});
