import { useState, useEffect } from 'react';
import SeriesCard from './SeriesCard';
import Form from './Form.jsx';
import Modal from './Modal.jsx';
import PropTypes from 'prop-types';

const propTypes = {
    isPosting: PropTypes.bool.isRequired,
    onStopPosting: PropTypes.func.isRequired,
};

export default function CardList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [queryEnabled, setQueryEnabled] = useState(false);
    const [showMore, setShowMore] = useState(null);

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

    function handleSearch(term) {
        setSearchTerm(term);
        setQueryEnabled(true);
    }

    const handleToggle = (index) => {
        setShowMore(showMore === index ? null : index);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <Form onCancel={onStopPosting} onSearch={handleSearch} />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className="posts">
                    {posts.map((post, index) => (
                        <SeriesCard
                            key={post.id}
                            series={post}
                            showMore={showMore === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div className="noPosts">
                    <h3>Get started tracking your favorite shows...</h3>
                </div>
            )}
        </>
    );
}

CardList.propTypes = propTypes;
