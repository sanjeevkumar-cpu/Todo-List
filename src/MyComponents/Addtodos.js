import React from 'react';
import { useState } from 'react';

export const Addtodos = ({ addTodo }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Add title or description");
        } else {
            addTodo( title, desc );
            setTitle("");  
            setDesc("");  
        }
    }

    return (
        <div className='container my-3'>
            <h3>Add Some Todos</h3>
            <form onSubmit={submit}>
                <div className="form-group my-3">
                    <label htmlFor="title">Todo Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control" 
                        id="title" 
                        placeholder="Enter todo" 
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="desc">Todo Description</label>
                    <input 
                        type="text" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        className="form-control" 
                        id="desc" 
                        placeholder="Description" 
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
