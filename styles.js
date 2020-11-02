import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },

  wrapper: {
    marginHorizontal: 'auto',
    width: '85%',
  },

  counterWrapper: {
    paddingTop: 20,
  },

  counterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  counterButtonWrapper: {
    flexBasis: '30%',
  },

  todosWrapper: {
    marginTop: 50,
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
