
import {useState} from 'react';
import SeriesCard from './SeriesCard';
import Form from './Form.jsx'
import Modal from './Modal.jsx'
import PropTypes from 'prop-types';

const propTypes = {
    isPosting: PropTypes.bool,
    onStopPosting: PropTypes.func,
};

function CardList({ isPosting, onStopPosting }) {
   const [posts, setPosts] = useState([]);

   function addPostHandler(postData){
    setPosts((existingPosts) => [postData, ...existingPosts]);
   }


    return(
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <Form  
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {posts.length > 0 && (<ul className="posts">
                {posts.map((post) => <SeriesCard key={post.title} title={post.title} description={post.description} release={post.release} />)}
            </ul>)}
            {posts.length === 0 && (<div className="noPosts">
                <h3>Get started tracking your favorite shows...</h3>
            </div>)}
        </>
    )
}

CardList.propTypes = propTypes;

export default CardList