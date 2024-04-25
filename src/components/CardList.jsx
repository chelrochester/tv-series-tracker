
import {useState} from 'react';
import SeriesCard from './SeriesCard';
import Form from './Form.jsx'
import Modal from './Modal.jsx'
import PropTypes from 'prop-types';
// import { useQuery } from '@tanstack/react-query';
// import { fetchSeries } from '../util/http';

const propTypes = {
    isPosting: PropTypes.bool,
    onStopPosting: PropTypes.func,
};

export default function CardList({ isPosting, onStopPosting }) {
   const [posts, setPosts] = useState([]);

//    const { data, isError, error } = useQuery({
//     queryKey: ['series'],
//     queryFn: fetchSeries,
//     staleTime: 5000,
// });

// console.log(data);

// let content;

// if (isError) {
//     content = (
//         <div>
//             <p>There was an error fetching the series</p>
//             <p>{error.info?.message || 'Failed to fetch series.'}</p>
//         </div>
//     );
// }

// if (data) {
//     console.log("Full data:", data);
//     content = (
//         <ul>
//         {data.map((show) => {
//             console.log("Series data:", show);
//             return (
//                 <li key={show.id}>
//                     <SeriesCard series={show} />
//                     <h2>{show.name}</h2>
//                     <img src={show.image ? show.image.medium : ''} alt={show.name} />
//                     <p>{show.summary}</p>
//                 </li>
//             );
//         })}
//     </ul> 
//     );}

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
                {posts.map((post) => <SeriesCard key={post.id} title={post.title} description={post.description} release={post.release} />)}
            </ul>)}
            {posts.length === 0 && (<div className="noPosts">
                <h3>Get started tracking your favorite shows...</h3>
            </div>)}
        </>
    )
}

CardList.propTypes = propTypes;

