import React, { useContext } from 'react';
import {NotesContext} from "../store/notes-store";

const Header = () => {

  const {toggleForm}=useContext(NotesContext);

  return (
    <div className='flex justify-between items-center'>
      {/* logo */}
      <h1 className='text-4xl tracking-wider font-semibold'>NoteUp</h1>
      <button className='bg-white text-black px-2 py-2 rounded text-lg '
      onClick={toggleForm}
      >Add Note</button>
    </div>
  )
}

export default Header
