import React from "react";
import CheckMark from "../../icons/TaskItemIcons/CheckMark";
import Edit from "../../icons/TaskItemIcons/Edit";
import Close from "../../icons/TaskItemIcons/Close";

const TaskItem = () => {
  return (
    <>
      <div className="h-[84px] px-[8px] py-[6px] ">
        <div className="flex justify-between items-center border-2 rounded-3xl border-[#ABAEEE] px-[25px] gap-[24px] h-full hover:shadow-[#ABAEEE] hover:shadow-sm">
          <div className="icon-hover">
            <CheckMark />
          </div>
          {/* кейс с переполнением текста */}
          <span className="text-left flex-1 h-[30px] leading-[31px] overflow-hidden break-all text-[18px] font-medium">
            Доделать божественный таск-лист
          </span>
          <div className="flex gap-[24px]">
            <div className="icon-hover">
              <Edit />
            </div>
            <div className="icon-hover">
              <Close />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
