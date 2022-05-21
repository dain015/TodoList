import React, { useEffect } from "react";
import { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import './Template.css';

function TodoInsert({ onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate }) {
    const [value, setValue] = useState("");
    const onChange = e =>{
        setValue(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    }
    useEffect(()=> {
        if(selectedTodo){
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);
    return(
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)} : onSubmit}>
                <input placeholder="to do" value={value} onChange={onChange}></input>
                {selectedTodo ? (
                    <div className="rewrite">
                        <TiTrash onClick={() => {onRemove(selectedTodo.id)}}/>
                        <TiPencil onClick={() => {onUpdate(selectedTodo.id, value)}}/>
                    </div>
                ) : (<button type="submit">
                    <MdAddCircle />
                </button>)}
            </form>
        </div>
    );
};

export default TodoInsert;