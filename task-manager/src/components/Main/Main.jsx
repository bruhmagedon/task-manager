import React from "react";
import TaskList from "../TaskList/TaskList";

const Main = () => {
  return (
    <>
      <main className="based-container flex-col bg-white h-full w-[70%]">
        {/* компонент заголовочный */}
        <header className="based-container min-h-[13%] w-full  ">
          <h1 className="text-3xl font-medium gradient-h1">Список задач</h1>
        </header>
        {/*  */}
        <section className="based-container flex-col h-[87%] w-full gap-[5px] p-11">
          {/* блок фильтров */}
          <div className="w-full h-[9.5%] border-2 px-3 shrink-0"></div>
          <TaskList />
        </section>
      </main>
    </>
  );
};

export default Main;
