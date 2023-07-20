import { createContext, useContext , useState } from "react";

const PageContext = createContext();

export const PageProvider = (props) =>{
    const [page, setPage] = useState('home');
    return(
        <PageContext.Provider value={{page, setPage}}>
            {props.children}
        </PageContext.Provider>
    )
}

export const usePage = ()=>useContext(PageContext);