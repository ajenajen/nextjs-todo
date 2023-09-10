import { useState, useCallback } from "react";
import ButtonNew from "@/components/ButtonNew";
import HeaderDate from "@/components/HeaderDate";
import FlexBox from "@/components/FlexBox";
import Title from "@/components/Title";
import TodoList from "@/components/TodoList";
import TodoItem from "@/components/TodoItem";
import ModalForm from "@/components/ModalForm";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState(initTodos);
  const [todo, setTodo] = useState(initTodo);

  const handleUpdateTodo = (value) => {
    if (!!value?.id) {
      const restTodos = todos.filter((item) => item.id !== value.id);
      setTodos([...restTodos, value]);
    } else {
      setTodos([{ id: todos?.length + 1, ...value }, ...todos]);
    }
  };

  const handleEditTodo = useCallback((value) => {
    setOpen(true);
    setTodo(value);
  }, []);

  const handleUpdateStatus = useCallback(
    (data) => {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === data.id
            ? { ...data, status: data.status !== "done" ? "done" : "todo" }
            : item
        )
      );
    },
    [setTodos]
  );

  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-center p-6 pt-24 bg-white border border-gray-200 max-w-xl m-auto`}
    >
      <div className="z-10 absolute left-0 top-0 p-6 pt-0 w-full">
        <FlexBox className="flex items-center justify-between px-0">
          <HeaderDate />
          <ButtonNew onClick={() => setOpen(true)} />
        </FlexBox>
      </div>
      <FlexBox>
        <Title text={"TODO TASKS"} />
        <TodoList>
          {todos
            ?.filter((item) => item.status !== "done")
            ?.sort((a, b) => a.id - b.id)
            ?.map((item) => (
              <TodoItem
                key={`todo-${item.id}`}
                data={item}
                handleEditTodo={handleEditTodo}
                handleUpdateStatus={handleUpdateStatus}
              />
            ))}
        </TodoList>
      </FlexBox>
      <FlexBox>
        <Title text={"DONE TASKS"} />
        <TodoList>
          {todos
            ?.filter((item) => item.status === "done")
            ?.sort((a, b) => a.id - b.id)
            ?.map((item) => (
              <TodoItem
                key={`todo-${item.id}`}
                data={item}
                handleEditTodo={handleEditTodo}
                handleUpdateStatus={handleUpdateStatus}
              />
            ))}
        </TodoList>
      </FlexBox>
      <ModalForm
        todo={todo}
        open={open}
        setOpen={setOpen}
        handleUpdateTodo={handleUpdateTodo}
      />
    </main>
  );
}

const initTodo = {
  title: "",
  desc: "",
  priority: "normal",
  status: "todo",
};

const initTodos = [
  {
    id: 1,
    title: "Buy Present",
    desc: "Go and get Christmas present for Lana and Sandra",
    status: "todo",
    priority: "high",
  },
  {
    id: 2,
    title: "Go to the Store",
    desc: "Egg, bacon, milk, frozen yogurt, sweets",
    status: "todo",
    priority: "high",
  },
  {
    id: 3,
    title: "Go for a walk",
    desc: "Walk a minimum of 3Km today.",
    status: "todo",
    priority: "normal",
  },
  {
    id: 4,
    title: "Call James",
    desc: "Call James for a meeting update",
    status: "done",
    priority: "normal",
  },
];
