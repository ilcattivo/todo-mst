import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {observer, Observer} from 'mobx-react-lite';

import {styles} from './styles';

import {rootStore} from './stores/rootStore';
const {todoStore} = rootStore;

const App = observer(() => {
  const [todoText, setTodoText] = useState('');

  const handleButtonPress = () => {
    todoStore.addTodo(todoText);
    setTodoText('');
  };

  const renderTodo = ({item: todo}) => {
    const handleTodoClick = (handledTodo) => () => {
      todoStore.toggleDone(handledTodo);
    };

    return (
      <Observer>
        {() => (
          <TouchableOpacity onPress={handleTodoClick(todo)}>
            <View style={styles.todoCard}>
              <Text style={todo.done ? styles.todoCard_done : {}}>
                {todo.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </Observer>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Todo List {todoStore.todosCount}</Text>
        <FlatList
          contentContainerStyle={styles.todoList}
          data={todoStore.todos}
          renderItem={renderTodo}
        />
        <TextInput
          placeholder="What to do?"
          onChangeText={(text) => setTodoText(text)}
          value={todoText}
        />
        <Button title="Add" onPress={handleButtonPress} />
      </View>
    </View>
  );
});

export default App;
