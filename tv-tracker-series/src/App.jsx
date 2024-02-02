import { useState } from 'react';
import CardList from './Components/CardList';
import Header from './Components/Header'
import { SeriesContextProvider } from './store/series-data-context';
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
    <SeriesContextProvider>
      <Header onCreatePost={showModalHandler} />
      <CardList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
    </SeriesContextProvider>
  )
}

export default App
