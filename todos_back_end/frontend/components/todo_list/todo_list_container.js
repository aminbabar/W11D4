import { connect } from 'react-redux';
import TodoList from './todo_list';


// Actions
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import { fetchTodos } from '../../actions/todo_actions';
import { createTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: () => { dispatch(fetchTodos()) },
  createTodo: todo => { dispatch(createTodo(todo)) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
