import React from "react";
import TaskList from "../TaskList/TaskList";

const Main = () => {
    return (
        <>
            <main className="based-container flex-col bg-white h-full w-[70%]">
                <header>
                    <h1>Список задач</h1>
                </header>
                <div className="based-container">
                    <div className="based-container">
                        <TaskList />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
