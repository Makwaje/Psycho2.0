"use client";
import React, { useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { clear, log } from "console";
import { Todo } from "./model";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, PenIcon, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

// export default async function App(): React.FC {
//   return <main></main>;
// }

function App(): React.ReactNode {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  }

  console.log(todos);
  return (
    <main className=" max-w-6xl">
      <h1 className="text-center mt-16">Task App</h1>
      <InputWithLabel onClick={handleAdd} todo={todo} setTodo={setTodo} />

      {/* <div className="grid grid-cols-2 gap-y-8 max-w-2xl mx-auto"> */}
      <div className="flex justify-evenly flex-wrap gap-8">
        {todos.map((todo) => (
          <ToDoCard
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div>
    </main>
  );
}

export default App;

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onClick: (e: React.FormEvent) => void;
}

function InputWithLabel({ todo, setTodo, onClick }: Props): React.ReactNode {
  return (
    <>
      <form className="grid w-full max-w-sm gap-1.5 mt-16 mx-auto mb-16">
        <Label htmlFor="text">TODOOO</Label>
        <div className="flex gap-2 relative">
          <Input
            type="text"
            id="text"
            placeholder="TODOOO"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={onClick} type="submit" className="absolute right-0">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

interface Props2 {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function ToDoCard({ todo, todos, setTodos }: Props2): React.ReactNode {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleDone(id: number): void {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: true } : todo))
    );
  }

  function handleDelete(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEdit(e: React.FormEvent, id: number) {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setIsEdit(false);
  }

  useEffect(
    function () {
      inputRef.current?.focus();
    },
    [isEdit]
  );

  return (
    <Card className="flex flex-col justify-between gap-8 w-72">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Todo</CardTitle>
        {todo.isDone && <Badge>Done</Badge>}
      </CardHeader>
      <CardContent>
        {isEdit ? (
          <form
            className="flex flex-col gap-4 items-center justify-center"
            onSubmit={(e) => handleEdit(e, todo.id)}
          >
            <Input
              ref={inputRef}
              placeholder="Edit here"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="py-14"
            />
            <Button className="w-1/3">done</Button>
          </form>
        ) : (
          <p className="text-center">{todo.todo}</p>
        )}
      </CardContent>

      <CardFooter className="flex flex-row gap-4 items-center justify-center">
        {!todo.isDone && (
          <>
            {!isEdit && (
              <Button
                size="icon"
                variant="default"
                onClick={() => handleDone(todo.id)}
              >
                <Check size={15} />
              </Button>
            )}

            <Button
              size="icon"
              variant="secondary"
              onClick={() => {
                if (!todo.isDone) {
                  setIsEdit((isEdit) => !isEdit);
                }
              }}
            >
              <PenIcon size={15} />
            </Button>
            {!isEdit && (
              <Button
                size="icon"
                variant="destructive"
                onClick={() => handleDelete(todo.id)}
              >
                <Trash2 size={15} />
              </Button>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  );
}
