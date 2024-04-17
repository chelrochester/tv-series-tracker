import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSeries } from '../util/http';

const propTypes = {
    onCancel: PropTypes.func,
    onAddPost: PropTypes.func,
};

export default function Form({ onCancel, onAddPost }) {
    const searchElement = useRef(null);
    const [searchSeries, setSearchSeries] = useState('');

    const { data } = useQuery({
        queryKey: ['series', { search: searchSeries }],
        queryFn: () => fetchSeries(searchSeries),
        staleTime: 5000,
    });

    console.log(data);

    let content = <p>No series found.</p>;

    if (data) {
        console.log(data);
        content = <ul>
            {data.map((series) => (
                <li key={series.id}>
                    <h2>{series.name}</h2>
                    <img src={series.image} alt={series.name} />
                    <p>{series.summary}</p>
                </li>
            ))}
        </ul>
    }

    //postData will be altered to API data
    function submitHandler(e) {
        setSearchSeries(searchElement.current.value);
        e.preventDefault();
          
        const postData = {content}
        
        onAddPost(postData);
        onCancel();
    }



    return(
        <>
            <form action="" className="form" onSubmit={submitHandler}>
                <label htmlFor="series" className="label">Search for series:</label>
                <input type="text" ref={searchElement} />
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </form>
        </>
    )
}

Form.propTypes = propTypes;