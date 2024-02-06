export async function fetchSeries(searchTerm) {
    let url = 'apiurl'

    if (searchTerm) {
        url += '?search=' + searchTerm
    }

    const response = await fetch(url);

    if(!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { series } = await response.json();

    return series;
}