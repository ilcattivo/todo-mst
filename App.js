import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableNativeFeedback,
  TextInput,
  Button,
} from 'react-native';
import {observer, Observer} from 'mobx-react-lite';

import {styles} from './styles';

import rootStore from './stores/rootStore';
const {counterStore, todoStore} = rootStore;

const App = observer(() => {
  const [todoText, setTodoText] = useState('');

  const renderTodo = ({item: todo}) => {
    return (
      <Observer>
        {() => (
          <TouchableNativeFeedback
            onPress={() => todo.complete()}
            onLongPress={() => todo.remove()}
            delayLongPress={300}>
            <View style={styles.todoCard}>
              <Text style={todo.completed ? styles.todoCard_done : {}}>
                {todo.text}
              </Text>
            </View>
          </TouchableNativeFeedback>
        )}
      </Observer>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.counterWrapper}>
          <Text style={styles.title}>
            Current Count: {counterStore.currentCount}
          </Text>
          <View style={styles.counterButtonContainer}>
            <View style={styles.counterButtonWrapper}>
              <Button
                style={styles.counterButton}
                title="-"
                color="#ab0000"
                onPress={() => counterStore.decrease()}
              />
            </View>
            <View style={styles.counterButtonWrapper}>
              <Button
                style={styles.counterButton}
                title="+"
                color="#00ab00"
                onPress={() => counterStore.increase()}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.todosWrapper}>
          <Text style={styles.title}>
            Todos Count: {todoStore.todos.length}
          </Text>
          <FlatList
            contentContainerStyle={styles.todoList}
            keyExtractor={(todo) => String(todo.id)}
            data={todoStore.todos}
            renderItem={renderTodo}
          />
          <TextInput
            placeholder="What to do?"
            onChangeText={(text) => setTodoText(text)}
            value={todoText}
          />
          <View style={{marginBottom: 10}}>
            <Button
              title="Add"
              onPress={() => {
                todoStore.addTodo(todoText);
                setTodoText('');
              }}
            />
          </View>
          <Button
            title="Clear"
            color="#ab0000"
            onPress={() => todoStore.clearAllTodos()}
          />
        </View>
      </View>
    </View>
  );
});

export default App;
