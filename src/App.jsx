import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Footer from "./components/Footer";
import { nanoid } from "nanoid";

export default function App() {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  //注意：seldata在这里只是初始值，为0，当我们点击复选框必须要手动更新seldata
  let [seldata, setSelect] = useState(
    data.filter((item) => item.done !== false).length || 0
  );

  //1.新增一条待办事项
  let handleKey = (event) => {
    const { keyCode, target } = event;
    //console.log(keyCode, target);
    //1.判断是否按下空格
    if (keyCode !== 13) return;
    //2.判断输入内容是否为空
    if (target.value.trim() === "") {
      alert("输入不能为空");
    } else {
      //3.将输入内容维护进状态中
      setData([
        {
          id: nanoid(),
          done: false,
          txt: target.value,
        },
        ...data,
      ]);
    }
    target.value = "";
  };

  //2.修改复选框状态
  let changeDone = (id, done) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.done = done;
        }
        //修改复选框状态，紧接着手动更新seldata
        setSelect(data.filter((item) => item.done !== false).length);
        return item;
      })
    );
  };

  //3.删除所有选中的
  let onClear = () => {
    data = data.filter((item) => item.done !== true);
    setData(data);
    setSelect(data.filter((item) => item.done !== false).length);
  };

  //4.删除某一行
  let delItem = (id) => {
    data = data.filter((item) => item.id !== id);
    setData(data);
    setSelect(data.filter((item) => item.done !== false).length);
  };

  return (
    <div id="todoapp">
      {/* 标题 */}
      <div className="title">
        <h3>TODOS</h3>
      </div>

      {/* input框 */}
      <input
        onKeyDown={(e) => handleKey(e)}
        className="create-todo"
        placeholder="请输入待完成的事项并以回车键结束！"
      />

      {/* 列表 */}
      {data.map((item) => {
        return (
          <List
            key={item.id}
            itemData={item}
            changeDone={changeDone}
            delItem={delItem}
          />
        );
      })}

      {/* Footer */}
      <Footer seldata={seldata} data={data} onClear={onClear} />
    </div>
  );
}
