import { useState } from 'react';
import CardList from './components/CardList';
import Header from './components/Header'
// import { SeriesContextProvider } from './store/series-data-context';
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
