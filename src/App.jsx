import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import NotesContextProvider, { NotesContext } from './store/notes-store';
import Layout from './components/Layout';

function App() {

  return (
    <NotesContextProvider>
      <Container>
        <Header />
        <Layout/>
      </Container>
    </NotesContextProvider>
  );
};

export default App;
