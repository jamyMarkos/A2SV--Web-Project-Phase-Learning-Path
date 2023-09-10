import { Todo } from "@/typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  };
};
const fetchTodo = async (todoId: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { cache: "force-cache" }
  );
  const todo = await res.json();
  return todo;
};
const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo: Todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");

  const todos: Todo[] = await res.json();
  //   for this DEMO, we are only prebuilding the first 10 pages to avoid rate limited by the DEMO API
  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}

// function authenticate() {
//   // code to autheticate user
// }

// function authorize() {
//   // code to authorize resources
// }

// TODO: * Higher functions
// function getData(authenticate, authorize) {
//   if(authenticate()){
//     if (authorize()){
//       // fetch data
//     }
//   }
// }
