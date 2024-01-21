import { useState } from 'react';
import SeriesCard from './SeriesCard';
import Form from './Form.jsx'
import Modal from './Modal.jsx'

function CardList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [searchSeries, setSearchSeries] = useState();

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function changeSearchHandler(e) {
        setSearchSeries(e.target.value);
    }


    return(
        <>
            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <Form onChange={changeSearchHandler} />
                </Modal>
            )}
            <ul className="card-list">
                <SeriesCard 
                    title={searchSeries}
                    description="A trio solves murders in their apartment building for a podcast"
                    release="release date: 12/12/12"
                />
                <SeriesCard 
                    title="True Detective"
                    description="An anthology of detective stories"
                    release="release date: 12/12/12"
                />
                <SeriesCard 
                    title="What We Do in the Shadows"
                    description="A mockumentary about vampires in New Jersey"
                    release="release date: 12/12/12"
                />
            </ul>
        </>
    )
}

export default CardList