import { useState } from "react"

export default function NewTask(){
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(event){
    setEnteredTask(event.target.value);
  }

  function handleClick(){
    setEnteredTask('');
    

  }
  return <div className="flex items-center gap-4">
    <input 
      type="text" 
      className="w-64 px-2 py-1 rounded-sm bg-green-200"
      onChange={handleChange}
      value={enteredTask}/>
    <button className="bg-green-700">Add task</button>
  </div>
}