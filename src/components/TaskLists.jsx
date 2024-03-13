import React,{useEffect} from 'react'
import { IoTrashBinSharp } from "react-icons/io5";


const TaskLists = ({tasks,setTasks}) => {

    function handleDelete(x) {
        const filteredArray = tasks.filter(task => task !== x )
        setTasks(filteredArray)
    }


    return (
        <div className='flex flex-col '>
            <ul className='flex flex-col gap-2'>
                {tasks.map(task => <div key={task} className='flex flex-row justify-between p-2 border-b-2 border-zinc-100 items-center'>
                    <h1 className="text-xs font-semibold text-left " >{task}</h1>
                    <IoTrashBinSharp onClick={()=>handleDelete(task)}/>
                </div>)}
            </ul>
        </div>
    )
}

export default TaskLists
