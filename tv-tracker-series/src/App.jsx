import { useState } from 'react';
import CardList from './Components/CardList';
import Header from './Components/Header'
import './App.css'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
}

  return (
    <>
      <Header onCreatePost={showModalHandler} />
      <CardList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
    </>
  )
}

export default App
