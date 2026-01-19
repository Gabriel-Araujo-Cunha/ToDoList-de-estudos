import { useState } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { TodoForm } from "./components/TodoForm";

// const todos = [

//   {
//     id: 3,
//     description: "Ciclo de vida dos componentes",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 4,
//     description: "Testes unitários com Jest",
//     completed: false,
//     createdAt: "2022-10-31",
//   },
// ];
// const completed = [
//   {
//     id: 5,
//     description: "Controle de inputs e formulários controlados",
//     completed: true,
//     createdAt: "2022-10-31",
//   },
//   {
//     id: 6,
//     description: "Rotas dinâmicas",
//     completed: true,
//     createdAt: "2022-10-31",
//   },
// ];

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: true,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Props, state e hooks",
      completed: false,
      createdAt: "2022-10-31",
    },
  ]);

  const toogleDialog = () => {
    setShowDialog(!showDialog);
  };

  const addTodo = (formData) => {
    const description = formData.get('description');
    setTodos (prevState => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),        
      }
      return [...prevState, todo]
    })
    toogleDialog();
  };

  const toggleTodoCompleted = (todo) => {
    setTodos (prevState => {
      return prevState.map(t => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed
          }
        }
        return t;
      })
    })
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>

        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos.filter(t => !t.completed).map(function (t) {
              return <ToDoItem key={t.id} item={t} onToogleComplete={toggleTodoCompleted} />;
            })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos.filter(t => t.completed).map(function (t) {
              return <ToDoItem key={t.id} item={t} onToogleComplete={toggleTodoCompleted} />;
            })}
          </ToDoList>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toogleDialog}>
              <TodoForm onSubmit={addTodo} />
            </Dialog>
            <FabButton onClick={toogleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
