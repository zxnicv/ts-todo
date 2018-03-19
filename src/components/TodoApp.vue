<!-- src/components/Hello.vue -->

<template>
    <div>
        <h1 class="todo__title">todos</h1>
        <div class="todo__body">
            <todo-header @createNew="createNew(...arguments)"/>
            <todo-item v-for="(item, index) in itemList" @toggleItem="toggleItem(item)" @removeItem="removeItem(item)" :item="item" :listStatus="listStatus" :key="index"/>
            <todo-bottom :activeNum="activeNum" 
                         :listStatus="listStatus" 
                         @selectListStatus="selectListStatus(...arguments)"
                         @removeCompleted="removeCompleted"/>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import TodoHeader from './TodoHeader.vue';
import TodoItem from './TodoItem.vue';
import TodoBottom from './TodoBottom.vue';

export default Vue.extend({
    components: {
        TodoHeader,
        TodoItem,
        TodoBottom,
    },
    data() {
        const initialState: AppState = {
            itemList: [{
                text: '哈哈',
                status: 'check',
            }],
            listStatus: 'All',
        }

        return initialState;
    },
    /*
     * 把app看成是数据的源头，对数据的修改都集中在这里。
     */
    methods: {
        toggleItem(item: TodoListItem) {
            item.status = item.status === 'check' ? 'checked' : 'check';
        },
        createNew(text: string) {
            this.itemList.push({
                text,
                status: 'check',
            })
        },
        removeItem(item: TodoListItem) {
            const index = this.itemList.indexOf(item);
            if (index < 0) return;
            this.itemList.splice(index, 1);
        },
        selectListStatus(status: ListStatus) {
            this.listStatus = status;
        },
        removeCompleted() {
            const activeList: TodoListItem[] = [];
            this.itemList.forEach((item) => {
                if (item.status === 'check') {
                    activeList.push(item);
                }
            });
            this.itemList = activeList;
        },
    },
    computed: {
        activeNum(): number {
            let num = 0;
            this.itemList.forEach((item) => {
                if (item.status === 'check') num++;
            });
            return num;
        },
    }
});
</script>
<style lang="scss">
.todo__title {
    color: rgba(175, 47, 47, 0.15);
    font-size: 110px;
    font-weight: 100;
    text-align: center;
}

.todo__body {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    width: 450px;
    margin: 0 auto;
}
</style>
