import React, { createContext, useEffect, useState } from "react";

export const NotesContext = createContext({});

const NotesContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    // notes form 
    const [formTitle,setFormTitle]=useState("Add")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem("notes"));
        if (storedNotes) {
            setNotes(storedNotes);
        }
        else {
            setNotes()
        }
    }, [])

    const toggleForm = () => {
        setFormTitle("Add")
        setToggle(!toggle);
        setTitle("");
        setDescription("");
    };

    const addNote = (event) => {
        if (!description.trim()) {
            alert('Please enter a note description.');
            return;
        }
        const newNote =
        {
            id: Date.now(),
            title,
            description,
            date: new Date().toLocaleDateString(),
        }
        setNotes([...notes, newNote]);
        setTitle("");
        setDescription("");
        setToggle(!toggle);

        localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
    }

    const deleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
    

    const editNote = (id,title,description,date) => {
        setFormTitle("Edit")
        setToggle(!toggle);
        setTitle(title);
        setDescription(description);

        const note=notes.find((note)=>note.id===id);
        console.log(note);
    }

    return (
        <NotesContext.Provider
            value={{
                toggle,
                toggleForm,
                formTitle,
                title,
                setTitle,
                description,
                setDescription,
                addNote,
                notes,
                deleteNote,
                editNote,
                formTitle,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
};

export default NotesContextProvider;
