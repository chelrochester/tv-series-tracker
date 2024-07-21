# tv-tracker-series

## Landing Page

Before posts:
![image](https://github.com/chelrochester/tv-tracker-series/assets/50529205/5ce38df8-4069-4cd7-85fc-20d0a5767aff)

After posts:
![image](https://github.com/chelrochester/TVTrackerImage/blob/main/tv-tracker-complete.png?raw=true)

## Links

- Link to live site: [tv tracker](https://tvtracker-chelrochester.netlify.app/)

## What I've Learned

-Fetching data
-Handling forms

## Fetching Data

useEffect(() => {
        async function fetchSeries() {
            if (queryEnabled && searchTerm) {
                const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
                const data = await response.json();
                const exactMatch = data.find(item => item.show.name.toLowerCase() === searchTerm.toLowerCase());
                if (exactMatch) {
                    setPosts((existingPosts) => {
                        const postExists = existingPosts.some(post => post.id === exactMatch.show.id);
                        if (!postExists) {
                            return [exactMatch.show, ...existingPosts];
                        }
                        return existingPosts;
                    });
                }
                setQueryEnabled(false);
                onStopPosting();
            }
        }
        fetchSeries();
    }, [queryEnabled, searchTerm, onStopPosting]);

## Handling forms

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
            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
    );
}



