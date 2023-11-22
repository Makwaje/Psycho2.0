"use client";
import React, { useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Todo } from "./model";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, PenIcon, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// export default async function App(): React.FC {
//   return <main></main>;
// }

function App(): React.JSX.Element {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(function () {
    console.log(mo);
    console.log(todo);
  }, []);

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
      <h1 className="mt-16 text-center">Task App</h1>
      <InputWithLabel onClick={handleAdd} todo={todo} setTodo={setTodo} />

      {/* <div className="grid grid-cols-2 gap-y-8 max-w-2xl mx-auto"> */}
      <div className="flex flex-wrap justify-evenly gap-8  ">
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

interface InputWithLabelProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onClick: (e: React.FormEvent) => void;
}

function InputWithLabel({
  todo,
  setTodo,
  onClick,
}: InputWithLabelProps): React.ReactNode {
  return (
    <>
      <form className="mx-auto mb-16 mt-16 grid w-full max-w-sm gap-1.5">
        <Label htmlFor="text">TODOOO</Label>
        <div className="relative flex gap-2">
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

interface ToDoCardProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function ToDoCard({ todo, todos, setTodos }: ToDoCardProps): React.ReactNode {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleDone(id: number): void {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isDone: true } : todo)),
    );
  }

  function handleDelete(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEdit(e: React.FormEvent, id: number) {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo,
      ),
    );
    setIsEdit(false);
  }

  useEffect(
    function () {
      inputRef.current?.focus();
    },
    [isEdit],
  );

  return (
    <Card className="flex w-72 flex-col justify-between gap-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Todo</CardTitle>
        {todo.isDone && <Badge>Done</Badge>}
      </CardHeader>
      <CardContent>
        {isEdit ? (
          <form
            className="flex flex-col items-center justify-center gap-4"
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

      <CardFooter className="flex flex-row items-center justify-center gap-4">
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
              <>
                <AlertModal handleDelete={handleDelete} id={todo.id} />
              </>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  );
}
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AlertModalProps {
  handleDelete: (id: number) => void;
  id: number;
}

function AlertModal({ handleDelete, id }: AlertModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button size="icon" variant="destructive">
          <Trash2 size={15} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your Todo
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant="destructive" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
