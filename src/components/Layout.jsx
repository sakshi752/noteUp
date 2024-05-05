import React, { useContext,useState } from 'react';
import { NotesContext } from '../store/notes-store';
import Form from "./Form";
import Notes from './Notes';


const Layout = () => {

    const { toggle } = useContext(NotesContext);
    return (
        <div className='h-screen'> 
            {toggle && <Form/>}
            <Notes/>
        </div>
    )
}

export default Layout
