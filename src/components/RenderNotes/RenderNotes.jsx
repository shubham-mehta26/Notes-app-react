import React from "react";
import NotesCard from "../NotesCard/NotesCard";
import { useNotes } from "../../context/notes-provider";
import "./RenderNotes.css";

export default function RenderNotes() {
  const { notes } = useNotes();
  return (
    <div className="rendernotes">
      {notes.some((note) => note.isPinned && !note.isArchived) && <h3>Pinned Notes</h3>}
      <div className="pinned">
        {notes.map((note) => {
          if (note.isPinned && !note.isArchived) {
            return <NotesCard note={note} key={note.id} />;
          }
          return null;
        })}
      </div>
      {notes.some((note) => !note.isPinned && !note.isArchived) && <h3>Notes</h3>}
      <div className="other-notes">
        {notes.map((note) => {
          if (!note.isPinned && !note.isArchived) {
            return <NotesCard note={note} key={note.id} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
