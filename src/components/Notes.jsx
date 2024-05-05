import React, { useContext } from 'react';
import { IoAdd } from "react-icons/io5";
import NoteCard from './NoteCard';
import { NotesContext } from "../store/notes-store";

const Notes = () => {
  const { notes,toggleForm } = useContext(NotesContext);

  return (
    <section className='text-white px-4 md:px-9 lg:px-16 py-5 flex flex-col gap-8 mt-4'>
      <div>
        <h1 className="text-3xl font-bold">Your Notes</h1>
      </div>

      {notes.length !== 0 ?
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10'>
          {notes.map((note) => (
            <NoteCard key={note.id} title={note.title} description={note.description} date={note.date} />
          ))}

        </div> :
        <div className='flex justify-center items-center mt-20 gap-5'>
           <h1 className='text-xl'>There are no notes, Add your notes.
        </h1>
        <button
        onClick={toggleForm}
        className='text-2xl font-extrabold'> <IoAdd /></button>
        </div>
       }
    </section>
  );
};

export default Notes;
