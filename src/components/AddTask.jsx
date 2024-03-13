import React,{useState} from 'react'

const AddTask = ({tasks, setTasks,text,setText,saveTasksToLocalStorage}) => {


    const addToList = () => {
        if(!text){
            alert("Add tasks")
            return 
        }

        if(tasks.includes(text)){
            alert("Task existed in database")
            setText("")
            return 
        }

        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks, text];
            saveTasksToLocalStorage(updatedTasks); // Save tasks to localStorage
            return updatedTasks; // Return updated tasks array
        });
        
        setText("")
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (!text) {
                alert("Please add a task");
                return;
            }
    
            if (tasks.includes(text)) {
                alert("Task already exists");
                setText("");
                return;
            }
    
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks, text];
                saveTasksToLocalStorage(updatedTasks); // Save tasks to localStorage
                return updatedTasks; // Return updated tasks array
            });
    
            setText("");
        }
    };

    return (
        <div className='flex flex-row gap-3 justify-between border-b-2 p-2 '>
            <input className='text-xs appearance-none bg-transparent flex-grow p-1' type="text" value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeyDown} placeholder='Enter task'/>
            <button className=' text-xs px-2 py-1 rounded-md text-white font-semibold bg-cyan-600' onClick={addToList} type='button'>Add task</button>
        </div>
    )
}

export default AddTask
