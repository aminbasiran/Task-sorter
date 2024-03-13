import { useState,useEffect } from 'react'
import AddTask from './components/AddTask'
import TaskLists from './components/TaskLists'
import TextBox from './components/TextBox'


function App() {


  useEffect(()=>{
    const retrievedFromLocalStorage = getTasksFromLocalStorage()
    console.log(retrievedFromLocalStorage)
    setTasks(retrievedFromLocalStorage)
  },[])


  const [tasks, setTasks] = useState([])
  const [frequencyStore,setFrequencyStore] = useState([])
  const [prioritize,setPrioritize] = useState(false)
  const [frequentElement,setFrequentElement] = useState({})
  const [text,setText] = useState("")


  function saveTasksToLocalStorage(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  function getTasksFromLocalStorage () {
    const tasksJSON = localStorage.getItem('tasks');
    return tasksJSON ? JSON.parse(tasksJSON) :[];
  };


  function handleOpenTextBox(){
    if(tasks.length < 2){
      return
    }

    if(text.length !== 0){
      setText("")
      return alert("Please add your task first")
    }


    setPrioritize(prev => !prev)
    setFrequentElement({})
  }

  function handleClearAll(){
    setTasks([])
    setFrequencyStore([])
    setPrioritize(false)
    setFrequentElement([])
    localStorage.clear()
  }

  return (
    <div >
      
      <div className='flex flex-col gap-2 '>
        <div className='flex flex-col items-start'>
          <h1 className='text-cyan-500 text-5xl font-extrabold'>Sortify!</h1>
          <h1 className='text-md font-semibold text-zinc-500'>Your friendly task sorter.</h1>
        </div>
          <h1 className='text-xs text-centerfont-semibold text-zinc-500'>This app utilizes the prioritization matrices to determine the order of priority.</h1>
        <div className='flex flex-col gap-2 p-3 bg-white/50 shadow-lg rounded-md flex-grow'>
            <AddTask saveTasksToLocalStorage={saveTasksToLocalStorage} tasks={tasks} setTasks={setTasks} text={text} setText={setText}/>
            <TaskLists tasks={tasks} setTasks={setTasks}/>
            <button onClick={handleOpenTextBox} className='text-xs px-2 py-1 rounded-md text-white font-semibold bg-cyan-600' type='button'>Prioritize</button>
            {prioritize && <TextBox tasks={tasks} setPrioritize={setPrioritize} setFrequentElement={setFrequentElement} frequencyStore={frequencyStore} setFrequencyStore={setFrequencyStore}/> }
            
        </div>
        {Object.keys(frequentElement).length !== 0 && 
              <div className='p-3 shadow-lg rounded-md'>
                    {Object.keys(frequentElement).map((task,index) => <h1 key={index} className='text-xs font-semibold'>{task}</h1>)}
              </div>
            }
        <button onClick={handleClearAll} className='text-xs px-2 py-1 w-1/4 mx-auto rounded-md text-white font-semibold bg-orange-600' type='button'>Clear all</button>
      </div>
      {/* <div className='absolute w-[150px] aspect-square bg-cyan-400 bottom-0 blur-[80px] -z-20'> */}
      <div className='float-cyan absolute w-[200px] aspect-square bg-cyan-300 bottom-[200px] left-[60px] blur-[110px] -z-20'></div>
      {/* <div className='absolute w-[130px] aspect-square bg-indigo-400 top-0 right-0 blur-[80px] -z-20'></div> */}
      <div className='absolute w-[100px] aspect-square bg-fuchsia-600 bottom-[160px] right-0 blur-[80px] -z-20'></div>
    </div>
  )
}

export default App
