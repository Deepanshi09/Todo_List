import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Todolist=(props)=>
{
      return(
        <React.Fragment>
             <div className="liststyle">
             <li><FontAwesomeIcon className="iconf" icon={faTimes} 
             onClick={()=>{props.onSelect(props.id);}}></FontAwesomeIcon> {props.data}</li> 
             </div>
        </React.Fragment>
    );
}
export default Todolist;