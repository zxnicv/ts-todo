<template>
    <div class="todo__bottom">
        <span>{{activeNum}} item left</span>
        <div class="todo__select-status">
            <span :class="isActive('All')" @click="handleStatusClick('All')">All</span>
            <span :class="isActive('Active')" @click="handleStatusClick('Active')">Active</span>
            <span :class="isActive('Completed')" @click="handleStatusClick('Completed')">Completed</span>
        </div>
        <span @click="handleRemoveCompletedClick" class="todo__clear">Clear completed</span>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { TodoHeadState } from './../models';

export default Vue.extend({
    props: ['activeNum', 'listStatus'],
    data() {
        const initialState: TodoHeadState = {
            inputText: '',
        }
        return initialState;
    },
    methods: {
        isActive(status: string) {
            return status === this.listStatus && 'active';
        },
        handleStatusClick(status: string) {
            this.$emit('selectListStatus', status);
        },
        handleRemoveCompletedClick() {
            this.$emit('removeCompleted');
        }
    }
});
</script>
<style lang="scss">
.todo__bottom {
    display: flex;
    width: 450px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    border-top: 1px solid #e6e6e6;
    color: #777;
    font-siz: 14px;
}

.todo__bottom .active {
    border: 1px solid rgba(175, 47, 47, 0.2);
    padding: 3px 7px;
    border-radius: 5px;
}

.todo__select-status span {
    cursor: pointer;
}

.todo__clear {
    cursor: pointer;
}
</style>
