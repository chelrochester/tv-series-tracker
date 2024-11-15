import PropTypes from 'prop-types';
import { useRef } from 'react';

const propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default function Form({ onCancel, onSearch }) {
    const searchElement = useRef(null);

    function submitHandler(e) {
        e.preventDefault();
        const searchTerm = searchElement.current.value;
        onSearch(searchTerm);
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <label htmlFor="series" className="label">Search for series:</label>
            <input type="text" ref={searchElement} />
            <div className='formButton'>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

Form.propTypes = propTypes;
