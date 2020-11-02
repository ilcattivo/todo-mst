import {types, getRoot, destroy} from 'mobx-state-tree';

const Todo = types
  .model({
    text: types.string,
    completed: false,
    id: types.identifierNumber,
  })
  .actions((self) => ({
    remove() {
      getRoot(self).removeTodo(self);
    },

    complete() {
      self.completed = !self.completed;
    },
  }));

const TodoStore = types
  .model({
    todos: types.array(Todo),
  })
  .views((self) => ({
    get completedCount() {
      return self.todos.reduce(
        (count, todo) => (todo.completed ? count + 1 : count),
        0,
      );
    },

    get activeCount() {
      return self.todos.length - self.completedCount;
    },
  }))
  .actions((self) => ({
    addTodo(text) {
      const id =
        self.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      self.todos.push({
        id,
        text,
      });
    },

    removeTodo(todo) {
      destroy(todo);
    },

    clearAllTodos() {
      self.todos = [];
    },
  }));

export default TodoStore;
