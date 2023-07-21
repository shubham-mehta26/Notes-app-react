import React from 'react'
import './Sidebar.css'
import {usePage} from '../../context/page'
import { useSidebar } from "../../context/sidebar";
import {Link} from 'react-router-dom';

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
        <Link to="/"><li onClick={handleOnClick} id='notes' className='active'><i className='bx bx-bulb' ></i><span>Notes</span></li></Link>
        <Link to="/archived"><li onClick={handleOnClick} id='archive'><i className='bx bx-archive' ></i><span>Archived</span></li></Link>
        <Link to="/trash"><li onClick={handleOnClick} id='trash'><i className='bx bx-trash' ></i><span>Trash</span></li></Link>
      </ul>
    </div>
  )
}
