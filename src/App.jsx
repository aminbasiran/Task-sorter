import { useState } from 'react'
import AddTask from './components/AddTask'
import TaskLists from './components/TaskLists'
import TextBox from './components/TextBox'
import { IoIosArrowDropright } from "react-icons/io";


function App() {
  const [tasks, setTasks] = useState([])
  const [frequencyStore,setFrequencyStore] = useState([])
  const [prioritize,setPrioritize] = useState(false)
  const [frequentElement,setFrequentElement] = useState({})


  function handleOpenTextBox(){
    if(tasks.length < 2){
      return
    }

    setPrioritize(prev => !prev)
    setFrequentElement({})
  }

  function handleClearAll(){
    setTasks([])
    setFrequencyStore([])
    setPrioritize(false)
    setFrequentElement([])
  }

  return (
    <div className='flex flex-col gap-2 '>
      <div className='flex flex-col items-start'>
        <h1 className='text-cyan-500 text-5xl font-extrabold'>Sortify!</h1>
        <h1 className='text-md font-semibold text-zinc-500'>Your friendly task sorter!</h1>
      </div>
      <div className='flex flex-col gap-2 p-3 bg-white shadow-lg rounded-md flex-grow'>
          <AddTask tasks={tasks} setTasks={setTasks}/>
          <TaskLists tasks={tasks} setTasks={setTasks}/>
          <button onClick={handleOpenTextBox} className='text-xs px-2 py-1 rounded-md text-white font-semibold bg-cyan-600' type='button'>Prioritize</button>
          {prioritize && <TextBox tasks={tasks} setPrioritize={setPrioritize} setFrequentElement={setFrequentElement} frequencyStore={frequencyStore} setFrequencyStore={setFrequencyStore}/> }
          {Object.keys(frequentElement).length !== 0 && 
            <ol>
                  {Object.keys(frequentElement).map((task,index) => <li key={index} className='text-xs font-semibold'>{task}</li>)}
            </ol>
          }

      </div>
          {Object.keys(frequentElement).length !== 0 && <button onClick={handleClearAll} className='text-xs px-2 py-1 w-1/4 mx-auto rounded-md text-white font-semibold bg-orange-600' type='button'>Clear all</button>}
    </div>
  )
}

export default App
