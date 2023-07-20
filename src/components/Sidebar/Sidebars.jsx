import React from 'react'
import './Sidebar.css'
import {usePage} from '../../context/page'
import { useSidebar } from "../../context/sidebar";

export default function Sidebar() {
  const { setPage} = usePage();
  const { sidebar  } = useSidebar();
  
  const handleOnClick = (e) => {
    let id;
    if(e.target.tagName === 'LI'){
      id = e.target.id;
    }
    else{
      id = e.target.parentElement.id;
    }
    setPage(id);
    document.querySelectorAll('.sidebar li').forEach((item) => {
      if(id === item.id){
        item.classList.add('active');
      }else{
        item.classList.remove('active');
      }
    })
  }

  return (
    <div className={`sidebar ${sidebar? "short" : ""}`}>
      <ul>
        <li onClick={handleOnClick} id='notes' className='active'><i className='bx bx-bulb' ></i><span>Notes</span></li>
        <li onClick={handleOnClick} id='archive'><i className='bx bx-archive' ></i><span>Archived</span></li>
        <li onClick={handleOnClick} id='trash'><i className='bx bx-trash' ></i><span>Trash</span></li>
      </ul>
    </div>
  )
}
