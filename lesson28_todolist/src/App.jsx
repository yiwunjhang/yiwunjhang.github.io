import './App.css';
import React, { useState } from 'react';
import { Button } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todos, setTodos] = useState([
    /*
    { id: 1, value: '買牛奶', isDone: false },
    { id: 2, value: '買麵包', isDone: false },
    { id: 3, value: '買蛋糕', isDone: false },
    */
  ]);

  const onCreate = () => {
    setTodos(prev => {
      var inputTodo = document.getElementById("inputTodo");
      if (inputTodo.value == ""){
        alert("請輸入內容");
      }
      else {
        const newData = {
          id: todos.length, value: inputTodo.value, isDone: false
        }
        if (todos.length > 9){
          alert("未完成事項超過10筆囉!");
          return prev;
        }
        return [...prev, newData]; // 解構後加上新資料
      }
      return prev;

    });
  };
  const onDelete = (id) => {
    // 篩選Array是某一筆todo值
    //const next = todos.filter((todo) => todo.id === id);

    // 傳id進來, 篩選出非此id剩餘的所有資料再回傳
    // eg. id = 1, 回傳 [2,3]
    setTodos(prev => {
      const next = prev.filter((todo) => todo.id !== id)
      return next;
    });
  };

  const onEdit = (id) => {
    setTodos(prev => {
      const next = prev.filter((todo) => todo.id === id)
      //console.log(next);
      return next;
    });
    /*todos.filter((todo) => {
      if (todo.id === id){
        const next = {

        }
      }
      else{
        return todo;
      }
    });*/

  };

  const onCheck = (id) => {
    setTodos(prev => {

    });
  }

  return (
    <div className='App'>
      <h2><FontAwesomeIcon icon={faPenToSquare} /> Todo List</h2>
      <div className=''>
        <div className="input-group input-group-sm">
          <input type="text" className="form-control form-control-lg rounded-left" id="inputTodo" placeholder="請輸入代辦事項" autocomplete="off" />
          <Button onClick={onCreate}>新增</Button>
        </div>
        <ul>
          {
            todos.map((todo) => {
              return (
                <div className="input-group input-group ">
                  <li className='mt-2 form-control d-flex justify-content-between' key={todo.id}>
                    <div className='justify-content-start d-flex align-items-center rounded'>
                      <input type='checkbox' defualtchecked={false} />
                      <span className='mx-1'>{todo.value}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faSquareXmark} style={{color: "#c36969", fontSize: 20}} onClick={() => onDelete(todo.id)}/>
                      {/* <Button onClick={() => onDelete(todo.id)}>刪除</Button> */}
                      {/* <Button onClick={() => onEdit(todo.id)}>修改</Button> */}
                    </div>
                  </li>
                </div>
              );
            })
          }
        </ul>

      </div>
    </div>
  );
}

export default App;

// TODO LIST
/*
1. Create
2. Delete
3. Edit
4. Button 事件觸發
5. 多筆資料宣告陣列儲存
*/