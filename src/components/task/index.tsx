/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { ChevronUp, Clock, PenTool } from "react-feather";
import tw from "twin.macro";
import TodoForm from "./Todo/TodoForm";
import TodoItem from "./Todo/TodoItem";

export default function Task() {
  const [showForm, setShowForm] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Cross-reference with Jeanne for Case #192813",
      date: "2021-01-08",
      isComplete: false,
      description: "lorem ipsum",
    },
    {
      id: 2,
      title: "Check and Revise Homework from Andre Gonzales",
      date: "2021-01-08",
      isComplete: false,
      description: "",
    },
  ]);
  return (
    <div
      tw="border-2 rounded-md p-5"
      style={{
        width: 734,
        height: 734,
        position: "fixed",
        bottom: 100,
        right: 30,
      }}
    >
      <div tw="flex justify-between">
        <select
          name="task"
          id="task"
          tw="w-56 outline-none border border-gray-200 rounded-md px-5"
        >
          <option
            tw="w-56 outline-none border border-gray-200 rounded-md px-5"
            value="personal_errands"
          >
            Personal Errands
          </option>
          <option
            tw="w-56 outline-none border border-gray-200 rounded-md px-5"
            value="urgent_todo"
          >
            Urgent Todo
          </option>
        </select>
        <button
          onClick={() => {
            setShowForm(true);
          }}
          tw="px-3 py-2 text-white bg-blue-500 rounded-md"
        >
          New Task
        </button>
      </div>

      <div style={{ overflow: "hidden", height: 550 }} tw="mt-5">
        <div style={{ overflow: "auto", height: "100%" }} tw="px-4">
          {todoList.map((todo) => {
            return <TodoItem key={todo.id} {...todo} setTodo={setTodoList} />;
          })}
          {showForm && <TodoForm setTodo={setTodoList} setShow={setShowForm} />}
        </div>
      </div>
    </div>
  );
}
