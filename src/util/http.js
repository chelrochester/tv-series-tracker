export async function fetchSeries(searchTerm) {
    console.log('Request URL:', url);
    console.log('Request Parameters:', searchTerm);
    let url = 'https://api.tvmaze.com/search/shows';

    if (searchTerm) {
        url += '?q=' + searchTerm
    }

    const response = await fetch(url);

    if(!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const results = await response.json();

    return results.map((result) => ({
        id: result.show.id,
        name: result.show.name,
        image: result.show.image?.medium,
        summary: result.show.summary,
    }));
}