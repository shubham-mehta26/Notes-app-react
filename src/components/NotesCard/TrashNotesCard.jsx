import React from 'react'
import './NotesCard.css'
import { useNotes } from '../../context/notes-provider';

export default function TrashNotesCard(props) {
    const {notes, setNotes , trash , setTrash} = useNotes();

    const restoreNote = () => {
        const updatedNotes = trash.filter((note) => note.id !== props.note.id);
        setTrash(updatedNotes);
        setNotes([...notes, props.note]);
    }
    const pDelete = () => {
        const updatedNotes = trash.filter((note) => note.id !== props.note.id);
        setTrash(updatedNotes);
    }
  return (
    <div className='notes-card'>
      
      <div className="title">{props.note.title ? props.note.title : " " }</div>
      <div className="notes-content">
        <pre>{props.note.note}</pre>
      </div>
      <div className="note-card-buttons note-card-control">
      <i onClick={restoreNote} className='bx bxs-to-top'></i>
      <i onClick={pDelete} className='bx bxs-trash'></i>
      </div>
    </div>
  )
}
