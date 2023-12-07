import SeriesCard from './SeriesCard';

function CardList() {
    return(
        <>
            <ul>
                <SeriesCard 
                    title="Only Murder in the Building"
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