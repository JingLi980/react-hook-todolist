import React from "react";
import "./index.css";

export default function Footer(props) {
  let { data, seldata, onClear } = props;
  return (
    <div className="optcontainer">
      <span>
        已选<span>{seldata}</span>个
      </span>
      &nbsp;&nbsp;&nbsp;
      <span>
        未选<span>{data.length - seldata}</span>个
      </span>
      &nbsp;&nbsp;&nbsp;
      <span>
        删除所选
        <a href="#javascript" onClick={onClear}>
          clear
        </a>
      </span>
    </div>
  );
}
