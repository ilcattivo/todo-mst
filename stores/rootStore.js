import {types} from 'mobx-state-tree';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist} from 'mst-persist';
// import {connectReduxDevtools} from 'mst-middlewares';
// import remotedev from 'remotedev';

import CounterStore from './counterStore';
import TodoStore from './todoStore';

const RootStore = types.model({
  counterStore: types.optional(CounterStore, {counter: 0}),
  todoStore: types.optional(TodoStore, {}),
});

const rootStore = RootStore.create();

persist('counterStoreKey', rootStore.counterStore, {
  storage: AsyncStorage,
  jsonify: true,
  whitelist: ['counter'],
});

persist('todoStoreKey', rootStore.todoStore, {
  storage: AsyncStorage,
  jsonify: true,
  whitelist: ['todos'],
});

// TODO: fix error 'SocketProtocolError: Socket hung up'
// connectReduxDevtools(remotedev, rootStore);

export default rootStore;
