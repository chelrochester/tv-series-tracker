import PropTypes from 'prop-types';

const propTypes = {
    onCreatePost: PropTypes.func,
};

export default function Header({ onCreatePost }) {
    return (
        <header className="header">
            <h1 className="header-title">tv series tracker</h1>
            <p>
                <button onClick={onCreatePost}>New Post</button>
            </p>
            
        </header>
    )
}

Header.propTypes = propTypes;