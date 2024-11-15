import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    release: PropTypes.string,
    series: PropTypes.object.isRequired,
    showMore: PropTypes.bool,
    onToggle: PropTypes.func
}

function SeriesCard({ series, showMore, onToggle }) {
    console.log("Series data:", series);

    return (
        <div className="post">
           {series && (
                <>
                    <h2 className="title">{series.name || 'Title not available'}</h2>
                    <p className="release">{series.premiered || 'Release date not available'}</p>

                    <p className="site">{series.officialSite ? 
                            <a href={series.officialSite} target="_blank" rel="noopener noreferrer">Visit Official Site</a> : 
                            'Site not available'}</p>

                    <p className="schedule">
                            {series.status === 'Ended' ? 
                            `Ended: ${series.ended}` : 
                            (series.schedule && series.schedule.days.length > 0 ? 
                            `Schedule: ${series.schedule.days.join(', ')}${series.schedule.time ? ` at ${series.schedule.time}` : ''}` : 
                            'No schedule available')}
                    </p>
                    <button className='summaryButton' onClick={onToggle} style={{ cursor: 'pointer', marginTop: '5px' }}>
                        {showMore ? 'Hide Description' : 'Show Description'}
                    </button>
                    {showMore && (
                        <p className="description">
                            {series.summary ? series.summary.replace(/<\/?[^>]+(>|$)/g, "") : 'Description not available'}
                        </p>
                    )}
                </>
            )}    
        </div>
    )
}

SeriesCard.propTypes = propTypes;

export default SeriesCard;