import { createContext,useContext,useState , useEffect  } from "react";

const NotesContext = createContext();

const localNotes = JSON.parse(localStorage.getItem("notes")) || [];
const localTrash = JSON.parse(localStorage.getItem("trash")) || [];


export const NotesProvider = (props)=>{
    const [title,setTitle] = useState("");
    const [inputNote,setInputNote] = useState("");


    const [notes,setNotes] = useState(localNotes);
    const [trash,setTrash] = useState(localTrash);
    useEffect(() => {
        // console.log(notes);
        // console.log(trash);
        localStorage.setItem("notes",JSON.stringify(notes));
        localStorage.setItem("trash",JSON.stringify(trash));
      }, [notes,trash]);

    return(
        <NotesContext.Provider value={{title,setTitle,inputNote,setInputNote,notes,setNotes , trash , setTrash}}>
            {props.children}
        </NotesContext.Provider>
    )

}


export const useNotes =()=> useContext(NotesContext);