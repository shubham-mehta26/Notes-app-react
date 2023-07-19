import React from 'react'
import './Sidebar.css'
// import {usePage} from '../../context/page'

export default function sidebar() {
  // const state = usePage();
  // console.log(state.page);

  return (
    <div className='sidebar'>
      <ul>
        <li id='notes' className='active'><i className='bx bx-bulb' ></i><span>Notes</span></li>
        <li id='archive'><i className='bx bx-archive' ></i><span>Archived</span></li>
        <li id='trash'><i className='bx bx-trash' ></i><span>Trash</span></li>
      </ul>
    </div>
  )
}
