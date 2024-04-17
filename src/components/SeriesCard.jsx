import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    release: PropTypes.string
}

function SeriesCard(props) {
    return (
        <div className="post">
            <h2 className="title">{props.title ? props.title : 'Title not available'}</h2>
            <p className="description">{props.description ? props.description : 'Description not available'}</p>
            <p className="release">{props.release ? props.release : 'Release date not available'}</p>
        </div>
    )
}

SeriesCard.propTypes = propTypes;

export default SeriesCard;