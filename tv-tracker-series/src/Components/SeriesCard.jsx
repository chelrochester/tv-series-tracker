import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number
}

function SeriesCard(data) {
    const { id, name, image, summary } = data;

    return (
        <div className="post" key={id}>
            <h2 className='title'>{name}</h2>
            <img src={image?.medium} alt={name} />
            <p className='description'>{summary}</p>
        </div>
    )
}

SeriesCard.propTypes = propTypes;

export default SeriesCard;