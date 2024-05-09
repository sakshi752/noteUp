import React, { useContext } from 'react';
import { IoAdd } from "react-icons/io5";
import NoteCard from './NoteCard';
import { NotesContext } from "../store/notes-store";

const Notes = () => {
  const { notes, toggleForm,searchQuery,setSearchQuery,searchNotes } = useContext(NotesContext);

  const handleSearch = (event) => {
    event.preventDefault();
    searchNotes(searchQuery);
  }
  return (
    <section className='text-white  flex flex-col gap-8 mt-10 px-2 py-3'>
      <div className='flex flex-col md:flex-row items-center md:justify-between gap-5'>
        <h1 className="text-3xl font-bold">Your Notes</h1>
        {/* form for search feature */}
        <form
          onSubmit={() => handleSearch(event)}
          className='w-[65vw] md:w-[40vw]'>
          <input
            type="search"
            placeholder='Search your notes'
            className='w-[100%] py-2 px-4 bg-gray-800 rounded-lg text-white text-lg outline-none border-none focus:ring focus:ring-blue-500'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      {/* notes section  */}
      {notes.length !== 0 ?
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {notes.map((note) => (
            <NoteCard key={note.id} id={note.id} title={note.title} description={note.description} date={note.date} />
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
