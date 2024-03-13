import React, {useState} from 'react'

const TextBox = ({tasks,setFrequencyStore,frequencyStore,setFrequentElement,setPrioritize}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    const handleNext = () => {
        if (nextIndex < tasks.length - 1 ) {
            setNextIndex(prevNextIndex => prevNextIndex + 1);
        } else if (currentIndex < tasks.length - 2) {
            setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);
            setNextIndex(currentIndex + 2);
        } else {
            
            const frequentElement = findHighestFrequency(frequencyStore)
            setFrequentElement(frequentElement)
            setPrioritize(prev => !prev)
        }
    };

    function findHighestFrequency(arr) {
        const frequencyMap = {};
    
        // Iterate over each element in the array and count its frequency
        arr.forEach(element => {
            if (frequencyMap[element]) {
                frequencyMap[element]++;
            } else {
                frequencyMap[element] = 1;
            }
        });

        const sortedArray = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);
        const reorderedObject = Object.fromEntries(sortedArray);
        return reorderedObject
    
        // Find the element with the highest frequency
        // let maxFrequency = 0;
        // let mostFrequentElement = null;
    
        // for (const key in frequencyMap) {
        //     if (frequencyMap[key] > maxFrequency) {
        //         maxFrequency = frequencyMap[key];
        //         mostFrequentElement = key;
        //     }
        // }
    
        // return mostFrequentElement;
    }
    
    const handleYes = () => {
        setFrequencyStore(prev => [...prev,tasks[currentIndex]])
        handleNext()
    }
    
    const HandleNo = () => {
        setFrequencyStore(prev => [...prev,tasks[nextIndex]])
        handleNext()
    }


    return (
        <div className='flex flex-col gap-4 items-center bg-zinc-200 p-4 rounded-md'>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <h1 className='text-xs text-zinc-500 font-semibold'>is</h1>
                <h1 className='rounded-md font-semibold text-2xl'>{tasks[currentIndex]}</h1>
                <h1 className='text-xs text-zinc-500 font-semibold'>more important than</h1>
                <h1 className='rounded-md font-semibold text-2xl'>{tasks[nextIndex]}?</h1>
            </div>
            <div className='flex flex-row gap-3'>
                <button onClick={handleYes} className='w-16 text-xs px-2 py-1 rounded-md cursor-pointer text-white font-semibold bg-cyan-600'>Yes</button>
                <button onClick={HandleNo} className='w-16 text-xs px-2 py-1 rounded-md cursor-pointer text-white font-semibold bg-cyan-600'>No</button>

            </div>
        </div>
    )
}

export default TextBox
