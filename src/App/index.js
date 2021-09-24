import React from 'react';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { useTodos } from './useTodos';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          loading={loading}
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          loading={loading}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onEmptyTodos={() => <EmptyTodos />}
        onLoading={() =>
          new Array(4).fill().map((item, index) => <TodosLoading key={index} />)
        }
        onEmptySeachReasults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
