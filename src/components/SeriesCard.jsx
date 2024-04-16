import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    release: PropTypes.string
}

function SeriesCard(props) {
    return (
        <div className="post">
            <h2 className="title">{props.title}</h2>
            <p className="description">{props.description}</p>
            <p className="release">{props.release}</p>
        </div>
    )
}

SeriesCard.propTypes = propTypes;

export default SeriesCard;