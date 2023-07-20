import React,{useEffect} from 'react'
import {useNotes} from '../../context/notes-provider'

export default function RenderNotes() {
    const {notes} = useNotes();
    useEffect(() => {
        console.log(notes);
    }, [notes])
  return (
    <div className='rendernotes'>
      
    </div>
  )
}
