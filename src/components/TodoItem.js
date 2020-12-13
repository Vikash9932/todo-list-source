import React from 'react';
import '../index.css';

const TodoItem = ({item, id, deleteData, isCompleted, toggleCompletion}) =>{
    const onButtonClick =() =>{
        deleteData(id);
    }

    const onTextClick = ()=>{
        toggleCompletion(id);
    }

    return(
        <div className = "list-group-item row item " style = {{width:"103%", margin: "auto"}}>
            
            <span className = "float-left" style = {isCompleted ? {textDecoration:"line-through double"} : {}} onClick={onTextClick}>{item}</span>
            
            <button className = "btn btn-danger btn-sm float-right" onClick = {onButtonClick}>x</button>
        </div>
    )
}

export default TodoItem;