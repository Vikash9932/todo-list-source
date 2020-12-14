import React, {useState} from 'react';
import  '../../src/index.css';

const AddItem = (props) =>{
    const [term, setTerm] = useState('');

    var enabledButton = "button";

    const clickButton = () =>{
        enabledButton = "button-enabled";
        if(term){
            props.fetchData(term);
            setTerm('');
        }
    }

    return (
        <div>
            <input 
                className = "input-field"
                type = "text"
                name = "item"
                placeholder = "Add item"
                onChange = {(e) =>{setTerm(e.target.value)}}
                value = {term}
            />  
            <button 
                className = {enabledButton}
                onClick = {clickButton}
            >Add Item</button> 
            {console.log(enabledButton)}
        </div>
    )
}

export default AddItem;