import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const NoteCard = ({ title, description,date }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
      <div>
        {/* title and date */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <span className="text-gray-400">{date}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="flex justify-end mt-2">
        <button className="text-gray-400 hover:text-gray-200 mr-2"><CiEdit /></button>
        <button className="text-gray-400 hover:text-red-400"><MdDelete /></button>
      </div>
    </div>
  );
}

export default NoteCard;
