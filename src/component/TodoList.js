import React, { useState } from "react";
import "./style.css";
const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]); 
    const [isEditItem, setisEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false)

    // add items

    const addItem = () => {
      if(!inputData){
        alert("please enter the data");
      }else if (inputData && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputData };
          }
          return curElem;
        })
      );

      setInputData("");
      setisEditItem(null);
      setToggleButton(false);
    }else
    {
        const newInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      }
        setItems([...items, newInputData]);
        setInputData("");
      }
    };

    // edit items

    const editItem = (index) => {
      const item_todo_edited = items.find((curElem)=> {
          return  curElem.id === index;
      });
      setInputData(item_todo_edited.name);
      setisEditItem(index);
      setToggleButton(true);
    }
    
    // delete data 
    
    const deleteItem = (index) => {
      const updateItems = items.filter((curElem) => {
        return curElem.id !== index;
      });
      setItems(updateItems);
    };

  // remove all

    const Removeall = () => {
        setItems([])
    }
    return (
      <>
        <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./image/meh.png" alt="todolist" className="logo"/>
          </figure>
        <div className="addItems">
          <input 
              type="text" 
              palceholder="add items" 
              className="form-control"
              value={inputData}
              onChange={(event)=> setInputData(event.target.value)} />
            {toggleButton ? 
            ( <i className="fa fa-solid fa-edit add-btn" onClick={addItem} ></i>) :
            ( <i className="fa fa-solid fa-plus add-btn" onClick={addItem} ></i>)            
            }

        </div>

        {/* show your items */}

        <div className="showItems">
          {
            items.map((curElem)=> {
                return(
                  <>
                    <div className="eachItem" key={curElem.id}>
                      <h2>{curElem.name}</h2>
                      <div className="todo-btn">
                      <i className="fa-solid fa-pen-to-square add-btn"
                         onClick={() => editItem(curElem.id)}
                      ></i>
                      <i className="fa-solid fa-trash add-btn"
                         onClick={() => deleteItem(curElem.id)} 
                      ></i>
                      </div>
                    </div>
                  </>
                )
            })
          }

          
        </div>

        <div className="showItems">
          <button className="btn effect04" 
                  data-sm-link-text="Remove All"
                   onClick={Removeall}>
            <span> CHECK LIST</span>
          </button>
        </div>

        </div>

        </div>
        
      </>

    )

}

export default Todo;