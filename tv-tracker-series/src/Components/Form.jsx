import PropTypes from 'prop-types';
import { useState } from 'react';

const propTypes = {
    onCancel: PropTypes.func,
    onAddPost: PropTypes.func,
};

export default function Form({ onCancel, onAddPost }) {
    const [searchSeries, setSearchSeries] = useState();

    function changeSearchHandler(e) {
        setSearchSeries(e.target.value);
    }

    //postData will be altered to API data
    function submitHandler(e) {
        e.preventDefault();
        const postData = {
            title: searchSeries,
            description: searchSeries,
            release: searchSeries
        }
        onAddPost(postData);
        onCancel();
    }

    return(
        <>
            <form action="" className="form" onSubmit={submitHandler}>
                <label htmlFor="series" className="label">Search for series:</label>
                <input type="text" onChange={changeSearchHandler} />
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </form>
        </>
    )
}

Form.propTypes = propTypes;