import {makeAutoObservable} from 'mobx';

export class TodoStore {
  todos = [
    {
      id: '1',
      title: 'Celebrate',
      done: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get todosCount() {
    return this.todos.length;
  }

  addTodo(title) {
    this.todos.push({
      title,
      id: Math.random().toString(),
      done: false,
    });
  }

  toggleDone(todo) {
    todo.done = !todo.done;
    console.log(this.todos[0].done);
  }
}
