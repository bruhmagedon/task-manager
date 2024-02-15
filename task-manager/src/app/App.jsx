import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";

const App = () => {
  return (
    <>
      <div className="based-container h-screen bg-white ">
        <div className="based-container bg-[#D8D8D8] h-[80%] w-[80%] rounded-3xl shadow ">
          <Sidebar />
          <Main />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default App;
