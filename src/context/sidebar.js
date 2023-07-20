import { createContext , useContext , useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = (props) =>{
    const [sidebar, setSidebar] = useState(true);

    return(
        <SidebarContext.Provider value={{sidebar,setSidebar}}>
            {props.children}
        </SidebarContext.Provider>
    )
}


export const useSidebar =()=>useContext(SidebarContext);