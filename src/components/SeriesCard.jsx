import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    release: PropTypes.string,
    series: PropTypes.object.isRequired
}

function SeriesCard({ series }) {
    console.log("Series data:", series);

    return (
        <div className="post">
           {series && (
                <>
                    <h2 className="title">{series.name || 'Title not available'}</h2>
                    <p className="description">{series.summary ? series.summary.replace(/<\/?[^>]+(>|$)/g, "") : 'Description not available'}</p>
                    <p className="release">{series.premiered || 'Release date not available'}</p>
                </>
            )}    
        </div>
    )
}

SeriesCard.propTypes = propTypes;

export default SeriesCard;