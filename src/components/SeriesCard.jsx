import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    release: PropTypes.string,
    series: PropTypes.object.isRequired
}

function SeriesCard({ series, title }) {
    console.log("Series data:", series);

    return (
        <div className="post">
           {series && (
                <>
                    <h2 className="title">{title || 'Title not available'}</h2>
                    <p className="description">{series.description? series.description : 'Description not available'}</p>
                    <p className="release">{series.release? series.release : 'Release date not available'}</p>
                </>
            )}    
        </div>
    )
}

SeriesCard.propTypes = propTypes;

export default SeriesCard;