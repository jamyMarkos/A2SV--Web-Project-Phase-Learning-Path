import Image from "next/image";
import TodoList from "./(users)/todos/TodoList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      {/*  TODO:- Helps us with steaming the section of the page*/}
      {/* TODO: - It doesn't block other sections from rendering! */}
      <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
        {/* <h1>Loading Todos</h1> */}
        <div className="flex space-x-2">
          <TodoList />
        </div>
      </Suspense>
      {/* TODO: To add custom loading message */}
      <Suspense
        fallback={
          <p className="text-blue-500">Loading the Shopping Trolley...</p>
        }
      >
        {/* <h1>Loading Shopping Trolley</h1> */}
        <div className="flex space-x-2">
          <TodoList />
        </div>
      </Suspense>
    </div>
  );
}
