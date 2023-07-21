import React from "react";
import "./NotesCard.css";
import { useNotes } from "../../context/notes-provider";

export default function NotesCard(props) {
  const { notes, setNotes, trash, setTrash } = useNotes();

  

  const pinToggle = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === props.note.id) {
        return { ...note, isPinned: !note.isPinned };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const archiveToggle = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === props.note.id) {
        return { ...note, isArchived: !note.isArchived };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const sendToTrash = () => {
    const updatedNotes = notes.filter((note) => note.id !== props.note.id);
    setTrash([...trash, props.note]);
    setNotes(updatedNotes);
  };

  
  return (
    <div className="notes-card">
      <div className="pin-button note-card-control">
        <i
          onClick={pinToggle}
          className={`${props.note.isPinned ? "bx bxs-pin" : "bx bx-pin"}`}
        ></i>
      </div>
      <div className="title">{props.note.title ? props.note.title : " "}</div>
      <div className="notes-content">
        <pre>{props.note.note}</pre>
      </div>
      <div className="note-card-buttons note-card-control">
        <i
          onClick={archiveToggle}
          className={`${
            props.note.isArchived ? "bx bx-archive-out" : "bx bx-archive-in"
          }`}
        ></i>
        <i onClick={sendToTrash} className="bx bx-trash"></i>
      </div>
    </div>
  );
}
