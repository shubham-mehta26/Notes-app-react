import React from 'react'
import './Archived.css'
import '../NotesCard/NotesCard.css'
import {useNotes} from '../../context/notes-provider'
import NotesCard from '../NotesCard/NotesCard'

export default function Archived() {
  const {notes} = useNotes();
  return (
    <div className='archived'>
      <h3>Archived</h3>
      <div className="archived-cards">

      {notes.map((note) => {
          if (note.isArchived) {
            return <NotesCard note={note} key={note.id} />;
          }
          return null;
        })}
      </div>
    </div>
  )
}
