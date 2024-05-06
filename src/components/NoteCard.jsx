import React,{useContext} from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { NotesContext } from "../store/notes-store";

const NoteCard = ({ id,title, description, date }) => {

  const {deleteNote,editNote}=useContext(NotesContext)

  return (
    <div className="bg-gray-800 px-3 py-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
      <div>
        {/* title and date */}
        <div className="flex justify-between items-center mb-2 border-blue-50 border-b-2 border-opacity-20 pb-2">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <span className="text-gray-400">{date}</span>
        </div>
        {/* para */}
        <div
          className='text-justify'
          dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="flex justify-end mt-2 gap-2">
        <button className="text-gray-400 hover:text-green-400  text-xl"
        onClick={()=>editNote(id,title,description,date)}
        ><CiEdit /></button>
        <button className="text-gray-400 hover:text-red-400 text-xl"
        onClick={()=>deleteNote(id)}
        ><MdDelete /></button>
      </div>
    </div>
  );
}

export default NoteCard;
