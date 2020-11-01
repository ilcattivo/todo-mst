// import {connectReduxDevtools} from 'mst-middlewares';

import TodoStore from './todoStore';

const store = TodoStore.create();
// connectReduxDevtools(require('remotedev'), store);

export default store;
