import React,{useState} from 'react'

const AddTask = ({tasks, setTasks}) => {

    const [text,setText] = useState("")

    const addToList = () => {
        if(!text){
            return alert("Add tasks")
        }

        if(tasks.includes(text)){
            setText("")
            return alert("Task existed in database")
        }

        setTasks(prev => [...prev, text ])
        setText("")
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(!text){
                return alert("add tasks")
            }

            if(tasks.includes(text)){
                setText("")
                return alert("Task existed in database")
            }
    
            setTasks(prev => [...prev, text ])
            setText("")
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
