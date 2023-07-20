import React, {useRef} from 'react'
import './AddNote.css'
import { useNotes } from '../../context/notes-provider';
import { v4 as uuid} from 'uuid';

export default function AddNote() {
    const textareaRef = useRef(null);
    const {title,setTitle,inputNote,setInputNote,notes,setNotes} = useNotes();

    const handleInput = () => {
        const textarea = textareaRef.current;
    
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;

        textarea.style.overflowY = textarea.scrollHeight > textarea.clientHeight ? 'auto' : 'hidden';
    };
    const handleOnclick = () => {
        let inputEle = document.querySelector('.input');
        if(inputEle.classList.contains('short')){
            document.querySelector('.input input').setAttribute('placeholder','Title');
            inputEle.classList.remove('short');
            textareaRef.current.focus();
        }
    };
    const handleAddButton = () => { 
        let inputEle = document.querySelector('.input');
        if(!inputEle.classList.contains('short')){
            document.querySelector('.input input').setAttribute('placeholder','Take a note..');
            inputEle.classList.add('short');
        }
        if(title.length>0 || inputNote.length>0){

            setNotes([...notes,{"id":uuid() , "title":title,"note":inputNote , "isArchived":false, "isPinned":false}])
        }
        setTitle('');
        setInputNote('');
    };
    
  return (
    <div className='addnote'>
        <div className="input short">
            <input value={title} onChange={(e)=>setTitle(e.target.value)} onClick={handleOnclick}  placeholder="Take a note.." type="text" />
            <textarea value={inputNote} onChange={(e)=>setInputNote(e.target.value)} ref={textareaRef} rows={1} onInput={handleInput} placeholder="Take a note..."  />
            <div className="buttons">    
            <button onClick={handleAddButton}>Add</button>
            </div>
        </div>
    </div>
  )
}
