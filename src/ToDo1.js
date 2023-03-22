import './App.css';
import React from 'react';
import { useState } from 'react';

function ToDo1() {

  const [inputData,setInputData] = useState('');
  const [items,setItems] = useState([]);

  const createList = () =>{
    if(!inputData){
      
    }else{
      setItems([...items,inputData]);
      setInputData('')
    }   
  }

  const deleteItem = (id) =>{
    const updatedItems = items.filter((elem,index) =>{
      return index !== id;
    });
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <div className='main'>
        <div className='todo-main-content'>
          
          <div className='todo-main-input'>
              <input type="text" name="txt1" placeholder="Please Type Here"
              id="txt1" value={inputData}
              onChange={(e)=>setInputData(e.target.value)}/>

          <i className="fa fa-plus" onClick={createList}></i>
          </div>

          <div className='output-area'>
            {
              items.map((elem,index)=>{
                return(
                  <div className='singleItem' key={index}>
                    <h3>{elem}</h3>
                    <i className="fa fa-trash" onClick={deleteItem}></i>
                  </div>
                )
              })
            }
          </div>


        </div>
      </div>
    </div>
  );
}

export default ToDo1;
