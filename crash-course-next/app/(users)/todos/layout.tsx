import React, { Children } from "react";
import TodoList from "./TodoList";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="flex">
        <div>
          <TodoList />
        </div>
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
};

export default RootLayout;
