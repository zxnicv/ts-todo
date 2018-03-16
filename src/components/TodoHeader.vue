<template>
    <div class="todo__header">
        <div class="todo__input">
            <span class="todo__header-left"><icon class="todo__head-icon" name="jiantouxia"/></span>
            <input type="text" placeholder="what needs to be done?" @keydown="handleKeypress($event)">
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Icon from './icon/index.vue';
import { TodoHeadState } from './../models';

export default Vue.extend({
    components: {
        Icon,
    },
    data() {
        const initialState: TodoHeadState = {
            inputText: '',
        }
        return initialState;
    },
    methods: {
        handleKeypress(event: any) {
            if(!event.target.value) return;
            if (event.key === 'Enter') {
                this.$emit('createNew', event.target.value);
                event.target.value = '';
            }
        },
    }
});
</script>
<style lang="scss">
.todo__header {
    display: flex;
    align-items: left;
    flex-direction: column;
}

.todo__head-icon {
    width: 15px;
    height: 52px;
}

.todo__input {
    border: none;
    display: flex;
    width: 400px;  
    height: 50px;  
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    input {
        height: 48px;
        border: none;
        font-size: 24px;
        width: 300px;
        font-weight: 100;
        padding-left: 20px;
    }

    textarea:focus, input:focus{
        outline: none;
    }
}

.todo__header-left {
    padding-left: 15px;
}
</style>
