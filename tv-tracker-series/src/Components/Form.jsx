import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query'
import { fetchSeries } from '../util/http';

const propTypes = {
    onCancel: PropTypes.func,
    onAddPost: PropTypes.func,
};

// eslint-disable-next-line no-unused-vars
export default function Form({ onCancel, onAddPost }) {
    const searchElement = useRef();

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['events', {search: searchTerm }],
        queryFn: () => fetchSeries(searchTerm)
    });

    const [searchTerm, setSearchTerm] = useState();

    function changeSearchHandler(e) {
        setSearchTerm(e.target.value);
    }

    //postData will be altered to API data
    function submitHandler(e) {
        e.preventDefault();
        setSearchTerm(searchElement.current.value)
        // const postData = {
        //     title: searchSeries,
        //     description: searchSeries,
        //     release: searchSeries
        // }
        // onAddPost(postData);
        // onCancel();
    }

    let content = <p>add stuff here</p>;

    if (isPending) {
        content = <p>loading...</p>
    }
    if (isError) {
        content = <p>{error}</p>
    }
    if (data) {
        content = <ul>
            {data.map(event => <li key={event.id}><seriesCard /></li>)}
        </ul>
    }

    return(
        <>
            <form action="" className="form" onSubmit={submitHandler}>
                <label htmlFor="series" className="label">Search for series:</label>
                <input type="text" onChange={changeSearchHandler} ref={searchElement} />
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </form>
            {content}
        </>
    )
}

Form.propTypes = propTypes;