import React, { useState } from "react";
import Todolist from "./Todolist";
import "./Todo.css";

const Todo =()=>
{
    const[input, setInput]=useState("");
    const[item, setItem]=useState([]);

    const itemlist=()=>
    {
         setItem((olditem)=>
         {
                return [...olditem, input];
         })
         setInput("");
    }
    const deleteItem=(id)=>
    {
        console.log("deleted");
        setItem((olditem)=>
        {
            return olditem.filter((val, index)=>
            {
                return index !==id;
            })
        });
    }
    return(
        <React.Fragment>
        <div className="whole">
           <div className="center">
               <h1>ToDo List</h1>
               <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} placeholder="Add an Item"/>
               <button className="bh" onClick={itemlist}>+</button>
               <ol>
                   {
                      item.map((itemvalue, index)=>{ return <Todolist key={index} 
                      id={index} onSelect={deleteItem} data={itemvalue}/>  }) 
                   }   
               </ol>
           </div>
           </div>
        </React.Fragment>
    );
}
export default Todo;