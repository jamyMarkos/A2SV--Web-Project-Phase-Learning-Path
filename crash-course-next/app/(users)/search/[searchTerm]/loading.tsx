import React from "react";
// TODO: * loading is reserved keyword for loading component - works out of the box
const Loading = () => {
  return (
    <main className="flex flex-col items-center justify-center space-y-4 mt-10">
      <h2 className="text-blue-500 font-bold text-5xl">Loading...</h2>
      <p className="font-light text-2xl">Hopefully not for too long :)</p>
    </main>
  );
};

export default Loading;
