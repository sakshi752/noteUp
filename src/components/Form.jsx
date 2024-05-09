import React, { useContext, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NotesContext } from "../store/notes-store";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Form = () => {
  const module = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const { toggleForm, formTitle, title, setTitle, description, setDescription, addNote, editNote } = useContext(NotesContext);


  const handleSubmit = (event) => {
    addNote(event);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-slate-900 bg-opacity-50 z-10">
      <div className='shadow shadow-white rounded bg-slate-800 w-[90vw] md:w-[50vw] h-[70vh] text-white px-4 pt-10 flex flex-col gap-7'>
        <div className='flex justify-between'>
          <h1 className='text-xl tracking-wide font-semibold'>
            {formTitle === "Add" ? "Add New Notes" : "Edit Note"}
          </h1>
          <button
            className='text-3xl font-bold'
            onClick={toggleForm}> <AiOutlineCloseCircle /></button>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-[0.8rem]'>
          <input
            className='w-full text-black py-[0.6rem] px-[1rem] rounded outline-none'
            type="text" placeholder='Enter Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <ReactQuill
            className='w-full rounded bg-white text-black h-[12rem] overflow-y-scroll'
            modules={module}
            formats={formats}
            value={description}
            onChange={(value) => setDescription(value)} // Update the description state directly when we use reactquill
          />
          <button className='text-black bg-white py-2 w-[30%] md:w-[20%] rounded text-lg'>
            {formTitle === "Add" ? "Add Note" : "Update Note"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
