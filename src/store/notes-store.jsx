import React, { createContext, useEffect, useState } from "react";

export const NotesContext = createContext({});

const NotesContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    // notes form 
    const [title,setTitle]=useState("");
    const [description, setDescription] = useState("");

    const [notes,setNotes]=useState([]);

    useEffect(()=>{
        const storedNotes=JSON.parse(localStorage.getItem("notes"));
        if (storedNotes) {
            setNotes(storedNotes);
        }
        else{
            setNotes([])
        }
    },[])

    const toggleForm = () => {
        setToggle(!toggle);
        setTitle("");
        setDescription("");
    };

    const addNote=()=>{
        const newNote=
        {
            id:Date.now(),
            title,
            description,
            date: new Date().toLocaleDateString(),
        }
        console.log(description);
        setNotes([...notes,newNote]);
        setTitle("");
        setDescription("");
        setToggle(!toggle);

        localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
    }

    const deleteNote=()=>{

    }

    const editNote=()=>{

    }

    return (
        <NotesContext.Provider
            value={{
                toggle, 
                toggleForm,
                title,
                setTitle,
                description, 
                setDescription,
                addNote,
                notes
            }}
        >
            {children}
        </NotesContext.Provider>
    );
};

export default NotesContextProvider;
