import { createContext,useContext,useState } from "react";

const NotesContext = createContext();

export const NotesProvider = (props)=>{
    const [title,setTitle] = useState("");
    const [inputNote,setInputNote] = useState("");
    const [notes,setNotes] = useState([]);
    // console.log(notes);

    return(
        <NotesContext.Provider value={{title,setTitle,inputNote,setInputNote,notes,setNotes}}>
            {props.children}
        </NotesContext.Provider>
    )

}


export const useNotes =()=> useContext(NotesContext);