export type ListStatus = 'All' | 'Completed' | 'Active';

export interface TodoItemState {
    isShowClose: boolean;
}

export interface TodoListItem {
    status: 'check' | 'checked';
    text: string;
}

export interface AppState {
    itemList: TodoListItem[];
    listStatus: ListStatus;
}

export interface AppStates {
    itemList: TodoListItem[];
    listStatus: ListStatus;
}

export interface testkStates {
    itemList: TodoListItem[];
    listStatus: ListStatus;
}

export interface Todo {
    title: string;
    completed: boolean;
}

export interface TodoHeadState {
    inputText: string;
}
