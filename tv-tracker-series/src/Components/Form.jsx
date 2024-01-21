import PropTypes from 'prop-types';

const propTypes = {
    onChange: PropTypes.func,
};

export default function Form({ onChange }) {


    return(
        <>
            <form action="" className="form">
                <label htmlFor="series" className="label">Search for series:</label>
                <input type="text" onChange={onChange} />
            </form>
        </>
    )
}

Form.propTypes = propTypes;