import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
// import { fetchSeries } from '../util/http';
import SeriesCard from './SeriesCard';

const propTypes = {
    onCancel: PropTypes.func,
    onAddPost: PropTypes.func,
};

export default function Form({ onCancel, onAddPost }) {
    const searchElement = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [queryEnabled, setQueryEnabled] = useState(false);
    
    const { data, isError, error } = useQuery({
        queryKey: ['searchTerm', {searchTerm}],
        queryFn: () => {
            console.log('fetched')
            if (submitHandler) {
                return fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
                .then((response) => response.json())
            }
        },
        enabled: queryEnabled,
    });

    console.log("Query Data: ", data);
    console.log("Is Error: ", isError);
    console.log("Error: ", error);

    console.log("Current search term:", searchElement);

    let content;

    if (isError) {
        content = (
            <div>
                <p>There was an error fetching the series</p>
                <p>{error.info?.message || 'Failed to fetch series.'}</p>
            </div>
        );
    }

    if (data && data.length > 0) {
        console.log(data);
        content = (
            <ul>
            {data.map((item) => {
                console.log("Item: ", item);
                const series = item.show;
                return <SeriesCard key={series.id} series={series} title={series.title}  />
            })}
        </ul> 
        ); 
    } else {
        content = <div>Loading or incomplete data...</div>;
    }

    //postData will be altered to API data
    function submitHandler(e) {
        e.preventDefault();
        setSearchTerm(searchElement.current.value);
        setQueryEnabled(true);
          
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