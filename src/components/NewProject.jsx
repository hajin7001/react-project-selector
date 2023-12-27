import Button from "./Button"
import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({onAdd}){
  const classButton = "box border-2 border-green-800 px-2 py-0.5 rounded-lg";

  const modal = useRef();
  // 우리가 Ref를 쓰는 이유는 save button을 눌렀을 때에만 정보가 업댓 되길 바래서 
  // Input에서 정보를 얻어오기 위해서 , ref가 input의 input이나 textarea로 이어져야 한다. -> forward ref 쓰기 
  const title = useRef('');
  const description = useRef('');
  const dueDate = useRef('');

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // 이 project를 App에서도 저장하기 위해 App의 function을 불러왔다. 
    const newData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    };

    if(
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ){
      // show the error modal 
      modal.current.open();
      return;
    }
    onAdd(newData);
    // Save Button을 누른 다음에 input들이 다시 초기화 되어야 한다. 
  }

  return(
  <>
  <Modal ref={modal} buttonCaption="Okay">
    <h2>Invalid Input</h2>
    <p>Oops... looks like you forgot to enter a value</p>
    <p>Please make sure you provide a valid input for every input field</p>
  </Modal>

  <div className="w-[30rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
      <Button
          className={classButton + " hover:ring-1 hover:ring-green-700/75"}>Cancel</Button>
      <Button 
          className={classButton + " text-white bg-green-800 hover:bg-green-900"} onClick={handleSave}>Save</Button>
    </menu>
    <div>
      <Input label="TITLE" ref={title} 
        className="w-75 border-dotted border border-green-800 rounded"/>
      <Input label="DESCRIPTION" ref={description}
        className="w-80 h-45 border-dotted border border-green-800 rounded"/>
      <Input label="DUE DATE" type="date" ref={dueDate}
        className="w-75 border-dotted border border-green-800 rounded"/>
    </div>
  </div>
  </>
  
  )
}
