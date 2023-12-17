import { Container, Header, SearchForm, Section, Text } from 'components';
import { TodoList } from 'components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/sliceTodo';

export const App = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
        </Container>
      </Section>
    </>
  );
};
