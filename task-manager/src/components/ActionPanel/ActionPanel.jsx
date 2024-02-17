import React from "react";
import Add from "../../icons/ActionPanelIcons/Add";
import Find from "../../icons/ActionPanelIcons/Find";
import Filter from "../../icons/ActionPanelIcons/Filter";
import Sort from "../../icons/ActionPanelIcons/Sort";
import DropDown from "../../icons/ActionPanelIcons/DropDown";

const ActionPanel = () => {
  return (
    <>
      <div className="w-full h-[9.5%] px-[18px] py-[5px] shrink-0 flex justify-between items-center gap-[25px]">
        <div className="action-buttons">
          <Add />
        </div>
        <div className="action-buttons">
          <Find />
          <input placeholder="Поиск задачи" />
        </div>
        <div className="action-buttons">
          <Sort />
          <p>Сортировка</p>
          <DropDown />
        </div>
        <div className="action-buttons">
          <Filter />
          <p>Фильтр</p>
          <DropDown />
        </div>
      </div>
    </>
  );
};

export default ActionPanel;
