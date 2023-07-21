import React from 'react'
import './Trash.css'
import '../NotesCard/NotesCard.css'
import {useNotes} from '../../context/notes-provider'
import TrashNotesCard from '../NotesCard/TrashNotesCard.jsx'

export default function Trash() {
  const {trash} = useNotes();
  return (
  
    <div className='trash'>
    <h3>Trash</h3>
    <div className="trash-cards">

      {
        trash.map((note)=>{
          return <TrashNotesCard note={note} key={note.id} />
        })
      }
    </div>
    </div>
  
  )
}
