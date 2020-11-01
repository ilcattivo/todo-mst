import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    marginHorizontal: 'auto',
    width: '85%',
  },

  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },

  todoList: {
    width: '100%',
  },

  todoCard: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    marginBottom: 8,
  },

  todoCard_done: {
    textDecorationLine: 'line-through',
  },
});
