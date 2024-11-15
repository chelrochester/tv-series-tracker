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
                </>
            )}    
        </div>
    )
}

SeriesCard.propTypes = propTypes;

export default SeriesCard;