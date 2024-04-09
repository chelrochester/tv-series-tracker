import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query'
import { fetchSeries } from '../util/http';

const propTypes = {
    onCancel: PropTypes.func,
    onAddPost: PropTypes.func,
};

export default function Form({ onCancel, onAddPost }) {
    const searchElement = useRef();
    const [searchTerm, setSearchTerm] = useState('');

    const { data, isPending, isError } = useQuery({
        queryKey: ['shows', { search: searchTerm ?? ''}],
        queryFn: fetchSeries
    });

    function changeSearchHandler(e) {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    //postData will be altered to API data
    function submitHandler(e) {
        e.preventDefault();
        const postData = data && data.length > 0 && data[0].show ? {
            title: data[0].show.name || 'N/A',
            description: data[0].show.summary || 'No summary available',
            release: data[0].show.id || 'N/A',
        } : {};
        onAddPost(postData);
        onCancel();
        console.log(postData);
    }

    let content = <p>add stuff here</p>;

    if (isPending) {
        content = <p>loading...</p>
    }
    if (isError) {
        content = <p>error</p>
    }
    if (data) {
        content = <ul>
            
            {data.map(show =>{ 
            <li key={show.id}><seriesCard data={show} /></li>})}
        </ul>
    }

    return(
        <>
            <form action="" className="form" onSubmit={submitHandler}>
                <label htmlFor="series" className="label">Search for series:</label>
                <input type="text" value={searchTerm} onChange={changeSearchHandler} ref={searchElement}/>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </form>
            {content}
        </>
    )
}

Form.propTypes = propTypes;