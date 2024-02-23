import TaskList from "../TaskList/TaskList";
import ActionPanel from "../ActionPanel/ActionPanel";

import { TASK_DATA, TaskProvider } from "../../context/TaskContext";

const Main = () => {
  return (
    <>
      <TaskProvider value={TASK_DATA}>
        {/* №два aside по 20, остальной блок растянем через flex-1*/}
        <main className="based-container flex-col bg-white h-full flex-1">
          {/* компонент заголовочный */}
          <header className="based-container min-h-[13%] w-full">
            <h1 className="text-3xl font-medium gradient-h1 text-center">
              Список задач
            </h1>
          </header>
          <section className="based-container flex-col h-[87%] w-full gap-[5px] p-11">
            {/* компонентблок фильтров */}
            <ActionPanel />
            {/* №кейс со скролом */}
            <TaskList />
          </section>
        </main>
      </TaskProvider>
    </>
  );
};

export default Main;
