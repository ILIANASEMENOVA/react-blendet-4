import { Container, Header, SearchForm, Section, Text } from 'components';
import { TodoList } from 'components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/sliceTodo';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length > 0 ? (
            <>
              <Filter />
              <TodoList />
            </>
          ) : (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
        </Container>
      </Section>
    </>
  );
};
