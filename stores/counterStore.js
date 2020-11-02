import {types} from 'mobx-state-tree';

const CounterStore = types
  .model({
    counter: types.integer,
  })
  .views((self) => ({
    get currentCount() {
      return self.counter;
    },
  }))
  .actions((self) => ({
    increase() {
      self.counter++;
    },

    decrease() {
      self.counter--;
    },
  }));

export default CounterStore;
