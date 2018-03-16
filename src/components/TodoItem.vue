<template>
    <div class="todo__item" :class="item.status" v-show="isShowByListStatus" @click="handleItemClick" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <span class="todo__check"><icon class="todo__select" name="xuanze"/></span>
        <p>{{item.text}}</p>
        <span class="todo__close-wrap" v-show="isShowClose" @click.stop="handleRemoveClick()"><icon class="todo__close" name="close2"/></span>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Icon from './icon/index.vue';
import { TodoItemState } from './../models';

export default Vue.extend({
    components: {
        Icon,
    },
    props: ['item', 'listStatus'],
    data() {
        const initialState: TodoItemState = {
            isShowClose: false,
        };

        return initialState;
    },
    methods: {
        handleItemClick() {
            this.$emit('toggleItem');
        },
        handleMouseOver() {
            this.isShowClose = true;
        },
        handleMouseLeave() {
            this.isShowClose = false;
        },
        handleRemoveClick() {
            this.$emit('removeItem');
        }
    },
    computed: {
        isShowByListStatus(): boolean {
            // console.warn('this.listStatus', this.listStatus);
            if (this.listStatus === 'All') return true;
            if (this.listStatus === 'Active' && this.item.status === 'check') return true;
            if (this.listStatus === 'Completed' && this.item.status === 'checked') return true;
            return false;
        }
    }
});
</script>
<style lang="scss">
    .todo__item {
        display: flex;
        padding-left: 9px;
        height: 50px;
        align-items: center;
        position: relative;

        p {
            margin-left: 15px;
            font-size: 24px;
            font-weight: 100;
        }
    }

    .todo__item.checked {
        p {
            text-decoration: line-through;
            color: #d9d9d9;
            transition: 0.3s ease-out;
        }

        .todo__select {
            display: inline;
        }

        .todo__check {
            border: 1px solid #8BC34A;
        }
    }

    .todo__check {
        border: 1px solid #d9d9d9;
        width: 25px;
        display: inline-block;
        height: 25px;
        border-radius: 50%;
    }

    .todo__close-wrap {
        width: 24px;
        height: 24px;        
    }

    .todo__close {
        position: absolute;
        right: 24px;
        width: 24px;
        height: 27px;
    }

    .todo__select {
        width: 22px;
        height: 22px;
        display: none;
    }
</style>
