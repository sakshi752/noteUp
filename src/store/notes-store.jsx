import React, { createContext, useEffect, useState } from "react";

export const NotesContext = createContext({});

const NotesContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    // notes form 
    const [formTitle, setFormTitle] = useState("Add")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [notes, setNotes] = useState([]);

    // data to store id during update
    const [editNoteId, setEditNoteId] = useState(null);

    // searchFeature
    const [searchQuery, setSearchQuery] = useState("");

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
        // Add notes
        if (formTitle === 'Add') {
            const newNote =
            {
                id: Date.now(),
                title,
                description,
                date: new Date().toLocaleDateString(),
            }
            setNotes([...notes, newNote]);
            localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
        }
        // edit
        else {
            setToggle(!toggle);
            const index = notes.findIndex((note) => note.id === editNoteId);
            if (index !== -1) {
                const updatedNotes = [...notes];
                updatedNotes[index] = {
                    ...updatedNotes[index],
                    title,
                    description,
                    date: new Date().toLocaleDateString(),
                };
                // Update the notes state
                setNotes(updatedNotes);
                // Update localStorage
                localStorage.setItem("notes", JSON.stringify(updatedNotes));
            }
        }

        setTitle("");
        setDescription("");
        setToggle(!toggle);
    }

    const deleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }


    const editNote = (id, noteTitle, noteDescription, noteDate) => {
        setFormTitle("Edit")
        setToggle(!toggle);
        setTitle(noteTitle);
        setDescription(noteDescription);
        setEditNoteId(id);
    }

    const searchNotes = (query) => {
        // If there's no query, return all notes
        if (!query) {
            return setNotes(JSON.parse(localStorage.getItem("notes")));
        }
    
        // Filter notes based on the search query
        const filteredNotes = JSON.parse(localStorage.getItem("notes")).filter((note) => {
            return note.title.toLowerCase().includes(query.trim().toLowerCase());
        });

        setNotes(filteredNotes);
    };

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
                searchNotes,
                searchQuery,
                setSearchQuery
            }}
        >
            {children}
        </NotesContext.Provider>
    );
};

export default NotesContextProvider;
