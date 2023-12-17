import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/sliceTodo';
import { selectFilter } from '../../redux/sliceFilter';

export const TodoList = () => {
  const filter = useSelector(selectFilter);
  const todos = useSelector(selectTodos);

  const getFilteredTodos = () => {
    return todos.filter(({ text }) =>
      text.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <Grid>
      {getFilteredTodos().map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo id={todo.id} text={todo.text} counter={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};
