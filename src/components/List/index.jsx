import React from "react";
import "./index.css";

export default function List(props) {
  let { changeDone, delItem } = props;
  let { done, txt, id } = props.itemData;

  return (
    <div className="todo-list">
      <div className="listleft">
        {/* 复选框 */}
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => changeDone(id, e.target.checked)}
        />
        {/* 待办事项内容 */}
        <span>{txt}</span>
      </div>

      {/* 删除事项 */}
      <div className="listright">
        <span onClick={(e) => delItem(id)}>x</span>
      </div>
    </div>
  );
}
