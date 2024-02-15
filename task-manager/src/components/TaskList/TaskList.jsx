import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  return (
    <>
      {/* скорее всего нужен будет скролл */}
      <div className="flex flex-col flex-1 w-full py-3 overflow-auto scrollbar-no">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </>
  );
};

export default TaskList;
