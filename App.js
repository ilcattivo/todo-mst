import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {observer} from 'mobx-react-lite';

import {styles} from './styles';

import rootStore from './stores/rootStore';
rootStore.addTodo('Celebrate');
rootStore.addTodo('Suck some dick');
const App = observer(() => {
  return (
    <View>
      <Text>Text</Text>
      <Text>{rootStore.todos.length}</Text>
    </View>
  );
});

export default App;
