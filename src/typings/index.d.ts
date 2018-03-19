type ListStatus = 'All' | 'Completed' | 'Active';

interface TodoItemState {
    isShowClose: boolean;
}

interface TodoListItem {
    status: 'check' | 'checked';
    text: string;
}

interface AppState {
    itemList: TodoListItem[];
    listStatus: ListStatus;
}

interface testState {
    itemList: TodoListItem[];
    listStatus: ListStatus;
}

interface testkState {
    itemList: TodoListItem[];
    listStatus: ListStatus;
}

interface AppStateg {
    itemList: TodoListItem[];
    listStatus: ListStatus;
}

interface AppState {
    itemList: TodoListItem[];
    listStatus: ListStatus;
}

interface Todo {
    title: string;
    completed: boolean;
}

interface TodoHeadState {
    inputText: string;
}
