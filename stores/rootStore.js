import {TodoStore} from './todoStore';

class RootStore {
  todoStore = new TodoStore();
}

export const rootStore = new RootStore();
