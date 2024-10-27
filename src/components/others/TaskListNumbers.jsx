import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex  justify-between gap-5 py-10">
      <div className="h-40 w-[45%] text-white font-semibold bg-red-400 rounded-lg p-10">
        <h2 className="text-3xl">0</h2>
        <h3 className="text-xl">New Task</h3>
      </div>
      <div className="h-40 w-[45%] text-white font-semibold bg-blue-400 rounded-lg p-10">
        <h2 className="text-3xl">0</h2>
        <h3 className="text-xl">New Task</h3>
      </div>
      <div className="h-40 w-[45%] text-white font-semibold bg-green-400 rounded-lg p-10">
        <h2 className="text-3xl">0</h2>
        <h3 className="text-xl">New Task</h3>
      </div>
      <div className="h-40 w-[45%] text-white font-semibold bg-yellow-400 rounded-lg p-10">
        <h2 className="text-3xl">0</h2>
        <h3 className="text-xl">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
